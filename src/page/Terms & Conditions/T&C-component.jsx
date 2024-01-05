import React from 'react';
import Header from '../../navigation/header/header.component';
import CustomButton from '../../component/customButton/custom-Button';
import './T&C-styles.css';

const Termspage = () => {
    return (
        <>
        <Header />
        <h2 className="terms">Terms and Conditions</h2>
    <h3> (1) Our Company's policy</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eveniet aliquid repellat fugit,
         numquam ratione vero,
         minima, enim voluptatem dolore beatae libero tempore quis itaque sunt earum officiis. Rem, eaque.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, et sunt fugiat numquam ab doloremque 
            ducimus odio eveniet quasi iste eius sapiente
             deserunt itaque corporis quaerat totam enim inventore veritatis?</p>
             <h3>(2) Why we are the best</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid,
                 suscipit eveniet tempore accusantium distinctio laudantium excepturi 
                id ab qui quos dignissimos assumenda beatae obcaecati expedita impedit iusto magnam dolore!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus,
                     in eveniet repudiandae dolorum tempora accusantium magni ex eaque
                     vero incidunt soluta assumenda animi odio est ab aperiam minima doloremque.</p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Est explicabo cum veritatis, tenetur consequuntur non nobis maxime inventore vitae beatae aspernatur iste saepe,
                         cupiditate delectus aperiam quas, repellat quae quidem?</p>
                         <h3>(3) Your data are safe with us</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolorum! Dignissimos cum optio iste.
                             Pariatur sunt facilis natus ut quis tempora
                             quo expedita, deserunt doloremque, non quidem laborum necessitatibus nemo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                             iusto illo consequuntur officia voluptatibus vel ab excepturi possimus voluptatum quas
                             recusandae quidem harum modi tenetur, tempore ex porro adipisci consequatur.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Dolores cum, culpa earum ex debitis maiores incidunt architecto assumenda?
                              Dolorem laboriosam modi eligendi dolore, fugit ab explicabo.
                             Eaque accusantium excepturi explicabo.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Officia consectetur beatae eum libero enim repudiandae? Vero, fuga laborum aliquid
                             similique earum libero,
                             nesciunt labore ad maiores corporis sint itaque harum.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Ullam quos voluptatem laborum ad alias, soluta reiciendis nemo repudiandae,
                             incidunt aperiam similique molestiae maxime, laudantium quod.
                              Possimus sequi iste rerum. Error.</p>

                              <div>
                            <input type="checkbox" />
                            <span> I accept the Terms and Conditions Applied</span>
                        </div>
                        <CustomButton type='submit'>Continue</CustomButton>



        </>
    )
}
export default Termspage;