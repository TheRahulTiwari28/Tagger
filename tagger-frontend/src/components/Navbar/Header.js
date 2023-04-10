import React from 'react'
import Logo from '../../assests/images/logo.png'
import "../routes/Home.css"

const Header = ({updateUser}) => {
    return (
        <>
         <div className='header'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className="homepage">
                <a href='/messege'>Messaege</a>
                <div className="button" onClick={() => updateUser({})}>Logout</div>
            </div>
        </div>   
        </>
    )
}

export default Header
