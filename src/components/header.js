import React from 'react';
import rojo from '../assets/images/rojo.jpg'

const Header = () => {
    return (
        <div id="header">
            <nav id='menu'>
                <span className='menu' >Menu</span>
                <span className='user'> <img src={rojo} id='rojo' alt='rojo' /> User Name</span>
                <span className='report'>Sales Report</span>
            </nav>
        </div>
    );
}

export default Header;