import React from 'react';
import { Link } from 'react-router-dom';
import './footer-styles.css';


const Footer = () => {
    return(
        <>
        <Footer />
   
        <footer className="footer">
                        <div className="container">
                          <div className="row">
                              <div className="footer-col">
                                  <h4>Visit us at Emerite Furnitures</h4>
                                  <ul>
                                  <li><Link to='/'>Table set</Link></li>
                                  <li><Link to='/dining'>Dining set</Link></li>
                                  <li><Link to='/'>Kitchen set</Link></li>
                                  <li><Link to='/'>Bedroom set</Link></li>
                                  </ul>
                              </div>
                              <div className="footer-col">
                                <h4>Explore More with Emerite</h4>
                                <ul>
                                <li><Link to='/'>Make your order</Link></li>
                                <li><Link to='/'>Payment</Link></li>
                                <li><Link to='/'>Terms and Conditions</Link></li>
                                <li><Link to='/'>Furnitures</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Follow us on Socials</h4>
                                <ul>
                                <li><Link to='/'>Tik Tok</Link></li>
                                <li><Link to='/'>Instagram</Link></li>
                                <li><Link to='/'>Facebook</Link></li>
                                <li><Link to='/'>Twitter (X)</Link></li>
                                </ul>
                                
                            </div>
                           <div className="footer-col">
                                <h4>About Emerite Furnitures</h4>
                                <ul>
                                <li><Link to='/'>Deliveries</Link></li>
                                <li><Link to='/'>Offers</Link></li>
                                <li><Link to='/'>Manage Cookies</Link></li>
                                <li><Link to='/'>Learn More</Link></li>
                                </ul>
                            </div>
                          </div>
                          <div className="you">
                            <p className="copy-right">Copyright (c) 2023, by Emerite Homes. All rights Reserved </p>
                        </div>
                        </div>
                     </footer>    

        </>
    )
}
export default Footer;