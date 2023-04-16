import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            &copy; {new Date().getFullYear()} <span>Tagger</span>.| Designed by{" "}
            <a href="https://rahulprotfolio.netlify.app/" target="_blank" rel="noreferrer">Rahul Tiwari</a>
        </footer>
        </>
    )
}

export default Footer
