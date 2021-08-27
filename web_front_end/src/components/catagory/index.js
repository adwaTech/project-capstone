import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Catagory from './Catagries';

export default function index() {
    return (
        <div>
            <Header/>
                <Route to="/" component={Catagory}/>
            <Footer/>
        </div>
    )
}
