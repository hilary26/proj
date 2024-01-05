import React from 'react';
import { Link } from 'react-router-dom';
import Furniture1 from '../../Assets/images/furniture1.jpg';
import Furniture10 from '../../Assets/images/furniture10.jpg';
import Furniture2 from '../../Assets/images/furniture2.jpg';
import Furniture3 from '../../Assets/images/furniture3.jpg';
import Furniture18 from '../../Assets/images/furniture18.jpg';
import Furniture19 from '../../Assets/images/furniture19.jpg';
import Furniture4 from '../../Assets/images/furniture 4.jpg';
import Furniture5 from '../../Assets/images/furniture5.jpg';
import Furniture6 from '../../Assets/images/furniture6.jpg';
import Furniture7 from '../../Assets/images/furniture7.jpg';
import Furniture8 from '../../Assets/images/furniture8.jpg';
import Furniture9 from '../../Assets/images/furniture9.jpg';
import CustomButton from '../../component/customButton/custom-Button';
import smilingman1 from '../../Assets/images/smilingman1.jpg';
import smilingman2 from '../../Assets/images/smilingman2.jpg';
import smilingwoman3 from '../../Assets/images/smilingwoman3.jpg';
import smilingwoman2 from '../../Assets/images/smilingwoman2.jpg';
import smilingman from '../../Assets/images/smilingman.jpg';
import smilingman4 from '../../Assets/images/smilingman4.jpg';
import Header from '../../navigation/header/header.component';
import './home-styles.css';





const Homepage = () => {
  alert ("Login Successfully");
    return (
        <>
        <Header />
        
        <section>
        
        <div className="content">
            <div>
                <h2>Emerite Home Furniture</h2>
                <p>We pride ourselves of giving you the best when it comes to home and office furnitures, making your space more beautiful and fashionable.
                    Our pocket-friendly prices, hospitality and customer care management are top notch and we deliver our goods and services worldwide.
                </p>
                <Link to='/read'>Read More</Link>
            </div>
        </div>
        <div className="img">
        <img src={Furniture1}  alt='#' />
        </div>
        <ul className="nav" id="nav">
        <Link to='/dining'>Dining set </Link>
            <Link to='/Office'>Office set </Link>
        <Link to='/Bedroom'>Bedroom set </Link>
        </ul>
        <ul className="social">
        <Link to='/home'>Home</Link>
        <Link to='/social'>Socials</Link>
        <Link to='/contact'>contact us</Link>
        </ul>
    </section>
    <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
            
              <div className='heading-primary'>
              <h1>
                Beautiful furniture sets delivered to your door step daily
              </h1>
              </div>
              <p className="hero-description">
                The smart 365-days-per-year furniture description that will make you
                happy and comfortable again. Tailored to your personal tastes and
                fashionable needs.
              </p>
              <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              marginTop: '20px',
            }}>
            <CustomButton type='submit'>Order Now</CustomButton>
          </div>
              
              <div className="delivered-meals">
                <div className="delivered-imgs">
                <img src={smilingman1} alt='smilingman1' />
          <img src={smilingman2} alt='smilingman2' />
          <img src={smilingwoman3} alt='smilingwoman3' />
          <img src={smilingwoman2} alt='smilingwoman2' />
          <img src={smilingman} alt='smilingman' />
          <img src={smilingman4} alt='smilingman4' />
                </div>
                <p className="delivered-text">
                  <span>250,000+</span>  pieces of furnitures delivered last year!
                </p>
              </div>
            </div>
            
            <div className="hero-img-box">
              <img
                src={Furniture10}
                className="hero-img"
                alt="Lovely piece of furniture"
              />
            </div>
            
            </div>
            </section>
            <div>
              <h1 className='show'>Check out our showroom !!!</h1>
            </div>

            <div className="gallery1">
                <figure className="gallery-item1">
                  <img
                    src={Furniture2}
                    alt="/"/>
                    <p>The perfect set of beautiful furnitures for your homes and offices,
                       contact us today at Emerite Home of furnitures. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Doloremque porro repudiandae
                         alias optio assumenda deserunt ex dolore, impedit ullam non,
                        rerum dolorum modi autem veniam culpa aperiam officia. Laboriosam, enim. </p>
                    <p>$6,700</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                
              
                  
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture3}
                    alt="/"/>
                    <p>Check out our bespoke pieces of Turkish Eleganza, 
                      a State of the Art designed fully to perfection.
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                       Tempora, expedita aspernatur beatae ex vero excepturi, 
                       est eius totam sunt voluptatem incidunt
                       praesentium enim voluptas nesciunt laborum eaque adipisci nihil odit!</p>
                    <p>$3,900</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture4}
                    alt="/"/>
                    <p>Neat, well arranged Furniture set for your satisfaction,
                       you will definately love it. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Doloribus, neque laudantium inventore adipisci 
                        nemo impedit voluptate beatae iste accusantium dolorum tenetur at harum? 
                       Sapiente laudantium maxime assumenda sed amet labore? </p>
                    <p>$3,890</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture5}
                    alt="/"/>
                    <p>Turkish Beauty, well crafted, designed to perfection, execllence redefined !
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                       Enim a perspiciatis corporis eveniet tempore error et repudiandae molestiae ipsa?
                       Amet consectetur vitae beatae quisquam ipsa sed, voluptas quibusdam nam neque?
                    </p>
                    <p>$2,390</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture6}
                    alt="/"/>
                    <p>This is Istanbul's Rookies made from the finest sets of natural and man made designs
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Delectus, modi ab aliquid officiis quae debitis nulla quaerat repudiandae magnam,
                        voluptatem sint aperiam itaque
                       voluptates natus omnis? Incidunt dicta voluptas reiciendis?
                    </p>
                    <p>$2,400</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture7}
                    alt="/"/>
                    <p>When you talk of furnituere's for classic people, talk about Emerite !
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Consequatur magnam exercitationem minus, quod autem nesciunt? Ipsa qui asperiores,
                       voluptates dolorum quod at dolorem dicta totam? Doloremque inventore et rem saepe!
                        You can get this beauty for as low as </p>
                        <p>$4,100</p>
                        <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture8}
                    alt="/"/>
                    <p>Lorem ipsum dolor sit amet consectetur 
                      adipisicing elit. Accusamus necessitatibus voluptatum velit rem repellat, praesentium corporis soluta eaque
                       voluptas dolorum quos commodi molestiae ex ducimus? 
                       Eaque quasi maxime nisi rerum. 
                       Enjoy the new Turkish Horse furniture piece for as low as</p>
                    <p>$3,400</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture9}
                    alt="/"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Facilis nostrum voluptatibus modi cumque, beatae harum veniam molestias nesciunt 
                      eos maxime deserunt enim explicabo? Tenetur eum quia, 
                      fugit quaerat consequatur earum!  Durable and lovely set of Turkish designs, 
                      for all homes at affordable prices</p>
                    <p>$6,940</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture10}
                    alt="/"/>
                    <p>Violin strings, classic and elegant to give your space that royal look.</p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus distinctio natus explicabo voluptas nisi atque modi mollitia sequi similique 
                     eum veniam repellat esse alias, sit cumque minima. Odit, delectus alias!
                    <p>$4,806</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture1}
                    alt="/"/>
                    <p>Turkish strokes Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                       Fugiat, dolore aliquid neque, ipsam doloribus minima exercitationem
                        placeat iusto esse illum at
                       velit soluta dolorem distinctio maxime earum, dolor totam voluptas.</p>
                    <p>$2,300</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture19}
                    alt="/"/>
                    <p>Check out our bespoke pieces of Turkish Eleganza,
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae maxime vero et rerum quos cumque blanditiis accusamus amet sit nam iusto
                        minus necessitatibus aliquid quam magni,
                       dolore magnam. Repudiandae, et! 
                      a State of the Art designed fully to perfection.</p>
                    <p>$3,900</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                </figure>
                <figure className="gallery-item1">
                  <img
                    src={Furniture18}
                    alt="/"/>
                    <p>Neat, well arranged Furniture set for your satisfaction, 
                      you will definately love it. Lorem ipsum dolor sit,
                       amet consectetur adipisicing elit. Porro, corporis molestiae.
                        Fugit expedita ipsum provident id aliquam? Eveniet minima cupiditate asperiores enim, 
                        soluta ab at exercitationem porro 
                      qui minus laudantium? </p>
                    <p>$3,890</p>
                    <CustomButton type='submit'>Order Now</CustomButton>
                    </figure>       
            </div>
            </main>
            
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
export default Homepage;