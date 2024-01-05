import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../component/customButton/custom-Button";
import Header from '../../navigation/header/header.component';
import chair5 from '../../Assets/images/chair5.jpg';
import off12 from '../../Assets/images/off12.jpg';
import smilingman1 from '../../Assets/images/smilingman1.jpg';
import smilingman4 from '../../Assets/images/smilingman4.jpg'
import smilingwoman1 from '../../Assets/images/smilingwoman1.jpg';
import smilingman from '../../Assets/images/smilingman.jpg';
import chair1 from '../../Assets/images/chair1.jpg';
import Furniture13 from '../../Assets/images/furniture13.jpg';
import Dine16 from '../../Assets/images/dine16.jpg';
import Dine12 from '../../Assets/images/dine12.jpg';
import Dine17 from '../../Assets/images/dine17.jpg';
import Furniture2 from '../../Assets/images/furniture2.jpg';
import Furniture5 from '../../Assets/images/furniture5.jpg';
import Furniture3 from '../../Assets/images/furniture3.jpg';
import Furniture8 from '../../Assets/images/furniture8.jpg';
import Furniture19 from '../../Assets/images/furniture19.jpg';
import Furniture15 from '../../Assets/images/furniture15.jpg';
import Furniture10 from '../../Assets/images/furniture10.jpg';
import bed12 from '../../Assets/images/bed12.jpg';
import chair2 from '../../Assets/images/chair2.jpg';
import chair3 from '../../Assets/images/chair3.jpg';
import chair4 from '../../Assets/images/chair4.jpg';
import './offer-styles.css';


const Offerpage = () => {
    return (
        <>
        <Header />
        <div>
            <h1 className="our">Check out our amazing offers !!!</h1>
        </div>


        <section>
        
        <div className="grid-3-cols">
          <figure className="chair">
            <img src={off12} alt="Chair" />
            <div className="chair-box">
              <h3>The Laid Back</h3>
              <ul className="chair-details">
                <li>
                  
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable for 4h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
                  <span>Weighs 16 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #250,000 </strong>

                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>

          <figure className="chair">
            <img src={bed12} alt="Chair" />
            <div className="chair-box">
              <h3>The Worker Bee</h3>
              <ul className="chair-details">
                <li>
                  <span>Work</span>
                </li>
                <li>
                  <span>Comfortable for 8h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
                  <span>Weighs 22 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #550,000 </strong>
                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>

          <figure className="chair">
            <img src={chair4} alt="Chair" />
            <div className="chair-box">
              <h3>The Chair 4/2</h3>
              <ul className="chair-details">
                <li>
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable all day!</span>
                </li>
                <li>
                  <span>Organic cotton</span>
                </li>
                <li>
                  <span>Weighs 80 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #1,450,000 </strong>

                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section>
        
        <div className="grid-3-cols">
          <figure className="chair">
            <img src={chair5} alt="Chair" />
            <div className="chair-box">
              <h3>The Laid Back</h3>
              <ul className="chair-details">
                <li>
                  
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable for 4h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
                  <span>Weighs 16 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #250,000 </strong>

                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>

          <figure className="chair">
            <img src={chair3} alt="Chair" />
            <div className="chair-box">
              <h3>The Worker Bee</h3>
              <ul className="chair-details">
                <li>
                  <span>Work</span>
                </li>
                <li>
                  <span>Comfortable for 8h</span>
                </li>
                <li>
                  <span>Vegan leather</span>
                </li>
                <li>
                  <span>Weighs 22 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #550,000 </strong>
                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>

          <figure className="chair">
            <img src={chair4} alt="Chair" />
            <div className="chair-box">
              <h3>The Chair 4/2</h3>
              <ul className="chair-details">
                <li>
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <span>Comfortable all day!</span>
                </li>
                <li>
                  <span>Organic cotton</span>
                </li>
                <li>
                  <span>Weighs 80 kg</span>
                </li>
              </ul>
              <div className="chair-price">
                <strong> #1,450,000 </strong>

                <CustomButton type='submit'>Order Now</CustomButton>
              </div>
            </div>
          </figure>
        </div>
      </section>
      

      <section className="testimonial-section">
        <div className="grid-3-cols">
          <img src={chair2} alt="People sitting on chairs" />
          <div className="testimonial-box">
            <h2>"We couldn't live without these chairs anymore"</h2>
            <blockquote className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className="testimonial-author">&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>

      <section className="section-testimonials">
        <div className="testimonials-container">
          <span className="subheading"></span>
          <h2 className="heading-secondary">Once you buy it, you can't stop smiling</h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="customer Dave Bryson"
                src={smilingman4}
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and durable furnitures, without even
                having to order manually! It feels truly magical.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 
              </blockquote>
              <p className="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt=" customer Ben Hadley"
                src={smilingwoman1}
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right piece for
                me every time. It's amazing not to worry about furnitures anymore!
                Lo nesciunt expedita.
              </blockquote>
              <p className="testimonial-name">&mdash; Susan Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt=" customer Steve Miller"
                src={smilingman1}
              />
              <blockquote className="testimonial-text">
                Emerite home furniture is a life saver! I just started a company, so there's
                no time for manual making. I couldn't live without my furnitures now!
                
              </blockquote>
              <p className="testimonial-name">&mdash; Steve Miller</p>
            </figure>

            

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt=" customer Mason Smith"
                src={smilingman}
              />
              <blockquote className="testimonial-text">
                I got Emerite Furnitures for the whole family, and it frees up so much
                time! Plus, everything is organic and affordable and without stories.
              </blockquote>
              <p className="testimonial-name">&mdash; Mason Smith</p>
            </figure>
          </div>
        </div>

         
         
        <div className="gallery">
          <figure className="gallery-item">
            <img
              src={Furniture15}
              alt=" of beautifully
            arranged food"
            />
            
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture5}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture3}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={chair1}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Dine17}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Dine12}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Dine16}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture8}
              alt="of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture19}
              alt="of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture10}
              alt=" of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src={Furniture13}
              alt="of beautifully
            arranged food"
            />
           
          </figure>
          
          <figure className="gallery-item">
            <img
              src={Furniture2}
              alt="of beautifully
            arranged food"
            />
          </figure>
          <CustomButton type='submit'>Order Now</CustomButton>
          
        </div>
        
      </section>
        
        
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
export default Offerpage