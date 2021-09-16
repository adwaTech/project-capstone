import React from 'react';
import './footer.css';
import { Twitter, Instagram, Facebook, GitHub, YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { strings } from '../../language/language';
import { useSelector } from 'react-redux'

export default function Footer() {
    const lang = useSelector((state) => state.LanguageReducer.language)
    React.useEffect(() => {

    }, [lang]);
    return (
        <div 
        // className="footer-page"
        >
            {/* <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div> */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>{strings.company}</h4>
                            <ul>
                                <li><Link to="/about">{strings.aboutUs}</Link></li>
                                <li><Link to="/our-services">{strings.ourser}</Link></li>
                                <li><Link to="/privacy-policy">{strings.privacyPolicy}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.help}</h4>
                            <ul>
                                <li><Link to="/frequently-asked-questions">{strings.faq}</Link></li>
                                <li><Link to="/how-to-post"> {strings.howtopost}</Link></li>
                                <li><Link to="/how-to-bid">{strings.howtobid}</Link></li>
                                <li><Link to="/register"> {strings.manageaccess}</Link></li>
                                <li><Link to="/payment-options">{strings.paymentoption}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.popularcategory}</h4>
                            <ul>
                                <li><Link to="/auction/Land" >{strings.farmland}</Link></li>
                                <li><Link to="/auction/Vehicle">{strings.Car}</Link></li>
                                <li><Link to="/auction/House" >{strings.House}</Link></li>
                                <li><Link to="/auction/service">{strings.govproject}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.followus}</h4>
                            <div >
                                <div className="wrapper">
                                    <div className="icon facebook">
                                        <div className="tooltip">{strings.facebook}</div>
                                        <span>
                                            <Facebook />
                                        </span>
                                    </div>
                                    <div className="icon twitter">
                                        <div className="tooltip">{strings.twitter}</div>
                                        <span><Twitter /></span>
                                    </div>
                                    <div className="icon instagram">
                                        <div className="tooltip">{strings.instagram}</div>
                                        <span><Instagram /></span>
                                    </div>
                                    <div className="icon github">
                                        <div className="tooltip">{strings.github}</div>
                                        <span>
                                            <GitHub />
                                        </span>
                                    </div>
                                    <div className="icon youtube">
                                        <div className="tooltip">{strings.youtube}</div>
                                        <span><YouTube /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right">
                        <p>Copyright ©2021 All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

