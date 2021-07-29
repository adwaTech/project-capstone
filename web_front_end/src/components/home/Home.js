import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ImageSlider from '../catagroy_slider/Slider';
import CatagoryList from '../catagroy_slider/CatagoryList';
import Grid1 from '../catagroy_slider/catagory_card/Grid1';
import './home.css';

export default function Home() {
    
    return (
        <div className="home">
            <Header/>
            <ImageSlider/>
            <Grid1/>
            <CatagoryList/> 
            <Footer/>
        </div>
    )
}
