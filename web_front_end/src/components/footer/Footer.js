import React from 'react';
import './footer.css';
import { Twitter, Instagram, Facebook, GitHub, YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            {/* <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div> */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>{strings.company}</h4>
                            <ul>
                                <li><Link to="/about">{strings.aboutUs}</Link></li>
                                <li><Link to="/services">{strings.ourser}</Link></li>
                                <li><Link to="/privacy">{strings.privacyPolicy}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.help}</h4>
                            <ul>
                                <li><Link to="/quation">{strings.faq}</Link></li>
                                <li><Link to="/howtopost"> {strings.howtopost}</Link></li>
                                <li><Link to="/howtobid">{strings.howtobid}</Link></li>
                                <li><Link to="/manageaccess"> {strings.manageaccess}</Link></li>
                                <li><Link to="/paymentoption">{strings.paymentoption}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.popularcategory}</h4>
                            <ul>
                                <li><Link>{strings.farmland}</Link></li>
                                <li><Link>{strings.Car}</Link></li>
                                <li><Link>{strings.House}</Link></li>
                                <li><Link>{strings.govproject}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>{strings.followus}</h4>
                            <div >
                                <div class="wrapper">
                                    <div class="icon facebook">
                                        <div class="tooltip">{strings.facebook}</div>
                                        <span>
                                            <Facebook />
                                        </span>
                                    </div>
                                    <div class="icon twitter">
                                        <div class="tooltip">{strings.twitter}</div>
                                        <span><Twitter /></span>
                                    </div>
                                    <div class="icon instagram">
                                        <div class="tooltip">{strings.instagram}</div>
                                        <span><Instagram /></span>
                                    </div>
                                    <div class="icon github">
                                        <div class="tooltip">{strings.github}</div>
                                        <span>
                                            <GitHub />
                                        </span>
                                    </div>
                                    <div class="icon youtube">
                                        <div class="tooltip">{strings.youtube}</div>
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

