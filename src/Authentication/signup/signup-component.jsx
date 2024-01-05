import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../navigation/header/header.component';
import Furniture1 from '../../Assets/images/furniture1.jpg';
import FormInput from '../../component/form-input/form-input-component';
import { AuthContext } from '../context/authContext';
import CustomButton from '../../component/customButton/custom-Button';
import './signup.styles.css';

// functional component
// export default function registration () {
// return (
      // <>
      // </>
//)

//}
 
// class component function
const Registration = () => {
    const navigate = useNavigate();
    const {register} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password:""
    });
    const [error, setError] = useState('');
    const handleOnChangeText = (e, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: e.target.value});// the userInfo is initialiazing a spread operator

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password } = userInfo;

        try {
            await register(firstName, lastName, email, password);
            console.log("Registration Successful");
            navigate("/login")
        }catch(error) {
            setError(error.message); // Display the error message to the users
            console.log('Registration Failed. Please try again.');
        }
    }
    const [here] = useState("Register here...");

    const styles = {
        display: 'grid',
        paddingLeft: '1rem',
        gridTemplateRows: '1fr 3fr',
        backgroundImage: `linear-gradient(rgba(0, 0 , 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Furniture1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <>
        <Header />
        <div className='web-page'>
            <div style={styles}></div> 
            <div className='right-view'>
                <div className='facts'>
                    <h2 className='heading-secondary'>{here}</h2>
                    <form onSubmit={handleSubmit}>
                        {error ? <p className='text-center text-red-900'>{error}</p> : null}
                        <FormInput
                        name="firstName"
                        type="text"
                        value={userInfo.firstName}
                        onChange={(e) => handleOnChangeText(e, "firstName")}
                        placeholder="Enter your first name"
                        required
                        />
                        <FormInput
                        name="lastName"
                        type="text"
                        value={userInfo.lastName}
                        onChange={(e) => handleOnChangeText(e, "lastName")}
                        placeholder="Enter your last name"
                        required
                        />
                        <FormInput
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => handleOnChangeText(e, "email")}
                        placeholder="Enter your Email"
                        required
                        />
                        <FormInput
                        name="password"
                        type="password"
                        value={userInfo.password}
                        onChange={(e) => handleOnChangeText(e, "password")}
                        placeholder="Enter your password"
                        required
                        />
                        <div>
                            <input type="checkbox" />
                            <span> I accept the Terms and Conditions Applied</span>
                        </div>
                       <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px"
                        }}>
                        
                        <CustomButton type="submit">Register</CustomButton>
                       
                       </div>

                    </form>
                    <h2 className="account">
                        Already have an account ?
                    </h2>
                    <span>
                        Click the link below to sign-in
                        <Link
                        to="/login"
                            style={{
                                textDecoration: "underline",
                                fontSize: "17px",
                                color: "red",
                                marginLeft: "10px"
                            }}
                            >
                            Sign-in
                        </Link>
                    </span>

                </div>
            </div>

            </div>
        </>
    )
}
export default Registration;