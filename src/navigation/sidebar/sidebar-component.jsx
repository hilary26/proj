import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../Assets/images/off2.jpg';
// import off1 from "../../assets/images/off1.jpg";
import HomeIcon from '@mui/icons-material/Home';
import PortalIcon from '@mui/icons-material/Web';
import StatisticsIcon from '@mui/icons-material/Business';
import FinanceIcon from '@mui/icons-material/MonetizationOn';
import MerchantIcon from '@mui/icons-material/BarChart';
import FoodIcon from '@mui/icons-material/Receipt';
import LogoutIcon  from '@mui/icons-material/Logout';
// import CustomButton from '../../component/custom-button/custom-button';
import './sidebar-styles.css';


export default function Sidebar() {
  
    

    return (
        <>
        <div className='container'>
            <nav className='side_nav'>
                <ul>
                    {/* <li>
                        <Link to="" className='logo'>
                            <img src={off1} alt='#' className='logo-img'/>
                            
                        </Link>
                    </li> */}
                    <li>
                        <Link className='wall-side' to="">
                            <HomeIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link className='wall-side' to="">
                            <PortalIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item-1'>Portal</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='wall-side' to="">
                            <StatisticsIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item-1'>Statistics</span>
                        </Link>
                    </li>

                    <li>
                        <Link className='wall-side' to="">
                            <FinanceIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item-1'>Finance</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='wall-side' to="/home">
                            <MerchantIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>Merchant</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='wall-side' to="/">
                            <FoodIcon
                            style={{
                                marginRight: "8px",
                            }}
                            />
                            <span className='nav-item'>History</span>
                        </Link>
                    </li>

                </ul>
                <div className='bottom'>
                    <div className='side-link'>
                        <span></span>
                        <Link className='wall-side'>
                            <LogoutIcon

                            />
                            <span className='nav-item'>Logout</span>
                        </Link>
                    </div>
                </div>

            </nav>

        </div>






       
            
        </>

    );
}