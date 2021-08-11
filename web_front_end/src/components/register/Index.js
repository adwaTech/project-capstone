import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Register from './Register';

export default function Index() {
    return (
        <div>
            <Header/>   
            <Register/>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
        </div>
    )
}
