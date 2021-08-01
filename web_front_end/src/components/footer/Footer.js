import React from 'react';
import './footer.css';
import { LinkedIn,Twitter,Instagram,Facebook } from '@material-ui/icons';
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
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
                    <div className="social-links">
                        <div ><Link><Facebook/></Link></div>
                        <div ><Link><Twitter/></Link></div>
                        <div ><Link><Instagram/></Link></div>
                        <div ><Link><LinkedIn/></Link></div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright ©2021 All rights reserved</p>
            </div>
        </div>
    </footer>
    )
}
