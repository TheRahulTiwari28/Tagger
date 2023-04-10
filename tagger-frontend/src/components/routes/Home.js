import {React, useState} from 'react'
import "./Home.css"
import QRCode from 'qrcode';
import { BASE_URL } from '../../constant';
import Logo from '../../assests/images/logo.png'
import {CiLogout, CiUser} from 'react-icons/ci'
import Footer from '../Footer/Footer';

const Home = ({updateUser}) => {
    const [qrcode, Setqrcode] = useState('');
    const userId = localStorage.getItem('userId');
    const name = localStorage.getItem("name")

    const GenerateQRCode = () => {
        QRCode.toDataURL(`${BASE_URL}/user/${userId}`, {
			width: 400,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
        },  (err, url) => {
            if (err) return console.error(err)
            Setqrcode(url)
        })
    }
    return (
        <>
        <div className='header'>
            <div className='logo'>
                <a href='/'>
                    <img src={Logo} alt='logo'/>
                </a>
            </div>
            <div className="homepage">
                <div className='users'>
                    <CiUser/>{name}
                </div>
                <a className="button" href='/messege'>Messaege</a>               
                <div className="button" onClick={() => updateUser({})}><CiLogout style={{color: "white"}}/></div>
            </div>
        </div>
        <div className='qr-conatiner'>
            <div className='qr-box'>
                <h1>Generate and Publish <br/> <span>Dynamic</span> QR Codes.</h1>
                <p>Generate your unique QR code for FREE!.</p>
                <button className='home-btn' onClick={GenerateQRCode} >Generate</button>
            </div>
        </div>
        <div className='qr-content'>
            {qrcode && <div>
                <img src={qrcode} alt="qrcode"/> <br/>
                <div>
                <a href={qrcode} className='home-btn' download="qrcode.png">Download</a>
                </div>
            </div>}
        </div>
        <Footer/>
        </>
    )
}

export default Home
