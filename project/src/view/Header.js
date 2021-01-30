import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header__wrapper">
            <div className="header__name"> 
                <Link to={'/'}> Pangaea </Link>
            </div>
            <div className="header__items"> 
                <Link to={'/Profile'}> Profile </Link>
                <Link to={'/LogIn'}> Log In </Link>
                <Link to={'/SignUp'}> Sign Up </Link>
                <Link to={'/'}> Log Out </Link>
            </div>
        </div>
    )
}

export default Header

