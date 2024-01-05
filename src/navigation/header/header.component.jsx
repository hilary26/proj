import React from 'react';
import Furniture10 from '../../Assets/images/furniture10.jpg';
import { Link } from 'react-router-dom';
import './header-styles.css';


const Header = () => {
    return (
     <>
     <nav>
        <div className='heading'>
            <img src={Furniture10} alt="#" className='logo-image'/>

        </div>
        <ul className="nav-links">
            <li className="nav-list">
                <Link to="/home" className='nav-active'>Home</Link>
            </li>
            <li className="nav-list">
                <Link to="/dining" className='nav-active'>Dining sets</Link>
            </li>
            <li className="nav-list">
                <Link to="/office" className='nav-active'>Office sets</Link>

            </li>
            <li className="nav-list">
                <Link to="/kitchen" className='nav-active'>Kitchen sets</Link>

            </li>
            <li className="nav-list">
                <Link to="/Orders" className='nav-active'>Orders</Link>

            </li>
            <li className="nav-list">
                <Link to="/explore" className='nav-active'>Explore</Link>

            </li>
            <li className='nav-list'>
                <Link to='/login' className='nav-active'>Logout</Link>
            </li>
        </ul>
     </nav>
     </>
    );
};




export default Header;