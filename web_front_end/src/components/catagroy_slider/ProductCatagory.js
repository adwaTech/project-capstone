import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {Button,makeStyles} from '@material-ui/core';
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import Image11 from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg';
import Image12 from '../../assets/images/abhinav-raina-cyQiSGGDThQ-unsplash.jpg';
import Image13 from '../../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
import Image14 from '../../assets/images/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg'
import Image9 from '../../assets/images/max-O_TVsaeZNlE-unsplash.jpg';
import Image15 from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg';

const useStyles=makeStyles({
    addCartBtn:{
        borderRadius:"20px"
    },
    shopNow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        borderRadius:"30px"
    }
})
export default function Products() {
    const rate=[1,2,3,4,5];
    const classes=useStyles();
    const [error,setError]=React.useState(false);
    var product =[
        {
            _id:1,
            imageUrl:Image14,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
        {
            _id:1,
            imageUrl:Image13,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
        {
            _id:1,
            imageUrl:Image15,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
        {
            _id:1,
            imageUrl:Image9,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
        {
            _id:1,
            imageUrl:Image11,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
        {
            _id:1,
            imageUrl:Image12,
            title:"title",
            selling_price:"$200",
            description:"this is mesi this is mesi this is mesi"
        },
    ];
    var loading=false;
    return (
        <div>
            <div className="description1" style={{marginTop:"300px"}}>
                <img src={Image8} alt=""/>
                <div className="description1-area">
                    <h3>Find The Best Product </h3>
                    <Button className={classes.shopNow} variant="contained" color="primary">Shop Now</Button>
                </div>
                <img src={Image7} alt="" width="40px" height="40px"/>
            </div>
            <div className="section-name">
                <h2 >Latest Products</h2>
                <hr/>
                <div className="product-type">
                    <span className="type1">Today</span>
                    <span className="type1">since last month</span>
                    <span className="type1">since last year</span>
                    <span className="type1">not closed</span>
                </div>  
            </div>
            <div className="products">
                <div className="products-item-section">
                    {
                        error?<p>{error.message}</p>:loading?<p>loading ...</p>:
                        product.map(product=>(
                            <div className="product-item" key={product._id}>
                                <img name={product._id}   src={product.imageUrl} alt=""/>
                                {/* <h3 name={product.title}>you already add it.</h3> */}
                                <div className="rate">
                                {rate.map((rate,i)=>(
                                        rate<=product.rating?<RateIcon key={i} style={{color:"orange"}}/>:
                                        <RateIcon key={i} />
                                ))}
                                </div>
                                <div className="product-discription">
                                    <p>{product.title}</p>
                                    <p>{product.description}</p>
                                    <p>{product.selling_price}ETB</p>
                                    <Button className="cartbtn"  color="primary" className={classes.addCartBtn} variant="outlined">
                                        <CartIcon/>
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}