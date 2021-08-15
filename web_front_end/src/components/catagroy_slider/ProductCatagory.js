import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {Button,CircularProgress,makeStyles} from '@material-ui/core';
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import {useSelector,useDispatch} from 'react-redux';
import {strings} from '../../language/language';
import moment from 'moment';
import Clock from 'react-live-clock';
import {
    AllAuctionAction,
    PopularAuctionAction,
    LatestAuctionAction,
    AllExceptAuctionAction,
} from '../../redux-state-managment/Actions';
import DetailDialog from './Detail';

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
    const dispatch=useDispatch();
    const rate=[1,2,3,4,5];
    const classes=useStyles();
    const [error,setError]=React.useState(false);
    const [num,setNum]=React.useState(1);
   

    const token = useSelector((state) => state.AccountReducer.token);
    const allAuction=useSelector((state)=>state.AuctionsReducer.allAuction);
    const allexcept=useSelector((state)=>state.AuctionsReducer.allAuction);
    const popularAuction=useSelector((state)=>state.AuctionsReducer.allAuction);
    const latestAuction=useSelector((state)=>state.AuctionsReducer.allAuction);
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{

    },[lang]);
    React.useEffect( ()=>{
        if(num==1){
            dispatch(AllAuctionAction());
            setNum(2)
        }
        // await dispatch(PopularAuctionAction());
        // await dispatch(LatestAuctionAction());
        // await dispatch(AllExceptAuctionAction());
    });
    var loading=true;
    if(allAuction.length>0){
    
        loading=false
    }
    const [open,setOpen]=React.useState(false);
    function timer(start1,end1){
        var start =new Date(moment(start1).format());
        var end=new Date(moment(end).format());
        var hoursstart = start.getHours()
        var minutesstart = start.getMinutes()
        var secstart = start.getSeconds()
        var hoursend = end.getHours()
        var minutesend = end.getMinutes()
        var secend = end.getSeconds()

        var hours= hoursend-hoursstart;
        var minutes= minutesend-minutesstart;
        var sec= secend-secstart;
       if (minutes < 10){
           minutes = "0" + minutes
       }
       if (sec < 10){
           sec = "0" + sec
       }
       var t_str = hours + ":" + minutes + ":" + sec + " ";
       if(hours > 11){
           t_str += "PM";
       } else {
          t_str += "AM";
       }
        return t_str;
    }
    return (
        <div>
            {console.log(allAuction)}
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
                    <span className="type1">All</span>
                    <span className="type1">Today</span>
                    <span className="type1">since last month</span>
                    <span className="type1">since last year</span>
                    <span className="type1">not closed</span>
                </div>  
            </div>
            <div className="products">
                <div className="products-item-section">
                    {
                        loading?<CircularProgress/>:
                        allAuction.map(product=>(
                           
                            <div className="product-item" key={product._id}>
                                {}
                                <img   src={`http://localhost:5000/${product.images}`} alt=""/>
                                <div className="rate">
                                {rate.map((rate,i)=>(
                                        rate<=product.rating?<RateIcon key={i} style={{color:"orange"}}/>:
                                        <RateIcon key={i} />
                                ))}
                                </div>
                                <div className="product-discription">
                                    <p>{product.auctionName}</p>
                                    <p>
                                    <Clock
                                    date={Date.now() - product.deadline}
                                    format={'h:mm:ssa'}
                                    timezone={'East Africa Time (EAT)'}
                                    style={{fontSize: '1.5em'}}
                                    ticking={true} />
                                    </p>
                                    <p>{product.condition}</p>
                                    <p>min amount :{product.minAmount}</p>
                                    <p style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"10px"}}>
                                        <Button 
                                        onClick={
                                            ()=>{
                                                setOpen(true);
                                            }
                                        }
                                        color="primary" variant="contained">See More</Button>
                                        <Button className="cartbtn"  color="primary" className={classes.addCartBtn} variant="outlined">
                                        <CartIcon/>
                                        <DetailDialog open={open} data={product} setOpen={setOpen} />
                                    </Button>   
                                    </p>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}