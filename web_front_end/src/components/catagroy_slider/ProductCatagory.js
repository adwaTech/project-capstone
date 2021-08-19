import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {Button,CircularProgress,makeStyles} from '@material-ui/core';
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import {useSelector,useDispatch} from 'react-redux';
import {strings} from '../../language/language';
import moment from 'moment';
import Timer from 'react-compound-timer'
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
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{

    },[lang]);
    const dispatch=useDispatch();
    const rate=[1,2,3,4,5];
    const classes=useStyles();
    const [error,setError]=React.useState(false);
    const [num,setNum]=React.useState(1);
   

    const token = useSelector((state) => state.AccountReducer.token);
    const allAuction=useSelector((state)=>state.AuctionsReducer.allAuction);
    const allexcept=useSelector((state)=>state.AuctionsReducer.allexcept);
    const popularAuction=useSelector((state)=>state.AuctionsReducer.popularAuctionn);
    const latestAuction=useSelector((state)=>state.AuctionsReducer.latestAuction);
    React.useEffect( ()=>{
        if(num==1){
            dispatch(AllAuctionAction());
            dispatch(LatestAuctionAction());
            dispatch(AllExceptAuctionAction());
            dispatch(PopularAuctionAction());
            setNum(2)
        }
        // await dispatch(PopularAuctionAction());
        // 
        // 
    });
    var loading=true;
    if(allAuction.length>0){
    
        loading=false
    }
    const [open,setOpen]=React.useState(false);
    function timer(end){
        const date=new Date(end.toString()).getTime();
        const now=new Date().getTime();
        return date-now
    }
    const Auctions=[
        allAuction,
        latestAuction,
        allAuction.filter((item)=>item.auctionType==="open"),
        allAuction.filter((item)=>item.auctionType==="sealed"),
        allAuction.filter((item)=>item.condition==="used"),
        allAuction.filter((item)=>item.condition==="new")
    ];
    const [index,setIndex]=React.useState(0);
    
    return (
        <div>
            <div className="description1" style={{marginTop:"300px"}}>
                <img src={Image8} alt=""/>
                <div className="description1-area">
                    <h3>{strings.FindhTBestProduct}</h3>
                    
                    <Button className={classes.shopNow} variant="contained" color="primary">Bid Now</Button>
                </div>
                <img src={Image7} alt="" width="40px" height="40px"/>
            </div>
            <div className="section-name">
                <h2 >Latest Products</h2>
                <hr/>
                <div className="product-type">
                    <span 
                    onClick={
                        async ()=>{
                            
                            await dispatch(AllAuctionAction());
                            setIndex(0)
                        }
                    }
                    className="type1">All</span>
                    <span 
                    onClick={
                        async ()=>{
                            await dispatch(LatestAuctionAction());
                            setIndex(1)
                        }
                    }
                    className="type1">Latest</span>
                    
                    <span 
                    onClick={
                        ()=>{
                            
                            setIndex(2)
                        }
                    }
                    className="type1">Open</span>
                    <span 
                    onClick={
                        ()=>{
                            setIndex(3)
                        }
                    }
                    className="type1">sealed</span>
                    <span 
                    onClick={
                        ()=>{
                            setIndex(4)
                        }
                    }
                    className="type1">Used</span>
                    <span 
                    onClick={
                        ()=>{
                            setIndex(5)
                        }
                    }
                    className="type1">New</span>
                    
                </div>  
            </div>
            <div className="products">
                <div className="products-item-section">
                    {
                        loading?<CircularProgress/>:

                        Auctions[index].map(product=>(
                           
                            <div className="product-item" key={product._id}>
                                <img   src={`http://localhost:5000/${product.images}`} alt=""/>
                                <div className="rate">
                                {rate.map((rate,i)=>(
                                        rate<=product.rating?<RateIcon key={i} style={{color:"orange"}}/>:
                                        <RateIcon key={i} />
                                ))}
                                </div>
                                <div className="product-discription">
                                    <p>{product.auctionName}</p>
                                    <Timer
                                        initialTime={timer(product.deadline)}
                                        lastUnit="d"
                                        direction="backward"
                                    >
                                        {() => (
                                            <React.Fragment>
                                                <Timer.Days /> D	&nbsp;
                                                <Timer.Hours /> H	&nbsp;
                                                <Timer.Minutes /> M	&nbsp;
                                                <Timer.Seconds /> S	&nbsp;
                                            </React.Fragment>
                                        )}
                                    </Timer>
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
