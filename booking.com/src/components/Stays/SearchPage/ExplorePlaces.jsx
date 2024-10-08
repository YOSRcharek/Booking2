import {useEffect, useState} from "react";
import {HotelDataComponent} from "./HotelDataComponent";
import {FilteringBox} from "./FilteringBox";
import {SearchBox} from "./SearchBox";
import styles from "./SearchBox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getHotels} from "../../../actions/hotelAction";
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import Card from 'react-bootstrap/Card';
export const ExplorePlaces = () => {
    const { state: { articles ,destination} } = useLocation();
   
    const dispatch = useDispatch();
    const hotelData = useSelector(state => state.hotelsData.hotels);
    const [showData, setShowData] = useState(hotelData);
    const [price, setPrice] = useState(false);
    const [star, setStar] = useState(false);
    const prefilledData = useLocation().state;

    const filterPrice = (e) => {
        if (e.target.name === "price" && e.target.checked) {
            if (Number(e.target.value) === 1500) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return (Number(el.discountedPrice) > 1500)
                });
                setShowData([...filteredAbove1500]);
            } else if (Number(e.target.value) === 1000) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return ((Number(el.discountedPrice) >= 1000) && (Number(el.discountedPrice) < 1500));
                });
                setShowData([...filteredAbove1500]);
            } else if (Number(e.target.value) === 0) {
                const filteredAbove1500 = hotelData.filter((el) => {
                    return (Number(el.discountedPrice) <= 1000)
                });
                setShowData([...filteredAbove1500]);
            }
            setPrice(!price);
        } else {
            setShowData(hotelData);
        }
    };

    const filterStar = (e) => {
        if (e.target.checked) {
            const filteredData = showData.filter((el) => {
                return (Number(el.rating) === Number(e.target.value))
            });
            setShowData([...filteredData]);
        } else {
            setShowData(hotelData);
        }
    };

    const filterPolicy = (e) => {
        if (e.target.checked) {
            if (e.target.value === "cancellation") {
                const filteredAbove1500 = showData.filter((el) => {
                    return (el.cancellation === "Free")
                });
                setShowData([...filteredAbove1500]);
            }
            if (e.target.value === "breakFast") {
                const filteredAbove1500 = showData.filter((el) => {
                    return (el.breakFast === "Included")
                });
                setShowData([...filteredAbove1500]);
            }
        } else {
            setShowData(hotelData);
        }
    };

    const filterSearch = (search) => {
        const filteredData = hotelData.filter((e) => {
            return (
                e.name.toLowerCase().includes(search.toLowerCase()) &&
                e.city.toLowerCase() === destination.toLowerCase()
            );
        });
        setShowData(filteredData);
    };

    useEffect(() => {
        if (hotelData.length > 0) {
            setShowData(hotelData.filter(e => e.city.toLowerCase() === destination.toLowerCase()));
        }
        if (hotelData.length === 0) {
            if (prefilledData !== undefined) {
                dispatch(getHotels(prefilledData.query));
            } else {
                dispatch(getHotels());
            }
        }
    }, [hotelData, destination]);

    return <>
    
    <div className={styles.searchPageContainer}>
        
        <div className={styles.articlesContainer}>
          {articles.map((article, index) => (
            <Card key={index} className={styles.articleCard}>
              <Card.Header>{article.title}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{article.content}</p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          ))}
        </div>
    </div>
        <div className={styles.searchPageContainer}>
            <div className={styles.left}>
                <SearchBox filterSearch={filterSearch} data={prefilledData} />
                <FilteringBox filterPrice={filterPrice} filterStar={filterStar} filterPolicy={filterPolicy} />
            </div>

            <div className={styles.hotelListContainer}>
                {showData.length === 0 ? (
                    <div>Aucun hôtel trouvé</div>
                ) : (
                    showData.filter(e => e.city.toLowerCase() === destination.toLowerCase()).map((e, i) => {
                        return <HotelDataComponent
                            url={e.url}
                            key={e.id}
                            name={e.name}
                            city={e.city}
                            distance={e.distance}
                            bedSize={e.bedSize} 
                            roomSize={e.roomSize}
                            cancelationPolicy={e.cancelationPolicy}
                            cancellation={e.cancellation}
                            reviews={e.reviews}
                            rating={e.rating}
                            breakFast={e.breakFast}
                            availability={e.availability}
                            availableRooms={e.availableRooms}
                            price={e.price}
                            discountedPrice={e.discountedPrice}
                            id={e.id}
                            view={e.view}
                        />;
                    })
                )}
            </div>
        </div>
    </>
}
