import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assests/images/logo.png'

const Forgot = () => {
    return (
        <>            
        <div className='loginbox'>
            <div className='forgot-box'>
                <div className='logo'>
                    <img src={Logo} alt="web-logo"/>
                </div>
                <h1>Recover Password</h1>
                <h4>Enter your mobile number to recover your password</h4>
                <form>
                    <label>Phone Number</label>
                    <input type="text" placeholder="932002449922"/>
                    <input type="button" value="Submit"/>
                </form>
                <p>Return to sign in? <NavLink to='/signin' exact>Click Here</NavLink></p>
            </div>
        </div>
        </>
    )
}

export default Forgot
