import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './user.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import AuctionDialog from '../auction_dialog/AuctionDialog';
import PostAuction from '../auction_dialog/PostAuction';
import BidAuction from '../auction_dialog/BidAuction';
import Notification from './Notification';
import MyAuction from './MyAuction';
import MyBid from './MyBid';
import {
    GetAuctionAuctionAction,
    AuctionerAuctionAction,
    GetNotificationAuctionAction,

} from '../../redux-state-managment/Actions';
import Badge from '@material-ui/core/Badge';
import Deposite from '../payment/Deposit';
import Withdraw from '../payment/Withdraw';
import { BACKENDURL } from '../../redux-state-managment/Constants'







export default function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.AccountReducer.user);
    const [charinfo,setChartinfo]=React.useState({
        won:0,
        loss:0,
        waitingresult:0,
        pending:0,
    })
    
    const [num, setNum] = React.useState(1);
    const token = useSelector((state) => state.AccountReducer.token);

    function ul(index) {
        var underlines = document.querySelectorAll(".underline");
        if (index === 0) {
            dispatch(GetAuctionAuctionAction(token));
            setComponent("Bid");
        }
        if (index === 1) {
            dispatch(AuctionerAuctionAction(user._id));
            setComponent("Auction");
        }
        if (index === 2) {
            dispatch(GetNotificationAuctionAction(token));
            setComponent("Notifications")
        }
        if (index === 3) {
            setComponent("Win")
        }
        if (index === 4) {
            setComponent("Lost")
        }
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }
    }
    


    const [component, setComponent] = React.useState('Bid');
    const AuctioneerAuction = useSelector((state) => state.AuctionsReducer.AuctioneerAuction);
    const myauction = useSelector((state) => state.getBidReducer.getbid_auctions);
    const notification = useSelector((state) => state.getNotificationReducer.Notification);
    
    function MyBidChart() {
        if (myauction.length > 0) {
            let won = myauction.filter((auction) => auction.status === "won");
            let loss = myauction.filter((auction) => auction.status === "loss");
            let pending = myauction.filter((auction) => auction.status === "pending");
            console.log(pending)
            let waitingresult = myauction.filter((auction) => auction.status === "waitingresult");
            let total = myauction.length;

            let wonLength=(won.length*100)/total;
            let lossLength=(loss.length*100)/total;
            let pendingLength=(pending.length*100)/total;
            let waitingresultLength=(waitingresult.length*100)/total;
            setChartinfo({
                won:wonLength,
                pending:pendingLength,
                waitingresult:waitingresultLength,
                loss:lossLength
            })
        }
    }

    function renderComponents() {
        switch (component) {
            case "Bid":
                if (num === 1) {
                    dispatch(GetAuctionAuctionAction(token));
                    dispatch(AuctionerAuctionAction(user._id));
                    dispatch(GetNotificationAuctionAction(token))
                    setNum(2)
                }
                return <MyBid />
            case "Auction":
                return <MyAuction />
            case "Notifications":
                return <Notification />
            case "Win":
                return <Win />;
            case "Lost":
                return <Win />
            default:
                return;
        }
    }
    // dialog box
    const [openforPost, setOpen] = React.useState(false);
    const [dialogComp, setDialogComp] = React.useState('');
    function getnewNofcount(nots) {
        let count = 0;
        for (let not of nots)
            if (not.isRead) count++;
        return count;
    }
    const [openDeposit, setOpenDeposit] = React.useState(false);
    const [openWithdraw, setOpenWithdraw] = React.useState(false);

    React.useEffect(() => {
        
        MyBidChart();
    },[charinfo,myauction]);
    return (
        <div>
            <Deposite open={openDeposit} setOpen={setOpenDeposit} />
            <Withdraw open={openWithdraw} setOpen={setOpenWithdraw} />
            <Header />
            {/* <BidAuction/> */}
            <AuctionDialog
                openforPost={openforPost}
                setOpen={setOpen}
                component={dialogComp === 'Post' ? <PostAuction /> : <BidAuction />} />
            <div className="profile-page">
                <nav className="full">
                    {}
                    <div className="underline1"></div>
                    <div className="underline1"></div>
                    <div className="underline"></div>
                    <a href="#mybid" onClick={() => ul(0)}>My Bids</a>
                    <a href="#myauction" onClick={() => ul(1)}>My Auctions</a>
                    <a href="#notification"  >
                        <Badge onClick={() => ul(2)} color="primary" badgeContent={getnewNofcount(notification)}>
                            <span >Notifications</span>
                        </Badge>
                    </a>
                    {/* <a href="#win"  >
                        <span onClick={() => ul(3)}>Win</span>
                    </a>
                    <a href="#lost"  >
                        <span onClick={() => ul(4)}>lost</span>
                    </a> */}
                </nav>

                <div className="user-side-bar-btn">
                    <Button
                        onClick={() => {
                            setOpen(!openforPost);
                            setDialogComp('Post')
                        }}
                        variant="contained" color="primary" className="post">Post</Button>
                    <Button
                        onClick={() => {
                            setOpen(!openforPost);
                            setDialogComp('Bid')
                        }}
                        variant="contained" color="primary" >Bid</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
                    <div>
                        <div className="card">
                            <div className="ds-top"></div>
                            <div className="avatar-holder">
                                <img src={`${BACKENDURL}/users/${user.profileImage}`} alt="" />
                            </div>
                            <div className="name">
                                <a href="http://localhost:3000/profile" >{user.firstName} {user.lastName}</a>
                            </div>

                            <div className="ds-info">
                                <div className="ds pens">
                                    <h6 title="Number of pens created by the user">Bids <i className="fas fa-edit"></i></h6>
                                    <p>{myauction.length}</p>
                                </div>
                                <div className="ds projects">
                                    <h6 title="Number of projects created by the user">Posts <i className="fas fa-project-diagram"></i></h6>
                                    <p>{AuctioneerAuction.length}</p>
                                </div>
                                <div className="ds posts">
                                    <h6 title="Number of posts">Amount<i className="fas fa-comments"></i></h6>
                                    <p>{user.balance}</p>
                                </div>
                            </div>
                            <div className="ds-skill">
                                <h6>Bids Information chart<i className="fa fa-code" aria-hidden="true"></i></h6>
                                <div className="skill html">
                                    <h6><i className="fab fa-html5"></i> Pending </h6>
                                    <div className="bar bar-html" style={{
                                        width:`${charinfo.pending}%`
                                    }}>
                                        <p>{charinfo.pending}%</p>
                                    </div>
                                </div>
                                <div className="skill css">
                                    <h6><i className="fab fa-css3-alt"></i> Won </h6>
                                    <div className="bar bar-css" style={{
                                        width:`${charinfo.won}%`
                                    }}>
                                        <p>${charinfo.won}%</p>
                                    </div>
                                </div>
                                <div className="skill javascript">
                                    <h6><i className="fab fa-js"></i> Loss </h6>
                                    <div className="bar bar-js" style={{
                                        width:`${charinfo.loss}%`
                                    }}>
                                        <p>${charinfo.loss}%</p>
                                    </div>
                                </div>
                                <div className="skill javascript">
                                    <h6><i className="fab fa-js"></i> waitingresult </h6>
                                    <div className="bar bar-js" style={{
                                        width:`${charinfo.waitingresult}%`
                                    }}>
                                        <p>${charinfo.waitingresult}%</p>
                                    </div>
                                </div>
                                <div style={{
                                    margin: "auto"
                                }}>
                                    <Button fullWidth
                                        onClick={() => {
                                            setOpenDeposit(true);
                                        }}
                                        style={{
                                            marginTop: "20px",
                                            marginBottom: "20px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            color: "#00B0FF",
                                            borderColor: "#00B0FF"
                                        }} variant="outlined" >Deposite</Button>
                                    <Button fullWidth
                                        onClick={() => {
                                            setOpenWithdraw(true);
                                        }}
                                        style={{
                                            paddingLeft: "20px", paddingRight: "20px", color: "#00B0FF",
                                            borderColor: "#00B0FF"
                                        }}
                                        variant="outlined" >Withdrawal</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="main-render-area">
                        {renderComponents()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}






function Win() {
    return (
        <div className="bidTable">
            <div className="table">
                <div className="table-cell"></div>
                <div className="table-cell plattform">
                    <h3>Wins</h3>
                    <a href="#wins" className="btn">Wins</a>
                </div>
                <div className="table-cell enterprise">
                    <h3>Loses</h3>
                    <a href="#lost" className="btn">Loses</a>
                </div>
                <div className="table-cell cell-feature">Land</div>
                <div className="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Car</div>
                <div className="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Land</div>
                <div className="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Road Constraction</div>
                <div className="table-cell">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Mobile Phone</div>
                <div className="table-cell"></div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Farm Land</div>
                <div className="table-cell"></div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">Car</div>
                <div className="table-cell"></div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
                <div className="table-cell cell-feature">House</div>
                <div className="table-cell"></div>
                <div className="table-cell">
                    <svg className="enterprise-check" width="18" height="18" viewBox="0 0 18 18" xmlns="#">
                        <title>check_blue</title>
                        <path d="M6.116 14.884c.488.488 1.28.488 1.768 0l10-10c.488-.488.488-1.28 0-1.768s-1.28-.488-1.768 0l-9.08 9.15-4.152-4.15c-.488-.488-1.28-.488-1.768 0s-.488 1.28 0 1.768l5 5z" fill="limegreen" fillRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}