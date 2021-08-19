import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Register from './Register';
import './register.css';

export default function Index() {
    return (
        <div className="main-login-page">
            <Header/>   
            <Register/>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
        </div>
    )
}
