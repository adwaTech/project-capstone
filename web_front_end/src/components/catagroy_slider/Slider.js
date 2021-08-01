import React from 'react';
import './slider.css'
import Image1 from '../../assets/images/best_hd_scenery-1366x768.jpg';
import Image2 from '../../assets/images/bird-wallpaper-1366x768-001.jpg';
import Image3 from '../../assets/images/bird-wallpaper-1366x768-001.jpg';
import Image4 from '../../assets/images/bird-wallpaper-1366x768-002.jpg';
import Image5 from '../../assets/images/bird-wallpaper-1366x768-003.jpg';
import Image6 from '../../assets/images/bird-wallpaper-1366x768-004.jpg';
import Image7 from '../../assets/images/bird-wallpaper-1366x768-005.jpg';
import Image9 from '../../assets/images/bird-wallpaper-1366x768-007.jpg';
import Image10 from '../../assets/images/bird-wallpaper-1366x768-008.jpg';
import Image11 from '../../assets/images/bird-wallpaper-1366x768-009.jpg';
import Image12 from '../../assets/images/bird-wallpaper-1366x768-010.jpg';
import Image13 from '../../assets/images/bird-wallpaper-1366x768-012.jpg';
import Image14 from '../../assets/images/bird-wallpaper-1366x768-013.jpg';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';
import { Star } from '@material-ui/icons';


export default function Slider() {

    let right_mover = ()=>{
        let span = document.getElementsByTagName('span');
        let product = document.getElementsByClassName('product')
        let product_page = Math.ceil(product.length/4);
        let l = 0;
        let movePer = 25.34;
        let maxMove = 203;
        // mobile_view	
        let mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches)
        {
            movePer = 50.36;
            maxMove = 504;
        }

        l = l + movePer;
        if (product == 1){l = 0; }
        for(const i of product)
        {
            if (l > maxMove){l = l - movePer;}
            i.style.left = '-' + l + '%';
        }

    }
    let left_mover = ()=>{
        let span = document.getElementsByTagName('span');
        let product = document.getElementsByClassName('product')
        let product_page = Math.ceil(product.length/4);
        let l = 0;
        let movePer = 25.34;
        let maxMove = 203;
        // mobile_view	
        let mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches)
        {
            movePer = 50.36;
            maxMove = 504;
        }

        l = l - movePer;
        if (l<=0){l = 0;}
        for(const i of product){
            if (product_page>1){
                i.style.left = '-' + l + '%';
            }
        }
    }
    return (
        <div className="slider">
            <main>
                <div class="text">
                    <h1>Catagories</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non atque adipisci est, recusandae aperiam, ullam minima quos nostrum animi voluptas sequi. At repellendus fuga reiciendis accusantium, dolor suscipit repellat?
                    </p>
                </div>
                <header>
                    <h1>Catagories</h1>
                    <p>
                        <span onClick={
                            ()=>{
                                left_mover();
                            }
                        }
                        ><BackIcon /></span>
                        <span onClick={()=>{
                            right_mover();
                        }}
                        ><ForwardIcon/></span>
                    </p>
                </header>
                <section>
                    
                    <div class="product">
                        <picture>
                            <img src={Image14} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Catagory 1</b><br/>
                                <small>Name :</small>
                            </p>
                            <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image1} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Two</b><br/>
                                <small>New arrival</small>
                            </p>
                            <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image2} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Three</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image3} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Four</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image4} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Five</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                        <img src={Image5} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Six</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image7} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Seven</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image6} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Eight</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image9} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Nine</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image13} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Ten</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image10} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Eleven</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                    <div class="product">
                        <picture>
                            <img src={Image11} alt=""/>
                        </picture>
                        <div class="detail">
                            <p>
                                <b>Product Twelve</b><br/>
                                <small>New arrival</small>
                            </p>
                                                        <samp>New</samp>
                        </div>
                        <div class="button">
                            <p class="star">
                                <Star/>
                                <Star/>
                            </p>
                            <a href="#">Sea More</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
