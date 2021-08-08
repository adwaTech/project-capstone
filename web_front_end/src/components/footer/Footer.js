import React from 'react';
import './footer.css';
import { LinkedIn,Twitter,Instagram,Facebook,GitHub ,YouTube} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
    <div>
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><Link >about us</Link></li>
                        <li><Link >our services</Link></li>
                        <li><Link >privacy policy</Link></li>
                        <li><Link >Ethiopian </Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>How to post</Link></li>
                        <li><Link>How to Bid</Link></li>
                        <li><Link>Manage Access</Link></li>
                        <li><Link>payment options</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Popular Catagories</h4>
                    <ul>
                        <li><Link>Farm Land</Link></li>
                        <li><Link>Cars</Link></li>
                        <li><Link>House</Link></li>
                        <li><Link>Gov't Mangt Projects</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div >
                    <div class="wrapper">
                        <div class="icon facebook">
                            <div class="tooltip">Facebook</div>
                            <span>
                                <Facebook/>
                            </span>
                        </div>
                        <div class="icon twitter">
                            <div class="tooltip">Twitter</div>
                            <span><Twitter/></span>
                        </div>
                        <div class="icon instagram">
                            <div class="tooltip">Instagram</div>
                            <span><Instagram/></span>
                        </div>
                        <div class="icon github">
                            <div class="tooltip">Github</div>
                            <span>
                                <GitHub/>
                            </span>
                        </div>
                        <div class="icon youtube">
                            <div class="tooltip">Youtube</div>
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

