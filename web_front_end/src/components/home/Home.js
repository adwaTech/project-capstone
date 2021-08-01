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
                    <h3>Every election is a sort of advance auction sale of stolen goods.</h3>
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
            <Product2/>
            
            <Product2/>
            <Product2/>
            <Product2/>
            <Product2/>
            <Product2/>
            <HomeInfo/>
            <div>
            <div className="description">
                <img src={Image7} alt=""/>
                <div className="news-subscribe">
                    <div>
                        <h1>Get Our Latest Offers News</h1>
                        <h4>subscribe for news</h4>
                    </div>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-search">search</InputLabel>
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
