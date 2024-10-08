// AppointementBooking.jsx
import React, { useCallback, useState } from 'react';
import { Datepicker } from '@mobiscroll/react';
import { Container } from '@mui/material';
import { useLocation } from "react-router-dom";
import './appointment-booking.css'; // Make sure this file is included

function AppointementBooking({ onChange, value, onPriceChange }) {
  const [singleLabels, setSingleLabels] = useState([]);
  const [singleInvalid, setSingleInvalid] = useState([]);
  const location = useLocation();
  const propertyId = location.pathname.split('/')[3];

  const fetchAvailabilityData = useCallback(async (year, month) => {
    try {
      const response = await fetch(`http://localhost:3000/availabilities/api/propertyById/${propertyId}`);
      const data = await response.json();

      const labels = [];
      const invalid = [];
      let price = 0; // Initialize price variable

      data.forEach(entry => {
        entry.available_slots.forEach(slot => {
          const startDate = new Date(slot.start_time);
          const endDate = new Date(slot.end_time);

          if (slot.price > 0) {
            // Update price if greater than current price
            price = Math.max(price, slot.price);
            // Iterate over each day from startDate to endDate
            let currentDate = new Date(startDate);
            while (currentDate <= endDate) {
              labels.push({
                start: new Date(currentDate),
                end: new Date(currentDate),
                title: '$' + slot.price,
                textColor: '#e1528f',
              });
              currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
            }
          } else {
            invalid.push(startDate);
          }
        });
      });

      setSingleLabels(labels);
      setSingleInvalid(invalid);
      onPriceChange(price); // Pass price to parent component

    } catch (error) {
      console.error('Error fetching availability data:', error);
    }
  }, [propertyId, onPriceChange]);

  const handlePageLoadingSingle = useCallback((args) => {
    const d = args.firstDay;
    fetchAvailabilityData(d.getFullYear(), d.getMonth() + 1);
  }, [fetchAvailabilityData]);

  return (
    <Container className="mbsc-form-group1">
      <div className="mbsc-form-group">
        <Datepicker
          theme="ios"
          themeVariant="light"
          display="inline"
          controls={['calendar']}
          labels={singleLabels}
          invalid={singleInvalid}
          pages={2}
          onPageLoading={handlePageLoadingSingle}
          value={value}
          onChange={onChange}
          displayMode="inline"
          className="custom-datepicker" // Apply custom class
        />
      </div>
    </Container>
  );
}

export default AppointementBooking;
