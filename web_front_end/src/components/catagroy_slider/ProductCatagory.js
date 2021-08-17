import React from 'react';
import RateIcon from '@material-ui/icons/StarBorder';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import Alert from '@material-ui/lab/Alert';
import {
    Button,
    CircularProgress,
    Dialog,
    makeStyles,
    Typography, CardContent,
    Card,
    DialogContent,
    Grid,
    TextField,
} from '@material-ui/core';
import Image8 from '../../assets/images/PngItem_3205063.png';
import Image7 from '../../assets/images/PngItem_3204975.png';
import { useSelector, useDispatch } from 'react-redux';
import { strings } from '../../language/language';
import moment from 'moment';
import Timer from 'react-compound-timer';
import BidAuctionForm from '../customer/BidAuctionForm';
import Slide from '@material-ui/core/Slide';
import {
    AllAuctionAction,
    PopularAuctionAction,
    LatestAuctionAction,
    AllExceptAuctionAction,
    BidAuctionAction,
} from '../../redux-state-managment/Actions';
import DetailDialog from './Detail';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
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
    const [error, setError] = React.useState(false);
    const [num, setNum] = React.useState(1);


    const token = useSelector((state) => state.AccountReducer.token);
    const allAuction = useSelector((state) => state.AuctionsReducer.allAuction);
    const allexcept = useSelector((state) => state.AuctionsReducer.allexcept);
    const popularAuction = useSelector((state) => state.AuctionsReducer.popularAuction);
    const latestAuction = useSelector((state) => state.AuctionsReducer.latestAuction);


    // for bid 
    const bidstatus = useSelector((state) => state.bidAuctionReducer.bidstatus);
    const biderror = useSelector((state) => state.bidAuctionReducer.biderror);
    const bidstatusText = useSelector((state) => state.bidAuctionReducer.bidstatusText);
    const bid = useSelector((state) => state.bidAuctionReducer.bid);
    console.log(bidstatus);
    console.log(biderror);

    const lang = useSelector((state) => state.LanguageReducer.language);
    console.log(latestAuction);
    React.useEffect(() => {

    }, [lang]);
    React.useEffect(() => {
        if (num == 1) {
            dispatch(AllAuctionAction());
            dispatch(LatestAuctionAction());
            dispatch(AllExceptAuctionAction());
            dispatch(PopularAuctionAction());
            setNum(2)
        }
    });
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
        allAuction.filter((item) => item.auctionType === "open"),
        allAuction.filter((item) => item.auctionType === "sealed"),
        allAuction.filter((item) => item.condition === "used"),
        allAuction.filter((item) => item.condition === "new")
    ];
    const [index, setIndex] = React.useState(0);
    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });
    const [state, setState] = React.useState({
        proposalType: "",
        description: "",
        amount: "",
        cpo: "",
        ownerId: "",
        auctionId: "",
        proposalDocument: "",
    })
    return (
        <div>
            <div className="description1" style={{ marginTop: "300px" }}>
                <img src={Image8} alt="" />
                <div className="description1-area">
                    <h3>Find The Best Product </h3>
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
                <div className="products-item-section">
                    {
                        loading ? <CircularProgress /> :

                            Auctions[index].map(product => (

                                <div className="product-item" key={product._id}>
                                    <img src={`http://localhost:5000/${product.images}`} alt="" />
                                    <div className="rate">
                                        {rate.map((rate, i) => (
                                            rate <= product.rating ? <RateIcon key={i} style={{ color: "orange" }} /> :
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
                                        <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px" }}>
                                            <Button
                                                onClick={
                                                    () => {
                                                        setOpen(true);
                                                        setData(product);
                                                    }
                                                }
                                                color="primary" variant="contained">See More</Button>
                                            <Button
                                                onClick={
                                                    () => {
                                                        setOpen_bid_dialog(!open);
                                                        setData(product);
                                                    }
                                                }
                                                className="cartbtn" color="primary" className={classes.addCartBtn} variant="outlined">
                                                <CartIcon />

                                            </Button>
                                            {/* <BidAuctionForm open={open_bid_dialog} setOpen={setOpen_bid_dialog} /> */}
                                        </p>

                                    </div>
                                    {/* <DetailDialog open={open} data={data} setOpen={setOpen} /> */}
                                </div>
                            ))
                    }
                </div>
                
                <Dialog
                    open={open_bid_dialog}
                >
                        {console.log(data)}
                    <DialogTitle onClose={() => setOpen_bid_dialog(!open_bid_dialog)}>
                        Bid For An Auction
                    </DialogTitle>
                    {
                        biderror
                        ? <Alert severity="error">status :{bidstatus} <br />statusText:{bidstatusText} <br /> error:{biderror}</Alert>
                        : null
                    }
                    {
                        bidstatus === 200
                        ? <Alert severity="success">status :{bidstatus} : your request to bid is successfuly submited</Alert>
                        : null
                    }
                    <DialogContent >
                        <Grid spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="description"
                                    value={state.description}
                                    multiline
                                    fullWidth
                                    autoComplete="description"
                                    onChange={(e) => {
                                        setState({ ...state, description: e.target.value })
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    label="amount"
                                    multiline
                                    fullWidth
                                    autoComplete="amount"
                                    value={state.amount}
                                    onChange={(e) => {
                                        setState({ ...state, amount: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    type="number"
                                    id="cpo"
                                    name="cpo"
                                    label="cpo"
                                    multiline
                                    fullWidth
                                    autoComplete="cpo"
                                    value={state.cpo}
                                    onChange={(e) => {
                                        setState({ ...state, cpo: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} className={classes.dialogbtn1} >
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    multiple
                                    id="raised-button-file"
                                    onChange={(e) => {
                                        setState({ ...state, proposalDocument: e.target.files[0] });
                                    }}
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span" className={classes.button}>
                                        Upload Doc if any
                                    </Button>
                                </label>
                                <label>{state.proposalDocument.name}</label>
                            </Grid>
                            
                            <Grid className={classes.dialogbtn2}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={async () => {
                                        const formData = new FormData();
                                        formData.append('amount', state.amount);
                                        formData.append('auctionId', data._id);
                                        formData.append('cpo', state.cpo);
                                        formData.append('description', state.description);
                                        formData.append('ownerId', data.owner);
                                        formData.append('proposalDocument', state.proposalDocument);
                                        formData.append('proposalType', data.auctionType);
                                        await dispatch(BidAuctionAction(formData,token));
                                    }}
                                >Submite Bid</Button>
                            </Grid>
                        </Grid>
                    </DialogContent >
                </Dialog>

                <Dialog open={open}>
                    <DialogTitle onClose={() => setOpen(!open)}>
                        Auction Detail
                    </DialogTitle>
                    <DialogContent dividers>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <div >
                                        <h5>Name:</h5> <Typography variant="subtitle2">{data.auctionName}</Typography>
                                    </div>
                                    <div>
                                        <h5>Description:</h5> <Typography variant="subtitle2">{data.briefDescription}</Typography>
                                    </div>
                                    <div >
                                        <h5>Bid Fee:</h5> <Typography variant="subtitle2">{data.bidFee}</Typography>
                                    </div>
                                    <div>
                                        <h5>Min Amount:</h5> <Typography variant="subtitle2">{data.minAmount}</Typography>
                                    </div>
                                    <div >
                                        <h5>Min CPO:</h5> <Typography variant="subtitle2">{data.minCPO}</Typography>
                                    </div>
                                    <div >
                                        <h5>Owner:</h5> <Typography variant="subtitle2">{data.owner}</Typography>
                                    </div>
                                    <div >
                                        <h5>Type:</h5> <Typography variant="subtitle2">
                                            {data.auctionType}
                                        </Typography>
                                    </div>
                                    <div>
                                        <h5>Category:</h5> {data.auctionCategory}
                                    </div>
                                </CardContent>
                            </div>
                            <CardContent>
                                <div >
                                    <h5>Extended Description:</h5><Typography variant="subtitle2"> {data.extendedDescription}</Typography>
                                </div>
                                <div>
                                    <h5>Start Date:</h5><Typography variant="subtitle2"> {moment(data.postedOn).format()}</Typography>
                                </div>
                                <div>
                                    <h5>Dedline Date:</h5><Typography variant="subtitle2"> {moment(data.deadline).format()}</Typography>
                                </div>
                                <div >
                                    <h5>Condition:</h5> <Typography variant="subtitle2">{data.condition}</Typography>
                                </div>
                                <div >
                                    {/* <h5>Number of Bids:</h5> <Typography variant="subtitle2">{data.proposals.length}</Typography> */}
                                </div>
                                <Typography  >
                                    <h5>Approval:</h5> <Typography variant="subtitle2">{data.approval}</Typography>
                                </Typography>
                                <div >
                                    <h5>Status:</h5> <Typography variant="subtitle2">{data.status}</Typography>
                                </div>

                            </CardContent>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <img
                                    className={classes.cover}
                                    src={`http://localhost:5000/${data.images}`}
                                    alt="Product images"
                                />
                                <div className={classes.controls}>
                                    <Button fullWidth variant="contained" color="primary">Bid</Button>
                                </div>
                            </div>
                        </Card>
                    </DialogContent>

                </Dialog>
            </div>
        </div>
    )
}
