import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import {
    Button,
    CircularProgress,
    makeStyles,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { strings } from '../../language/language';
import Timer from 'react-compound-timer';
import BidAuctionForm from '../customer/BidAuctionForm';
import Slide from '@material-ui/core/Slide';
import {
    AllAuctionAction,
    AllExceptAuctionAction
} from '../../redux-state-managment/Actions';
import DetailDialog from '../catagroy_slider/Detail';



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

export default function Catagory(props) {
    const type = props.match.params.type;
    const dispatch = useDispatch();
    const rate = [1, 2, 3, 4, 5];
    const classes = useStyles();
    const [num, setNum] = React.useState(1);


    const allAuction = useSelector((state) => state.AuctionsReducer.allAuction);
    const allexcept = useSelector((state) => state.AuctionsReducer.allexcept);
    const token = useSelector((state) => state.AccountReducer.token);
    const user=useSelector((state)=>state.AccountReducer.user);

    const [numTodesplay, setNumTodesplay] = React.useState(0);



    const lang = useSelector((state) => state.LanguageReducer.language);

    React.useEffect(() => {

    }, [lang]);
    React.useEffect(async () => {
        if (num == 1) {
            await dispatch(AllAuctionAction());
        }
        if(token){
            await  dispatch(AllExceptAuctionAction(user._id));
        }
    }, [allAuction]);
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
    const [startindex, setStartindex] = React.useState(0);
    function myMap() {
        let array = [];
        let catagoryauction = [];
        console.log(allAuction[0].auction == "car");
        if (!token) {
            catagoryauction = [...allAuction.filter(item => item.auction.auctionCategory == type.toLowerCase())];
            console.log(catagoryauction);
        }
        if (token) {
            catagoryauction = allexcept.filter(item => item.auction.auctionCategory == type.toString().toLowerCase());
        }
        if (catagoryauction.length > 0) {
            for (let i = startindex; i < 12 + startindex; i++) {
                if (i < catagoryauction.length)
                    array.push(<div className="product-item" key={catagoryauction[i]._id}>
                        <img src={`http://localhost:5000/${catagoryauction[i].auction.images[0]}`} alt="" />
                        {console.log(catagoryauction[i])}
                        <div className="rate">
                            {rate.map((rate, i) => (
                                // rate <= catagoryauction[i].rating ? <RateIcon key={i} style={{ color: "orange" }} /> :
                                <RateIcon key={i} />
                            ))}
                        </div>
                        <div className="product-discription">
                            <p>{catagoryauction[i].auctionName}</p>
                            <Timer
                                initialTime={timer(catagoryauction[i].auction.deadline)}
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
                            <p>{catagoryauction[i].auction.condition}</p>
                            <p>min amount :{catagoryauction[i].auction.minAmount}</p>
                            <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                                <Button
                                    onClick={
                                        () => {
                                            setOpen(!open);
                                            setData(catagoryauction[i]);
                                        }
                                    }
                                    color="primary" variant="contained">See More</Button>
                                <Button
                                    onClick={
                                        () => {
                                            setOpen_bid_dialog(!open_bid_dialog);
                                            setData(catagoryauction[i]);
                                        }
                                    }
                                    className="cartbtn" color="primary" className={classes.addCartBtn} variant="outlined">
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
            <div style={{
                display: "flex",
            }}>
                <Button style={{
                    width: "100px",
                    height: "40px",
                    justifyContent: "center",
                    alignItem: "center",
                    textAlign: "center"
                }}
                    onClick={() => {
                        // if(numTodesplay>0)
                        // setNumTodesplay(numTodesplay - 12);
                    }}
                    color="primary" variant="outlined">Prev</Button>
                <Button
                    style={{
                        width: "100px",
                        height: "40px",
                        justifyContent: "center",
                        alignItem: "center",
                        textAlign: "center",
                        marginLeft: '10px'
                    }}
                    onClick={() => {
                        // if(numTodesplay<Auctions[index].length-1)
                        // setNumTodesplay(numTodesplay + 12);
                    }}
                    color="primary" variant="outlined">Next</Button>
            </div>
        </div>
    }
    return (
        <div>
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
