import React from 'react'
import './About.css'
import SignIn from '../../assests/images/screenshort/Signin.jpg'
import SignUp from '../../assests/images/screenshort/Signup.jpg'
import Recover from '../../assests/images/screenshort/recover.jpg'
import Home from '../../assests/images/screenshort/homepage.jpg'
import HomeQR from '../../assests/images/screenshort/homepage-qr.jpg'
import Message from '../../assests/images/screenshort/messagepage.jpg'
import ThirdPersonForm from '../../assests/images/screenshort/ThirdPerson-formpage.jpg'

const About = () => {
    return (
        <>
        <section className='about'>
            <div className='about-container'>
                <h1>About <span> Tagger </span></h1>
                <p>Tagger is a web application that helps people find the owner of a lost object. The Tagger web app is an innovative way to find missing item owners. The tagger generates a QR code which enables the user to find their lost product. To use the QR code, users need to download it and stick it to the valuable item. If a valuable product gets lost somewhere, whoever finds the lost product suppose the third person finds the lost product of the user on which the QR code was stuck product the third person will scan this website and then they can easily communicate with each other through this website.</p>
            </div>
            <div className='about-box-container'>
                <h1>How <span> Tagger </span> Works</h1>
                <div className='about-box'>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={SignUp} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 1: create a account</h3>
                            <p>First of all, you need to create an account on this website. To create an account, you need to Fill the form with the required information. Register yourself on the website and then login to the website.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={SignIn} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 2: Login</h3>
                            <p>After creating an account, you need to login to the website. To login, you need to fill the form with the required information.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={Recover} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 3: Recover Password</h3>
                            <p>If you forget your password, you can recover your password by clicking on the “Forgot Password” button. After clicking on the “Forgot Password” button, you will see a form. Fill the form with the required information.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={Home} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 4: Homepage</h3>
                            <p>After login, you will see the homepage. On the homepage, You will see a button "Generate QR code" on the homepage. Click on it.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={HomeQR} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 5:QR Code</h3>
                            <p>After clicking on the "Generate QR code" button, you will see a QR code. You need to download this QR code and stick it to the valuable product.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={ThirdPersonForm} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 6: Third Person Form</h3>
                            <p>After scanning the QR code, the third person will see a form. Fill the form with the required information. After filling the form, the third person can easily communicate with each other through this website.</p>
                        </div>
                    </div>
                    <div className='about-works'>
                        <div className='about-works-img'>
                            <img src={Message} alt='1' />
                        </div>
                        <div className='about-works-text'>
                            <h3>Step 7: Message Page</h3>
                            <p>When the third person completes the form, the third person's message is sent through the form and can be viewed by the user on the message page</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
