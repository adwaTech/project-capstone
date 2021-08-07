import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Checkout from './Checkout';

export default function Index() {
    return (
        <div>
            <Header/>   
            <Checkout/>
            <div style={{marginTop:"100px"}}>
                <Footer/>
            </div>
        </div>
    )
}
