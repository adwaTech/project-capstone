import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ImageSlider from '../catagroy_slider/Slider';
import CatagoryList from '../catagroy_slider/CatagoryList';
import Grid1 from '../catagroy_slider/catagory_card/Grid1';
import './home.css';
import Grid2 from '../catagroy_slider/catagory_card/Grid2';
import Image1 from '../../assets/images/undraw_services_5tv9.svg'
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import ProductCatagory from '../catagroy_slider/ProductCatagory';
import Product2 from '../catagroy_slider/Product2';
import HomeInfo  from './HomeInfo';
import Image0 from '../../assets/images/paul-einerhand-uyDHQc128DA-unsplash.jpg';
import Image11 from '../../assets/images/samantha-borges-EeS69TTPQ18-unsplash.jpg';
import Image2 from '../../assets/images/lode-lagrainge-45cr4wHWTIw-unsplash.jpg';
import Image3 from '../../assets/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg';
import Image4 from '../../assets/images/adele-payman-2oYMwuFgnTg-unsplash.jpg';

import {
    Send,
} from '@material-ui/icons'
import {
    Button,
    IconButton,InputAdornment,
    FormControl,
    InputLabel,
    OutlinedInput,
    makeStyles
    
} from '@material-ui/core';
import {
    Link
} from 'react-router-dom'
const useStyles=makeStyles({
    catagoryBtn:{
        borderColor:"#5C7795"
    },
})
let list=[
    {
        image:Image0,

    },
    {
        image:Image11
    },
    {
        image:Image2,

    },
    {
        image:Image3
    },
    {
        image:Image4,

    },
];
export default function Home() {
    const classes=useStyles();
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="home">
            <Header/>
            <div className="front-image">
                <div className="banner-title">
                    <h3>Online Auction is where everyone goes to shop, sell,
                        and give, while discovering variety and affordability.</h3>
                    <Button variant="outlined" color="primary">
                        <Link to="/register">Create Account</Link>
                    </Button>
                </div>
                <div className="image">
                    <img src={Image1} alt=""/>
                </div>
            </div>
            <ImageSlider/>
            <ProductCatagory/>
            {/* <Grid1/>
            <Grid2/>
            <CatagoryList/>  */}
            {
                list.map((data)=>(
                    <Product2 image={data}/>
                ))
            }
            {/* <Product2/>
            
            <Product2/>
            <Product2/>
            <Product2/>
            <Product2/>
            <Product2/>
            <HomeInfo/> */}
            <div>
            <div className="description">
                <img src={Image7} alt=""/>
                <div className="news-subscribe">
                    <div>
                        <h1>Get Our Latest Offers News</h1>
                        <h4>subscribe for news</h4>
                    </div>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-search">subscribe</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-search"
                            type="text"
                            className={classes.searchInput}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="search"
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        
                                    >
                                        <Send size="large"/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </div>
                <img src={Image8} alt=""/>
            </div>
            </div>
            
            <Footer/>
        </div>
    )
}
