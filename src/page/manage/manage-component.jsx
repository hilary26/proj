import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { ManContext } from '../../Authentication/context/ManContext';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../component/customButton/custom-Button';
import FormInput from "../../component/form-input/form-input-component";
import Header from "../../navigation/header/header.component";
import './manage-styles.css';


const ManagePage = () => {
    const { manage } = useContext(ManContext);
        const  navigate  = useNavigate();
      
        const options = [
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Others', label: 'Specify' },
          
        ];
      
        const [userInfo, setUserInfo] = useState({
          FullName: '',
          YourLocation: '',
          Email: '',
          Gender: '',
          Complaints: '',
        });
      
        const handleSelectChange = (selectedOption) => {
          setSelectedOptions(selectedOption);
        };
      
        const [selectedOptions, setSelectedOptions] = useState(null);
        const [error, setError] = useState('');
      
        const handleOnChangeText = (e, fieldName) => {
          setUserInfo({ ...userInfo, [fieldName]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
        //   const amountValue = parseFloat(userInfo.Amount);
      
          const requestBody = {
            FullName: userInfo.FullName,
            YourLocation: userInfo.YourLocation,
            Email: userInfo.Email,
            Gender: selectedOptions?.value || '',
            Complaints: userInfo.Complaints,
          };
      
          try {
            await manage(requestBody);
            resetForm();
            // Uncomment the line below if you want to navigate to a different route after successful submission
             navigate('/learn');
          } catch (error) {
            setError(error.message);
            console.error('Complaints creation failed. Please try again.');
          }
        };
      
        const resetForm = () => {
          setUserInfo({
            FullName: '',
            YourLocation: '',
            Email: '',
            Gender: '',
            Complaints: '',
          });
          setSelectedOptions(null);
        };
      
        const customStyles = {
          control: (provided) => ({
            ...provided,
            width: '20%',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid #000',
            marginLeft: '32rem',
            borderRadius: '10px',
          }),
        };
      
        const styles = {
        //   backgroundImage: `linear-gradient(rgba(0, 0 , 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Furniture15})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          padding: '30px',
        };

    return (
        <>
        <Header />
        
        <div style={styles}>
        <h1 className='order'>How can we help you faster ?</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className='text-center text-red-900'>{error}</p>}
          <FormInput
            style={{ width: '20%' }}
            name='Full Name'
            type='text'
            placeholder='Enter your full Name'
            value={userInfo.FullName}
            onChange={(e) => handleOnChangeText(e, 'FullName')}
            required
          />
          <FormInput
            style={{ width: '20%' }}
            name='Your Location'
            type='text'
            placeholder='Enter your Location here'
            value={userInfo.YourLocation}
            onChange={(e) => handleOnChangeText(e, 'YourLocation')}
            required
          />
          <FormInput
            style={{ width: '20%' }}
            name='Email'
            type='text' // Use type='number' for amount input
            placeholder='Enter Email'
            value={userInfo.Email}
            onChange={(e) => handleOnChangeText(e, 'Email')}
            required
          />
          <Select
            options={options}
            value={selectedOptions}
            onChange={handleSelectChange}
            styles={customStyles}
          />
          <FormInput
            style={{ width: '20%', height: '20vh' }}
            name='Complaints'
            type='text'
            placeholder='Your Complaints'
            value={userInfo.Complaints}
            onChange={(e) => handleOnChangeText(e, 'Complaints')}
            required
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}>
            <CustomButton type='submit'>Send Message</CustomButton>
          </div>
        </form>
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
export default ManagePage;