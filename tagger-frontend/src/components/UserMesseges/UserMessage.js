import {React, useState,useEffect} from 'react'
import Logo from '../../assests/images/logo.png'
import "../routes/Home.css"
import {CiLogout, CiUser} from 'react-icons/ci'
import Footer from '../Footer/Footer'

const UserMessage = ({updateUser}) => {
    const [info, setInfo] = useState([]);
    const name = localStorage.getItem("name")
    useEffect(() => {
        fetch("http://localhost:8000/getalluser", {
            method: "GET"
        })
        .then((res) => res.json())
        .then( res => {
            setInfo(res.data)
        })
    }, [])
    const filterInfo = info.filter((item) => 
        item.formId === localStorage.getItem("userId"));
    return (
        <>
        <div className='header'>
            <div className='logo'>
                <a href='/'>
                    <img src={Logo} alt='logo'/>
                </a>            </div>
            <div className="homepage">
                <div className='users'>
                    <CiUser/>{name}
                </div>
                <a className="button" href='/'>Home</a>
                <div className="button" onClick={() => updateUser({})}><CiLogout/></div>
            </div>
        </div>
        <div className='qr-conatiner'>
            <div className='qr-message'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
                {filterInfo.length > 0 && filterInfo.map(i=>(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.number}</td>
                        <td>{i.email}</td>
                        <td>{i.message}</td>    
                    </tr>
                ))}
            </table>            
            </div>
        </div>
        <Footer/>
        </> 
    )
}

export default UserMessage
