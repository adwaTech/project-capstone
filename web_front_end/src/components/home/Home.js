import React from 'react';
import Header from '../header/Header';
<<<<<<< HEAD
import Footer from '../footer/Footer';
import ImageSlider from '../catagroy_slider/Slider';
import './home.css';
import Image1 from '../../assets/images/homeimage.svg'
import ProductCatagory from '../catagroy_slider/ProductCatagory';
import Product2 from '../catagroy_slider/Product2';
import HomeInfo  from './HomeInfo';
import {Fab} from '@material-ui/core';
import { ArrowUpward,ArrowDownward } from '@material-ui/icons';
import WaveImage from '../../assets/images/wave6.svg';
import SignIn from '../../assets/images/signin.svg';
import win from '../../assets/images/win.svg';
import bid from '../../assets/images/bid.svg';

import {
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
=======
>>>>>>> main

export default function Home() {
    return (
        <div className="home">
            <Header/>
<<<<<<< HEAD
            <div className="svgimage">
                <img src={WaveImage} alt=""/>
            </div>
            <div className="easy-steps">
                <div>
                    <h5>How It Works</h5>
                    <span>Easy 3 steps to win</span>
                </div>
                <div >
                    <div class="menu__container bd-grid ">
                        <div class="menu__content">
                            <img src={SignIn} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">Sign-Up</span>
                            <span class="menu__preci"></span>
                            
                        </div>
                        <div class="menu__content">
                            <img src={bid} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">Bid</span>
                            <span class="menu__preci"></span>
                            
                        </div>
                        <div class="menu__content">
                            <img src={win} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">Win</span>
                            <span class="menu__preci"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="front-image">
                <div className="banner-title">
                    <h4>Online Auction is where everyone goes to shop, sell,
                        and give, while discovering variety and affordability.</h4>
                    
                    <Link id="gooey-button" to="/register">
                        Create Account
                        <span class="bubbles">
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                            <span class="bubble"></span>
                        </span>
                    </Link>
                </div>
                
                <div className="home-image1">
                    <img src={Image1} alt=""/>
                </div>
            </div>
            <ImageSlider/>
            <ProductCatagory/>
            {/* <Grid1/>
            <Grid2/>
            <CatagoryList/>  */}
            <Product2/>
            <HomeInfo/> 
            <div>
            {/* <div className="description">
                <img src={Image11} alt=""/>
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
                <img src={Image12} alt=""/>
            </div>
             */}
            </div>
            <Link onClick={()=>{
                window.scrollTo(0,0);
                
            }} className="floating-btn"><Fab variant="outlined" color="primary"><ArrowUpward/></Fab></Link>
            <Link onClick={()=>{
                window.scrollTo(0,document.querySelector(".footer").scrollHeight);
            }}
            id="#footer" className="floating-btn2"><Fab variant="outlined" color="primary"><ArrowDownward/></Fab></Link>
            <Footer className="footer"/>
=======
>>>>>>> main
        </div>
    )
}
