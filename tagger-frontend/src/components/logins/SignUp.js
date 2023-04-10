import React, { useState } from 'react'
import './common.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Logo from '../../assests/images/logo.png'

const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        number: "",
        password: ""
    })
    const handlechange = e => {
        console.log(e.target)
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    } 
    const submit = () => {
        const {name, number, password} = user
        console.log(user)
        if(name && number && password){
            // alert("Valid")
            axios.post("http://localhost:8000/signup", user)
            .then( res => {
                alert(res.data.message)
                console.log(res.data)
                navigate('/signin')
            })
        }
        else{
            alert("invalid")
        }
    }
    return (
        <>
        <div className='loginbox'>
            <div className='signup-box'>
            {/* {console.log("user", user)} */}
                <div className='logo'>
                    <img src={Logo} alt="web-logo"/>
                </div>
                <h1> Create and track your QR codes </h1>
                <h4>Sign up now and create QR codes for free</h4>
                <form>
                    <label>Full Name</label>
                    <input type="text" name='name' value={user.name} onChange={handlechange} placeholder="John Doe" />
                    <label>Phone Number</label>
                    <input type="text" name='number' value={user.number} onChange={handlechange} placeholder="932002449922" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
                    <label>Create Password</label>
                    <input type="text" name='password' value={user.password} onChange={handlechange} placeholder="Password"/>
                    {/* <p>Password must contain at least 8 letters, 1 uppercase letter, 1 lowercase letter and 1 number</p> */}
                    <input type="button" onClick={submit} value="Create an account"/>
                </form>
                <p>Already have an account?<a href='/signin' exact> Sign In</a></p>
            </div>
        </div>
        </>
    )
}

export default SignUp
