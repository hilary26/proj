import React, {useState, useContext} from 'react';
import Header from '../../navigation/header/header.component';
import Furniture1 from '../../Assets/images/furniture1.jpg';
import FormInput from '../../component/form-input/form-input-component';
import CustomButton from '../../component/customButton/custom-Button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './login.styles.css';
import 'animate.css/animate.min.css';


const Login = () => {
    const { login } = useContext (AuthContext);
    const navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
     const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userInfo;

        try {
            await login(email, password); // handling successful login.
            console.log("Login Sucessfully");
            navigate("/home");
        }catch (error) {
            setError(error.message);
            console.log("Login failed. Please try again.");
        }
    };

    const handleOnChangeText = (e, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: e.target.value });
    }

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
                    <div className="animate__animated animate__pulse">
                    <h2 className="Login">Login Here...</h2>
                    </div>
                    {error ? <p className='text-center text-red-900'>{error}</p>: null}
                    <form onSubmit={handleSubmit}>
                       
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px"
                        }}>
                    <CustomButton type="submit">Login</CustomButton>
                     </div>
                    </form>
                    <h2 className="account">
                        Do you want to create a new Account ?
                    </h2>
                    <span>
                        Click the link below to Sign-Up
                        <Link
                        to="/registration"
                            style={{
                                textDecoration: "underline",
                                fontSize: "17px",
                                color: "red",
                                marginLeft: "10px"
                            }}
                            >
                            Sign-up
                        </Link>
                    </span>
                  </div>
                  
                </div>
            </div>
            
        </>  
    );
}

export default Login;