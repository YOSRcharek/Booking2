import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="py-5 cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">Lets you Explore the Best. Contact Us Now</h2>
              <p className="mb-4 lead text-white text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit?
              </p>
              <p className="mb-0">
                <a href="booking.html" className="btn btn-outline-white text-white btn-md font-weight-bold">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">About Tour</h3>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                  </p>
                </div>
                <div className="widget">
                  <ul className="list-unstyled social">
                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                    <li><a href="#"><span className="icon-instagram"></span></a></li>
                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                    <li><a href="#"><span className="icon-linkedin"></span></a></li>
                    <li><a href="#"><span className="icon-dribbble"></span></a></li>
                    <li><a href="#"><span className="icon-pinterest"></span></a></li>
                    <li><a href="#"><span className="icon-apple"></span></a></li>
                    <li><a href="#"><span className="icon-google"></span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Pages</h3>
                  <ul className="links list-unstyled">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">Resources</h3>
                  <ul className="links list-unstyled">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Contact</h3>
                  <ul className="list-unstyled quick-info links">
                    <li className="email"><a href="#">mail@example.com</a></li>
                    <li className="phone"><a href="#">+1 222 212 3819</a></li>
                    <li className="address"><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner dark">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                <p>
                  Copyright &copy;{currentYear}. All Rights Reserved. &mdash; Designed with love by 
                  <a href="https://untree.co" className="link-highlight">Untree.co</a> 
                  Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
