import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ImageSlider from '../catagroy_slider/Slider';
import './home.css';
import Image1 from '../../assets/images/undraw_Agreement_re_d4dv.svg'
import ProductCatagory from '../catagroy_slider/ProductCatagory';
import HomeInfo from './HomeInfo';
import WaveImage from '../../assets/images/wave6.svg';
import SignIn from '../../assets/images/signin.svg';
import win from '../../assets/images/win.svg';
import bid from '../../assets/images/bid.svg';
import { strings } from '../../language/language';
import { useSelector,} from 'react-redux';

import ScrollButton from '../scrollToTop/ScrollToTop';


import {
    Link
} from 'react-router-dom'
import ScrollToTop from '../../scrollTop/ScrollToTop';
import PostAuction from '../auction_dialog/PostAuction';
import AuctionDialog from '../auction_dialog/AuctionDialog';

export default function Home() {
    // const dispatch = useDispatch();
    const lang = useSelector((state) => state.LanguageReducer.language)
    const token = useSelector((state) => state.AccountReducer.token);
    React.useEffect(() => {

    }, [lang]);
    const [open, setOpen] = React.useState(false);
    return (
        <div className="home">
            <AuctionDialog component={<PostAuction />} openforPost={open} setOpen={setOpen} />
            <ScrollToTop />
            <Header />
            <div className="svgimage">
                <img src={WaveImage} alt="" />
            </div>
            {token ?
                <div className="user-dashboard">
                    <nav>
                        <ul>
                            <li
                                onClick={
                                    () => {
                                        console.log("button is clicked")
                                        setOpen(true)
                                    }
                                }
                            >
                                <div className="home-icon">
                                    <div className="roof">
                                        <div className="roof-edge"></div>
                                    </div>
                                    <div className="front"></div>
                                </div>
                            </li>
                            <Link to="/profile">
                                <li>
                                    <div className="about-icon">
                                        <div className="head">
                                            <div className="eyes"></div>
                                            <div className="beard"></div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div> : null}
            <div className="easy-steps">
                <div>
                    <h5>{strings.HowItWorks}</h5>
                    <span>{strings.towin}</span>
                </div>
                <div >
                    <div className="menu__container bd-grid ">
                        <div className="menu__content">
                            <img src={SignIn} alt="" className="about__img" />
                            {/* <h3 className="menu__name"></h3> */}
                            <span className="menu__detail">{strings.signup}</span>
                            <span className="menu__preci"></span>

                        </div>
                        <div className="menu__content">
                            <img src={bid} alt="" className="about__img" />
                            {/* <h3 className="menu__name"></h3> */}
                            <span className="menu__detail">{strings.bid}</span>
                            <span className="menu__preci"></span>

                        </div>
                        <div className="menu__content">
                            <img src={win} alt="" className="about__img" />
                            {/* <h3 className="menu__name"></h3> */}
                            <span className="menu__detail">{strings.win}</span>
                            <span className="menu__preci"></span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="front-image">
                <div className="banner-title">
                    <h4>{strings.description1}</h4>

                    <Link id="gooey-button" to={token ? '/profile' : '/register'}>
                        {token ? "profile" : strings.CreateAccount}
                        <span className="bubbles">
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                            <span className="bubble"></span>
                        </span>
                    </Link>
                </div>
                <div className="home-image1">
                    <img src={Image1} alt="" />
                </div>
            </div>
            <ImageSlider />
            <ProductCatagory />
            <HomeInfo />
            <Footer className="footer" />
            <ScrollButton />
        </div>
    )
}
