import React from "react";
import { Link } from "react-router-dom";
import Header from "../../navigation/header/header.component";
import PhoneIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import HomeIcon from '@mui/icons-material/Home';
import './contact-styles.css';


const Contactpage = () => {
    return (
        <>
        <Header />
            <h2 className="better" >We are committed to serving you better </h2>
            <h3 className="con"> Contact Us Below </h3>
            

                        <Link className='wall-side1' to="">
                            <PhoneIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>08102848097</span>
                        </Link>
                    

                    
                    <Link className='wall-side1' to="">
                            <MessageIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>emeritefurniturehome@gmail.com</span>
                        </Link>
                    

                    
                    <Link className='wall-side1' to="">
                            <HomeIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>Shops H331 & H332, Ikota Shopping Complex Ajah,
                            Lekki-Epe Expressway, Lagos State.</span>
                        </Link>

                        <footer className="footer">
                        
                        <div className="row">
                            <div className="footer-col">
                                <h4>Visit us at Emerite Furnitures</h4>
                                <ul>
                                <li><Link to='/office'>Office set</Link></li>
                                <li><Link to='/dining'>Dining set</Link></li>
                                <li><Link to='/kitchen'>Kitchen set</Link></li>
                                <li><Link to='/bedroom'>Bedroom set</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                              <h4>Explore More with Emerite</h4>
                              <ul>
                              <li><Link to='/orders'>Make your order</Link></li>
                              <li><Link to='/contact'>Contact Us</Link></li>
                              <li><Link to='/terms'>Terms and Conditions</Link></li>
                              <li><Link to='/furniture'>Furniture</Link></li>
                              </ul>
                          </div>
                          <div className="footer-col">
                              <h4>Follow us on Socials</h4>
                              <ul>
                              <li><Link to='/whatsapp'>Whatsapp</Link></li>
                              <li><Link to='/instagram'>Instagram</Link></li>
                              <li><Link to='/facebook'>Facebook</Link></li>
                              <li><Link to='/twitter'>Twitter (X)</Link></li>
                              </ul>
                              
                          </div>
                         <div className="footer-col">
                              <h4>About Emerite Furnitures</h4>
                              <ul>
                              <li><Link to='/Acknowledgment'>Acknowledgment</Link></li>
                              <li><Link to='/offer'>Offers</Link></li>
                              <li><Link to='/manage'>Manage Complaints</Link></li>
                              <li><Link to='/learn'>Learn More</Link></li>
                              </ul>
                          </div>
                        </div>
                        <div className="you">
                          <p className="copy-right">Copyright (c) 2024, by Emerite Homes. All rights Reserved </p>
                      </div>
                      
                   </footer>  
                    


        </>
    )
}
export default Contactpage