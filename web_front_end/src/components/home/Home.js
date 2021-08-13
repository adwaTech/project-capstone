import React from 'react';
import Header from '../header/Header';
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
import {strings} from '../../language/language';
import {useSelector} from 'react-redux'
import ScrollButton from '../scrollToTop/ScrollToTop';
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

export default function Home() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    const token = useSelector((state) => state.AccountReducer.token);
    
    React.useEffect(()=>{

    },[lang]);
    return (
        <div className="home">
            <Header/>
            <div className="svgimage">
                <img src={WaveImage} alt=""/>
            </div>
            {token?
            <div className="user-dashboard">
                <nav>
                <ul>
                    <li>
                    <div class="home-icon">
                        <div class="roof">
                        <div class="roof-edge"></div>
                        </div>
                        <div class="front"></div>
                    </div>
                    </li>
                    <li>
                    <div class="about-icon">
                        <div class="head">
                        <div class="eyes"></div>
                        <div class="beard"></div>
                        </div>
                    </div>
                    </li>
                </ul>
                </nav>
            </div>:null}
            <div className="easy-steps">
                <div>
                    <h5>{strings.HowItWorks}</h5>
                    <span>{strings.towin}</span>
                </div>
                <div >
                    <div class="menu__container bd-grid ">
                        <div class="menu__content">
                            <img src={SignIn} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">{strings.signup}</span>
                            <span class="menu__preci"></span>
                            
                        </div>
                        <div class="menu__content">
                            <img src={bid} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">{strings.bid}</span>
                            <span class="menu__preci"></span>
                            
                        </div>
                        <div class="menu__content">
                            <img src={win} alt="" class="about__img"/>
                            <h3 class="menu__name"></h3>
                            <span class="menu__detail">{strings.win}</span>
                            <span class="menu__preci"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="front-image">
                <div className="banner-title">
                    <h4>{strings.description1}</h4>
                    
                    <Link id="gooey-button" to={token?'/profile':'/register'}>
                        {token?"profile":strings.CreateAccount}
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
            <Product2/>
            <HomeInfo/> 
            <Footer className="footer"/>
            <ScrollButton />
        </div>
    )
}
