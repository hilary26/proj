import React from "react";
import { Link } from "react-router-dom";
import Header from "../../navigation/header/header.component";
import './ack-styles.css';
import 'animate.css/animate.min.css';


const AcknowledgmentPage = () => {
    return (
        <>
        <Header />
        <div className="animate__animated animate__pulse">
        <h1 className="Ack"> Acknowledgment </h1>
        </div>

        <div>
            <p className="iuc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos ipsum voluptatum, in dolor unde deserunt, a nesciunt eos ea, veritatis odio
                 suscipit debitis
                 tempora doloremque. Repellendus in inventore ad minus!
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis fugiat adipisci
                  nam earum, perferendis ipsam porro quam reprehenderit eius quos cum repellat
                  dolorum nobis deserunt possimus facilis eveniet? Hic, quod.</p>

                  <p className="testimonial-name">&mdash; Mackson Rob Norman</p>
        </div>
        <p className="iuc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Exercitationem quasi architecto dolorem ipsa quisquam.
              Quibusdam quam quia facilis voluptatem? Laudantium ratione
             reiciendis dolorem perferendis animi eaque voluptas, ad molestiae. Quae.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quidem quasi et laboriosam pariatur illo, earum cumque molestias voluptatem accusamus saepe.
              Error qui exercitationem temporibus quidem tenetur hic autem veritatis architecto.</p>

              <p className="testimonial-name">&mdash; Stella Robbinson</p>



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
export default AcknowledgmentPage;