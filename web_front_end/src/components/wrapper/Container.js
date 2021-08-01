import React from 'react'
import { Route } from 'react-router-dom'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer'
import Header from '../header/Header';
import Login from '../login/Login';
import Register from '../register/Register';

export default function Container() {
    return (
        <div>
            <Header/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/contact" component={Contact}/>
            <Footer/>
        </div>
    )
}
