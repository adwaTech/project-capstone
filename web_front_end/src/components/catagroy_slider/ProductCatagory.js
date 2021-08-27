import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {
    Button,
    CircularProgress,
    makeStyles,
} from '@material-ui/core';
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import { useSelector, useDispatch } from 'react-redux';
import { strings } from '../../language/language';
import Timer from 'react-compound-timer';
import BidAuctionForm from '../auction_dialog/BidAuctionForm';
import Slide from '@material-ui/core/Slide';
import {
    AllAuctionAction,
    PopularAuctionAction,
    LatestAuctionAction,
    AllExceptAuctionAction,
} from '../../redux-state-managment/Actions';
import DetailDialog from './Detail';


const useStyles = makeStyles({
    addCartBtn: {
        borderRadius: "20px"
    },
    shopNow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "30px"
    },
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 400,
        height: 100,

    },
    controls: {
        marginTop: "10px"
    },
    dialogbtn1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "10px"
    },
    dialogbtn2: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
})
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Products() {
    const dispatch = useDispatch();
    const rate = [1, 2, 3, 4, 5];
    const classes = useStyles();
    const [num, setNum] = React.useState(1);


    const allAuction = useSelector((state) => state.AuctionsReducer.allAuction);
    const allexcept = useSelector((state) => state.AuctionsReducer.allexcept);
    
    const latestAuction = useSelector((state) => state.AuctionsReducer.latestAuction);
    const [numTodesplay, setNumTodesplay] = React.useState(0);

    

    const lang = useSelector((state) => state.LanguageReducer.language);

    React.useEffect(() => {

    }, [lang]);
    React.useEffect(async () => {
        if (num == 1) {
            await dispatch(AllAuctionAction());
            await dispatch(LatestAuctionAction());
            // dispatch(AllExceptAuctionAction());
            
            setNum(2)
        }
    });
    console.log(allAuction);
    var loading = true;
    if (allAuction.length > 0) {

        loading = false
    }
    const [open, setOpen] = React.useState(false);
    const [open_bid_dialog, setOpen_bid_dialog] = React.useState(false);
    const [data, setData] = React.useState({});
    function timer(end) {
        const date = new Date(end.toString()).getTime();
        const now = new Date().getTime();
        return date - now
    }
    const Auctions = [
        allAuction,
        latestAuction,
        allAuction.filter((item) => item.auctionType == "live"),
        allAuction.filter((item) => item.auctionType == "sealed"),
        allAuction.filter((item) => item.condition == "used"),
        allAuction.filter((item) => item.condition == "new"),
    ];
    const [index, setIndex] = React.useState(3);            
    function myMap(product, startindex) {
        let array = [];
        for (let i = startindex; i < 6 + startindex; i++) {
            if (i < product.length)
                array.push(<div className="product-item" key={product[i]._id}>
                    <img src={`http://localhost:5000/${product[i].images[0]}`} alt="" />
                    <div className="rate">
                        {rate.map((rate, i) => (
                            // rate <= product[i].rating ? <RateIcon key={i} style={{ color: "orange" }} /> :
                                <RateIcon key={i} />
                        ))}
                    </div>
                    <div className="product-discription">
                        <p>{product[i].auctionName}</p>
                        <Timer
                            initialTime={timer(product[i].deadline)}
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
                        <p>{product[i].condition}</p>
                        <p>min amount :{product[i].minAmount}</p>
                        <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                            <Button
                                onClick={
                                    () => {
                                        setOpen(!open);
                                        setData(product[i]);
                                    }
                                }
                                color="primary" variant="contained">See More</Button>
                            <Button
                                onClick={
                                    () => {
                                        setOpen_bid_dialog(!open_bid_dialog);
                                        setData(product[i]);
                                    }
                                }
                                className="cartbtn" color="primary" className={classes.addCartBtn} variant="outlined">
                                <CartIcon />
                            </Button>
                            
                            
                        </p>

                    </div>
                    
                </div>)

        }
        return <div
            className="products-item-section"
        >
            {array}
            <div style={{
                display: "flex",
            }}>
                <Button style={{
                    width:"100px",
                    height:"40px",
                    justifyContent:"center",
                    alignItem:"center",
                    textAlign:"center"
                }} 
                onClick={() => {
                    if(numTodesplay>0)
                    setNumTodesplay(numTodesplay - 6);
                }}
                color="primary" variant="outlined">Prev</Button>
                <Button
                    style={{
                        width:"100px",
                        height:"40px",
                        justifyContent:"center",
                        alignItem:"center",
                        textAlign:"center",
                        marginLeft:'10px'
                    }}
                    onClick={() => {
                        if(numTodesplay<Auctions[index].length-1)
                        setNumTodesplay(numTodesplay + 6);
                    }}
                    color="primary" variant="outlined">Next</Button>
            </div>
        </div>
    }
    return (
        <div>
            <DetailDialog open={open} data={data} setOpen={setOpen} />
            <BidAuctionForm open={open_bid_dialog} data={data} setOpen={setOpen_bid_dialog} />
            <div className="description1" style={{ marginTop: "300px" }}>
                <img src={Image8} alt="" />
                <div className="description1-area">
                    <h3>{strings.FindhTBestProduct}</h3>
                    
                    <Button className={classes.shopNow} variant="contained" color="primary">Bid Now</Button>
                </div>
                <img src={Image7} alt="" width="40px" height="40px" />
            </div>
            <div className="section-name">
                <h2 >Latest Products</h2>
                <hr />
                <div className="product-type">
                    <span
                        onClick={
                            async () => {

                                await dispatch(AllAuctionAction());
                                setIndex(0)
                            }
                        }
                        className="type1">All</span>
                    <span
                        onClick={
                            async () => {
                                await dispatch(LatestAuctionAction());
                                setIndex(1)
                            }
                        }
                        className="type1">Latest</span>

                    <span
                        onClick={
                            () => {

                                setIndex(2)
                            }
                        }
                        className="type1">Open</span>
                    <span
                        onClick={
                            () => {
                                setIndex(3)
                            }
                        }
                        className="type1">sealed</span>
                    <span
                        onClick={
                            () => {
                                setIndex(4)
                            }
                        }
                        className="type1">Used</span>
                    <span
                        onClick={
                            () => {
                                setIndex(5)
                            }
                        }
                        className="type1">New</span>

                </div>
            </div>
            <div className="products">
                {
                    loading ? <CircularProgress /> :

                        myMap(Auctions[index], numTodesplay)
                }
                
            </div>
         </div>
    
    )
}
