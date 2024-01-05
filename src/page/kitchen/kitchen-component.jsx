import React from "react";
import { Link } from "react-router-dom";
import Kit1 from '../../Assets/images/kit1.jpg';
import Kit2 from '../../Assets/images/kit2.jpg';
import Kit6 from '../../Assets/images/kit6.jpg';
import Kit7 from '../../Assets/images/kit7.jpg';
import Kit8 from '../../Assets/images/kit8.jpg';
import smilingwoman2 from '../../Assets/images/smilingwoman2.jpg';
import smilingman from '../../Assets/images/smilingman.jpg';
import Furniture4 from '../../Assets/images/furniture 4.jpg';
import Furniture5 from '../../Assets/images/furniture5.jpg';
import Furniture11 from '../../Assets/images/furniture1.jpg';
import CustomButton from "../../component/customButton/custom-Button";
import Kit4 from '../../Assets/images/kit4.jpg';
import smilingman4 from '../../Assets/images/smilingman4.jpg'
import Kit5 from '../../Assets/images/kit5.jpg';
import kit3 from '../../Assets/images/kit3.jpg';
import Header from '../../navigation/header/header.component';
import './kitchen-styles.css';


const Kitchenpage = () => {
    return (
        <>
        <Header />
        <div>
            <h1 className="kit">Check out our unique kitchen sets</h1>
        </div>

             <div className="gallery1">
        <figure className="gallery-item1">
                  <img
                    src={Kit4} 
                    alt='kit4'/>
                    <p>Turkish strokes, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Tenetur aspernatur magni !
                         harum dolore  voluptate expedita placeat sint.</p>
                    <p> $2,300 </p>
                         <CustomButton type='submit'>Order Now</CustomButton> 
              
                </figure>



                   <div className="slider-container">
                    <div className="slider">
                        <div className="slide">
                            <img src={Kit1} alt="kit1"/>
                        </div>
                        <div className="slide">
                            <img src={Kit2} alt="kit2"/>
                        </div>
                        <div className="slide">
                            <img src={kit3} alt="kit3"/>
                            
                        </div>
                        
                        
                        
                        
                        
                    </div>
                    
                    </div>
                    
                <figure className="gallery-item1">
              <img
                src={Kit5}
                alt='kit5'/>
                <p>Foreign and wonderfully made Turkish piece of chairs available
                    Lorem ipsum dolor, call us we got you covered sit amet consectetur, adipisicing elit.
                     Inventore quo enim odit vero!
                </p>
                <p>$3,300</p>
                <CustomButton type='submit'>Order Now</CustomButton>
            </figure>
          </div> 
            <div>
                <h1 className="sell">We make and sell the best furnitures</h1>
            </div>
          <h1 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Sapiente quo consequatur sit vitae distinctio pariatur sint,
          voluptas quidem tenetur dignissimos
         odit eligendi porro rerum repellat? Ipsam impedit at laudantium obcaecati.</h1>

        <div className="flex-div">
            <img src={Kit6} alt="kit6"/>
            <img src={Kit7} alt="kit7"/>
            <img src={Kit8} alt="kit8"/>
           

            <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam tempora fugit necessitatibus eveniet consequuntur delectus. Suscipit facilis aspernatur quisquam quis distinctio,
                 tenetur nulla
                 <CustomButton type='submit'>Order Now</CustomButton>
            </h2>

        </div>  

        <div className="delivered-meals">
                <div className="delivered-imgs">
                <img src={Furniture4} alt='furniture4' />
          <img src={Furniture5} alt='furniture5' />
          <img src={Furniture11} alt='furniture1'/>
          <img src={smilingwoman2} alt='smilingwoman2' />
          <img src={smilingman} alt='smilingman' />
          <img src={smilingman4} alt='smilingman4' />
                </div>
                <p className="delivered-text">
                  <span>30,000+</span>  pieces of Kitchen sets delivered last year!
                </p>
              </div>

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
                                <li><Link to='/contact'>Contact us</Link></li>
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
export default Kitchenpage; 