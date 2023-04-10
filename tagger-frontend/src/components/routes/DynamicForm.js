import React, {useState} from 'react'
import './DynamicFormStyle.css'
import "./Home.css"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assests/images/logo.png'
// import useLocation from 'react-router-dom'

const DynamicForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [tpData, setTPdata] = useState({
        name:"",
        number: "",
        email:"",
        message:"",
        formId: params.userId
    })
    // console.log(parsm.pathname.slice("/"), "location");
    // console.log(params.userId, "location");
    const handleChange = e => {
        const {name, value} = e.target
        setTPdata({
            ...tpData,
            [name]: value
        })
    }
    const datasaved = (e) => {
        // e.preventDefault();
        const {name, number, email, message} = tpData
        if(name && number && email && message){
            // alert("Valid")
            axios.post("http://localhost:8000/user", tpData)
            .then( res => {
                alert(res.data.message)
                // console.log(res.data)
                navigate('/')
            })
        }else{
            alert("Please the all All fields should be filled out")
        }
    }
    return (
        <>
            <div className='hero'>
            {console.log("tpData", tpData)}
                <div className='form-box'>
                    <div className='logo'>
                        <a href='/'>
                            <img src={Logo} alt='logo'/>
                        </a>
                        <p>Welcome to Tagger! Thank you for scanning the QR code. <br/>
                        This information will allow you to contact the owner of the object that you have found. Here are the details you need to fill out.</p>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='input-group'>
                                <input type="text" name="name" value={tpData.name} placeholder="Your Name" id='name' required onChange={handleChange}/>
                            </div>
                            <div className='input-group'>
                                <input type="text" name="number" value={tpData.number} placeholder="Phone No" id='number' required onChange={handleChange}/>
                            </div>
                        </div>
                        <div className='input-group'>
                            <input type="text" name="email" value={tpData.email} placeholder="Email" id='email' required onChange={handleChange}/>
                        </div>
                        <div className='input-group'>
                            <textarea name="message" value={tpData.message} placeholder="Message" id='message' rows="8" required onChange={handleChange}></textarea>
                        </div>
                        <button type='submit' className='btn' onClick={datasaved}> SUBMIT </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DynamicForm
