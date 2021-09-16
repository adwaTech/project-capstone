import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {
    Button,
    CircularProgress,
    makeStyles,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import { strings } from '../../language/language';
import Timer from 'react-compound-timer';
import BidAuctionForm from '../auction_dialog/BidAuctionForm';

import {
    AllAuctionAction,
    AllExceptAuctionAction,
    IdAuctionAction
} from '../../redux-state-managment/Actions';
import DetailDialog from '../catagroy_slider/Detail';
import {BACKENDURL} from '../../redux-state-managment/Constants'
import ScrollToTop from '../../scrollTop/ScrollToTop'



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

export default function Catagory(props) {
    const type = props.match.params.type;
    const dispatch = useDispatch();
    const rate = [1, 2, 3, 4, 5];
    const classes = useStyles();
    const [num, setNum] = React.useState(1);


    const allAuction = useSelector((state) => state.AuctionsReducer.allAuction);
    const allexcept = useSelector((state) => state.AuctionsReducer.allexcept);
    const token = useSelector((state) => state.AccountReducer.token);
    const user = useSelector((state)=>state.AccountReducer.user);

    const [numTodesplay, setNumTodesplay] = React.useState(0);



    const lang = useSelector((state) => state.LanguageReducer.language);

   
    React.useEffect(() => {
        if (num === 1) {
             dispatch(AllAuctionAction());
            setNum(2)
        }
        if(token){
              dispatch(AllExceptAuctionAction(user?user._id:null));
        }
        else{
            dispatch(AllAuctionAction());
        }
    }, [allAuction,lang,dispatch,num,token,user]);
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
    // const [startindex, setStartindex] = React.useState(0);
    function myMap() {
        let array = [];
        let catagoryauction = [];
        if (!token) {
            catagoryauction = [...allAuction.filter(item => item.auctionCategory === type.toLowerCase())];
            
        }
        if (token) {
            catagoryauction = allexcept.filter(item => item.auctionCategory === type.toString().toLowerCase());
        }
        if (catagoryauction.length > 0) {
            for (let i = numTodesplay; i < 12 + numTodesplay; i++) {
                if (i < catagoryauction.length)
                    array.push(<div className="product-item" key={catagoryauction[i]._id}>
                        <img src={`${BACKENDURL}/auctions/${catagoryauction[i].images[0]}`} alt="" />
                        
                        <div className="rate">
                            {rate.map((rate, i) => (
                                // rate <= catagoryauction[i].rating ? <RateIcon key={i} style={{ color: "orange" }} /> :
                                <RateIcon key={i} />
                            ))}
                        </div>
                        <div className="product-discription">
                            <p>{catagoryauction[i].auctionName}</p>
                            <Timer
                                initialTime={timer(catagoryauction[i].deadline)}
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
                            <p>{catagoryauction[i].condition}</p>
                            <p>min amount :{catagoryauction[i].minAmount}</p>
                            <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                                <Button
                                    onClick={
                                        () => {
                                            setOpen(!open);
                                            setData(catagoryauction[i]);
                                            dispatch(IdAuctionAction(catagoryauction[i]._id));
                                        }
                                    }
                                    color="primary" variant="contained">See More</Button>
                                <Button
                                    onClick={
                                        () => {
                                            setOpen_bid_dialog(true);
                                            setData(catagoryauction[i]);
                                            dispatch(IdAuctionAction(catagoryauction[i]._id));
                                        }
                                    }
                                    // className="cartbtn" 
                                    color="primary" className={classes.addCartBtn} variant="outlined">
                                    <CartIcon />
                                </Button>


                            </p>

                        </div>

                    </div>)

            }
        }

        return <div
            className="products-item-section"
        >
            {array}
            {(catagoryauction.length>0 && catagoryauction.length >12 )
            ?<div style={{
                display: "flex",
            }}>
                <Button style={{
                    width: "100px",
                    height: "40px",
                    justifyContent: "center",
                    alignItem: "center",
                    textAlign: "center"
                }}
                disabled={numTodesplay} 
                    onClick={() => {
                        if(numTodesplay>0)
                        setNumTodesplay(numTodesplay - 12);
                    }}
                    color="primary" variant="outlined">Prev</Button>
                <Button
                    disabled={true}
                    style={{
                        width: "100px",
                        height: "40px",
                        justifyContent: "center",
                        alignItem: "center",
                        textAlign: "center",
                        marginLeft: '10px'
                    }}
                    onClick={() => {
                        if(numTodesplay<catagoryauction.length-1 && numTodesplay+12<catagoryauction.length)
                        setNumTodesplay(numTodesplay + 12);
                    }}
                    color="primary" variant="outlined">Next</Button>
            </div>:null}
            
        </div>
    }
    return (
        <div>
            <ScrollToTop/>
            <DetailDialog open={open} data={data} setOpen={setOpen} />
            <BidAuctionForm open={open_bid_dialog} data={data} setOpen={setOpen_bid_dialog} />

            <div style={{
                position: "relative",
                top: "180px",
                marginBottom: "400px"
            }}>
                <div className="products">
                    {
                        allAuction ? (loading ? <CircularProgress /> :
                            myMap()) : null
                    }
                </div>
            </div>
        </div>
    )
}
