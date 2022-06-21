// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css'

const Header = ({ title, subtitle }) => {
    title = "Call a Friend"
    subtitle = "your friendly contact app"
    return (
        <>
            <div className='header'>
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            </div>
        </>
    )
}

export default Header;