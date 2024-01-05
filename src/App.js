import React from 'react';
import Registration from "./Authentication/signup/signup-component";
import Login from "./Authentication/login/login-component";
import Header from "./navigation/header/header.component";
import Diningpage from './page/dining/dining-component';
import Officepage from './page/office/office-component';
import Homepage from './page/home/home-component';
import Orderpage from './page/Orders/orders-component';
import Kitchenpage from './page/kitchen/kitchen-component';
import Explorepage from './page/Explore/explore-component';
import FurniturePage from './page/furnitures/furniture-component';
import Bedroompage from './page/bedroom/bedroom-component';
import Termspage from './page/Terms & Conditions/T&C-component';
import {Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./Authentication/context/authContext";
import './App.css';
import { OrderProvider } from './Authentication/context/OrderContext';
import { ManProvider } from './Authentication/context/ManContext';
import Offerpage from './page/offers/offer-component';
import Contactpage from './page/contact/contact-component';
import ReadPage from './page/read/read-component';
import SocialPage from './page/social/social-component';
import ManagePage from './page/manage/manage-component';
import LearnPage from './page/learn/learn-component';
import TwitterPage from './page/Twitter/twitter-component';
import FacebookPage from './page/facebook/facebook-component';
import InstagramPage from './page/instagram/instagram-component';
import WhatsAppPage from './page/whatsapp/whatsapp-component';
import AcknowledgmentPage from './page/acknowldgement/ack-component';





function App() {
    return (
      <div>
        <AuthProvider>
          <OrderProvider>
            <ManProvider>
          <Routes>
          <Route path="/registration" element={<Registration /> } />
          <Route path="/login" element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/dining' element={<Diningpage />} />
          <Route path='/office' element={<Officepage />} />
          <Route path='/kitchen' element={<Kitchenpage />} />
          <Route path='/orders' element={<Orderpage />} />
          <Route path='/explore' element={<Explorepage />} />
          <Route path='/bedroom' element={<Bedroompage />} />
          <Route path='/terms' element={<Termspage />} />
          <Route path='furniture' element={<FurniturePage />} />
          <Route path='/offer' element={<Offerpage />} />
          <Route path='/contact' element={<Contactpage />} />
          <Route path='/read' element={<ReadPage />} />
          <Route path='/social' element={<SocialPage />} />
          <Route path='/manage' element={<ManagePage />} />
          <Route path='/learn' element={<LearnPage />} />
          <Route path='/twitter' element={<TwitterPage />} />
          <Route path='/facebook' element={<FacebookPage />} />
          <Route path='/instagram' element={<InstagramPage />} />
          <Route path='/whatsapp' element={<WhatsAppPage />} />
          <Route path='/acknowledgment' element={<AcknowledgmentPage />} />
          </Routes>
          </ManProvider>
          </OrderProvider>
        </AuthProvider>
      </div>
    );
  }
  
  export default App;
  