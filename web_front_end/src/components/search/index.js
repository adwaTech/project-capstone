import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Search from './Search';

export default function index(props) {
    return (
        <div>
            <Header/>
                <Search {...props}/>
            <Footer/>
        </div>
    )
}
