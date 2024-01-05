import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../component/customButton/custom-Button';
import Dine2 from '../../Assets/images/dine2.jpg';
import Dine1 from '../../Assets/images/dine1.jpg';
import Dine4 from '../../Assets/images/dine4.jpg';
import Dine3 from '../../Assets/images/dine3.jpg';
import Kit3 from '../../Assets/images/kit3.jpg';
import off8 from '../../Assets/images/off8.jpg';
import kit1 from '../../Assets/images/kit1.jpg';
import kit2 from '../../Assets/images/kit2.jpg';
import kit3 from '../../Assets/images/kit3.jpg';
import kit4 from '../../Assets/images/kit4.jpg';
import off9 from '../../Assets/images/off9.jpg';
import off10 from '../../Assets/images/off10.jpg';
import off11 from '../../Assets/images/off11.jpg';
import bed5 from '../../Assets/images/bed5.jpg';
import bed1 from '../../Assets/images/bed1.jpg';
import bed2 from '../../Assets/images/bed2.jpg';
import Header from '../../navigation/header/header.component';
import 'animate.css/animate.min.css';
import './furniture-styles.css';



const FurniturePage = () => {
    return (
        <>
        <Header />
       <div className="animate__animated animate__pulse">
        <h1 className='we'>We offer the best designs at pocket friendly prices</h1>
       </div>
        <div className="Thanks">
            <div>
                <h2 className="heading-primary">Executive Dining</h2> 
                <h3 className='price'>#1,250,000</h3>     
            <img src={Dine2} className="giver" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>
        
         <div>
                <h2 className="heading-primary">Luxury Dining</h2>
                <h3 className='price'>#1,700,000</h3>
                <img src={Dine1} className="giver" alt="/"/> 
                <div>
                <CustomButton type='submit'>Order Now</CustomButton>
              </div>     
            </div>

             <div>
                <h2 className="heading-primary">Royal Dining</h2>
                <h3 className='price'>#2,150,000</h3>
                <img src={Dine3} className="giver" alt="/"/>
                <div>
                <CustomButton type='submit'>Order Now</CustomButton>
                </div>
                </div>


                <div>
                <h2 className="heading-primary">Classic Dining</h2>
                <h3 className='price'>#2,150,000</h3>
                <img src={Dine4} className="giver" alt="/"/>
                <div>
                <CustomButton type='submit'>Order Now</CustomButton>
                </div>
                </div>
                </div>



            <div className="Oluwa">
            <div>
            <h2 className="heading-primary">Classic Kitchen</h2>
            <h3 className='price'>#500,000</h3>
            <img src={Kit3} className="take" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>
        
            <div>
            <h2 className="heading-primary">Excellent bedroom</h2>
            <h3 className='price'>#3,550,000</h3>
            <img src={bed1} className="give" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>

            <div>
            <h2 className="heading-primary">Dunket bed</h2>
            <h3 className='price'>#2,200,000</h3>
            <img src={bed2} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>

            
        </div>
        <div>
            <h2 className="heading-primary">Lovely Beds</h2>
            <h3 className='price'>#1,200,000</h3>
            <img src={bed5} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
       </div>  
      </div>


      <div className="Oluwa">
            <div>
            <h2 className="heading-primary">charming office set</h2>
            <h3 className='price'>#500,000</h3>
            <img src={off11} className="take" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>
        
            <div>
            <h2 className="heading-primary">Excellent office set</h2>
            <h3 className='price'>#3,550,000</h3>
            <img src={off10} className="give" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>

            <div>
            <h2 className="heading-primary">Dunket office set</h2>
            <h3 className='price'>#2,200,000</h3>
            <img src={off9} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>

            
        </div>
        <div>
            <h2 className="heading-primary">Affordable sets</h2>
            <h3 className='price'>#1,200,000</h3>
            <img src={off8} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
       </div>  
      </div>

      <div className="Oluwa">
            <div>
            <h2 className="heading-primary">Classic Kitchen</h2>
            <h3 className='price'>#500,000</h3>
            <img src={kit4} className="take" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>
        
            <div>
            <h2 className="heading-primary">Excellent kitchen</h2>
            <h3 className='price'>#3,550,000</h3>
            <img src={kit3} className="give" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
            </div>

            <div>
            <h2 className="heading-primary">Modern kitchen</h2>
            <h3 className='price'>#2,200,000</h3>
            <img src={kit2} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>

            
        </div>
        <div>
            <h2 className="heading-primary">Spacious kitchens</h2>
            <h3 className='price'>#1,200,000</h3>
            <img src={kit1} className="ask" alt="/"/>
            <div>
            <CustomButton type='submit'>Order Now</CustomButton>
            </div>
       </div>  
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
export default FurniturePage;