import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom';
import {Button,makeStyles} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone'
import LangIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';

export default function Header() {
    return (
        <div class="header-front">
            <div className="header">
                <div className="top-header">
                    <div className="left-top-header">
                        <div className="logo">
                            <h1>M3K Auction</h1>
                        </div>
                    </div>
                    <div className="right-top-header">
                        <span>
                           <a>
                            <PhoneIcon style={{color:"#ffffff"}}/>
                            <p>Customer Support</p>
                           </a>
                        </span>
                        <div >
                            <LangIcon style={{color:"#ffffff"}}/>
                            <select>
                                <option>Eng</option>
                                <option>Amh</option>
                                <option>Oromoffa</option>
                                <option>Somali</option>
                                <option>Tigrigna</option>
                            </select>
                        </div>
                        <PersonIcon className="personIcon" style={{color:"#ffffff"}}/>
                    </div>
                </div>
                <div className="bottom-header">
                    
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Auctions</a>
                            </li>
                            <li>
                                <a>Catagories</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                            <li>
                                <a>Login</a>
                            </li>
                            <li>
                                <a>Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
