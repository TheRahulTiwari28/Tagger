import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Logo from '../../assests/images/logo.png'

const SignIn = ({updateUser}) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        number: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:8000/signin", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            console.log(res.data.user._id)
            localStorage.setItem('userId', res.data.user._id)
            localStorage.setItem('name', res.data.user.name)
            navigate("/")
        })
    }
    return (
        <>
            <div className='loginbox'>
                {/* {console.log("user", user)} */}
                <div className='signin-box'>
                    <div className='logo'>
                        <img src={Logo} alt="web-logo"/>
                    </div>
                    <h1>Welcome back!</h1>
                    <h4>Login into your account and scan QR code</h4>
                    <form>
                        <label>Phone Number</label>
                        <input type="text" name='number' value={user.number} placeholder="932002449922" onChange={handleChange}/>
                        <label>Password</label>
                        <input type="text" name='password' value={user.password} placeholder="Password" onChange={handleChange}/>
                        <div className='forgot'>
                            <NavLink to="/forgot" exact className="fogot">Forgot Password?</NavLink>
                        </div>
                        <input type="button" onClick={login} value="Log In"/>
                    </form>
                    <p>Dont have an account? <NavLink to='/signup' exact>Create an account</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default SignIn
