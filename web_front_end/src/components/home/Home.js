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
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import ScrollButton from '../scrollToTop/ScrollToTop';


import {
    Link
} from 'react-router-dom'
import ScrollToTop from '../../scrollTop/ScrollToTop';
import PostAuction from '../auction_dialog/PostAuction';
import AuctionDialog from '../auction_dialog/AuctionDialog';
import BidAuction from '../auction_dialog/BidAuction';
import {
    AllAuctionAction,
    AllExceptAuctionAction
} from '../../redux-state-managment/Actions';

export default function Home() {
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.LanguageReducer.language)
    const token = useSelector((state) => state.AccountReducer.token);
    const user = useSelector((state) => state.AccountReducer.user);

    const [num, setNum] = React.useState(1)
    React.useEffect(() => {
        if (num === 1) {
            dispatch(AllAuctionAction());
            if (token) {
                dispatch(AllExceptAuctionAction(user._id));
            }
            setNum(2);
        }
    }, [lang]);
    const [openforPost, setOpen] = React.useState(false);
    const [dialogComp, setDialogComp] = React.useState('');
    

    return (
        <div className="home">
            <AuctionDialog
                type={dialogComp}
                openforPost={openforPost}
                setOpen={setOpen}
                component={dialogComp === 'Post' ? <PostAuction /> : <BidAuction />} />
            <ScrollToTop />
            <Header />
            <div className="svgimage">
                <img src={WaveImage} alt="" />
            </div>

            {token === '' ? <div className="easy-steps">
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
                : null}

            <div className="front-image" style={{ top: token ? "-250px" : 0 }}>
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
                    <div style={{
                        margin: "50px"

                    }}>
                        {
                            token ?
                                <div>
                                    <div id="gooey-button" onClick={() => {
                                        setOpen(!openforPost);
                                        setDialogComp('Post')
                                    }}>
                                        Post Auction
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
                                    </div>
                                    <div style={{
                                        margin: "50px"
                                    }} id="gooey-button"
                                        onClick={() => {
                                            setOpen(!openforPost);
                                            setDialogComp('Bid')
                                        }}
                                    >
                                        Catagories List
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
                                    </div>
                                </div>
                                : null
                        }
                        <Link className="a" to="/map/auction">
                            <Button variant="outlined" color="primary">
                                Find Auction By Location
                            </Button>
                        </Link>
                    </div>
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
