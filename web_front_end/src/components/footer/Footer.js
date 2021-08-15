import React from 'react';
import './footer.css';
import {Twitter,Instagram,Facebook,GitHub ,YouTube} from '@material-ui/icons';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
    <div>
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><Link to="">about us</Link></li>
                        <li><Link to="">our services</Link></li>
                        <li><Link to="">privacy policy</Link></li>
                        <li><Link to="">Ethiopian </Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><Link to="">FAQ</Link></li>
                        <li><Link to="">How to post</Link></li>
                        <li><Link to="">How to Bid</Link></li>
                        <li><Link to="">Manage Access</Link></li>
                        <li><Link to="">payment options</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Popular Catagories</h4>
                    <ul>
                        <li><Link to="">Farm Land</Link></li>
                        <li><Link to="">Cars</Link></li>
                        <li><Link to="">House</Link></li>
                        <li><Link to="">Gov't Mangt Projects</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div >
                    <div className="wrapper">
                        <div className="icon facebook">
                            <div className="tooltip">Facebook</div>
                            <span>
                                <Facebook/>
                            </span>
                        </div>
                        <div className="icon twitter">
                            <div className="tooltip">Twitter</div>
                            <span><Twitter/></span>
                        </div>
                        <div className="icon instagram">
                            <div className="tooltip">Instagram</div>
                            <span><Instagram/></span>
                        </div>
                        <div className="icon github">
                            <div className="tooltip">Github</div>
                            <span>
                                <GitHub/>
                            </span>
                        </div>
                        <div className="icon youtube">
                            <div className="tooltip">Youtube</div>
                            <span><YouTube/></span>
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

