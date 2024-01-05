import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../component/customButton/custom-Button";
import Header from "../../navigation/header/header.component";
import smilingwoman1 from '../../Assets/images/smilingwoman1.jpg';
import smilingwoman2 from '../../Assets/images/smilingwoman2.jpg';
import ad1 from '../../Assets/images/ad1.jpg';
import ad2 from '../../Assets/images/ad2.jpg';
import ad3 from '../../Assets/images/ad3.jpg';
import Smi from '../../Assets/images/Smi.webp';
import smilingman from '../../Assets/images/smilingman.jpg';
import './read-styles.css';


const ReadPage = () => {
    return (
        <>
        <Header />

        <h1 className="Young">The Emerite Center</h1>
    <h2 className="The"> Our Home Furnitures offers the best, 
        manage payment methods and prompt delivery.</h2>
        <div>
        <CustomButton type='submit'>How it works</CustomButton>
        </div>
        <h1 className="bill-center">What is Emerite Furniture About?</h1>
        <div className="flex-container">
            <img src={smilingman} className="img-0" alt="/"/>
            <h2>See invoice due dates and past-due bills, administrative tasks, and relevant alerts on one dashboard.</h2>
            <img src={smilingwoman1} className="img-0" alt="/"/>
            <h2>Pay an invoice without even logging in. Set up an automatic payment schedule,
                 and add or remove payment types from your Billing Center wallet.</h2>
                 <img src={smilingwoman2} className="img-0"  alt="/"/>
                 <h2>A searchable, sortable table view of all your bills lets you find exactly what you're looking for.</h2>


        </div>
        <div>
            <h1 className="Go1">Go Paperless</h1>
            <h2 className="Go">If you have a shipping account that is six, eight, 
                or nine digits long, enroll in the Billing Center and save a tree. </h2>
                <img src={Smi} className="imgSmile" alt="/"/>

        </div>
        <h1 className="more">Always at your service</h1>
        <div className="flex-container1">
            <h2>Incorporate Billing information into your existing EDI Infastructure.</h2>
            <h2>This Legacy tool allows you to view, download and print invoices or G4S Billing Data Files.</h2>
            <h2>Access sample files,data dictionary, header row, Charge code descriptions, and XLM Schema.</h2>

        </div>
        
        <img src={ad1} className="advert1" alt="/"/>
        <img src={ad2} className="advert1" alt="/"/>
        <img src={ad3} className="advert1" alt="/"/>

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
                            <p className="copy-right">Copyright (c) 2023, by Emerite Homes. All rights Reserved </p>
                        </div>
                        
                     </footer>  

        </>
    )
}
export default ReadPage;