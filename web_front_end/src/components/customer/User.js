import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './user.css';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import AuctionDialog from '../auction_dialog/AuctionDialog';
import PostAuction from '../auction_dialog/PostAuction';
import BidAuction from '../auction_dialog/BidAuction';
import MyAuction from './MyAuction';
import MyBid from './MyBid';
import {
    GetAuctionAuctionAction,
    AuctionerAuctionAction
} from '../../redux-state-managment/Actions'



export default function User() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const target = {
            clicked: 0,
            currentFollowers: 90,
            btn: document.querySelector("a.btn"),
            fw: document.querySelector("span.followers")
        };

        const follow = () => {
            target.clicked += 1;
            target.btn.innerHTML = 'Following <i className="fas fa-user-times"></i>';

            if (target.clicked % 2 === 0) {
                target.currentFollowers -= 1;
                target.btn.innerHTML = 'Follow <i className="fas fa-user-plus"></i>';
            }
            else {
                target.currentFollowers += 1;
            }

            target.fw.textContent = target.currentFollowers;
            target.btn.classList.toggle("following");
        }
    });
    const token = useSelector((state) => state.AccountReducer.token);

    function ul(index) {
        var underlines = document.querySelectorAll(".underline");
        if (index == 0) {
            setComponent("Bid");
        }
        if (index == 1) {
            setComponent("Auction");
        }
        if (index == 2) {
            setComponent("Notifications")
        }
        if (index == 3) {
            setComponent("Win")
        }
        if (index == 4) {
            setComponent("Lost")
        }
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }
    }
    const user = useSelector((state) => state.AccountReducer.user);
    const [component, setComponent] = React.useState('Bid');
    const AuctioneerAuction = useSelector((state) => state.AuctionsReducer.AuctioneerAuction);
    const myauction = useSelector((state) => state.getBidReducer.getbid_auctions);

    function renderComponents() {
        switch (component) {
            case "Bid":
                dispatch(GetAuctionAuctionAction(token));
                return <MyBid />
            case "Auction":
                dispatch(AuctionerAuctionAction(user._id));
                return <MyAuction />
            case "Notifications":
                return <Notification />
            case "Win":
                return <Win />;
            case "Lost":
                return <Win />
        }
    }
    // dialog box
    const [openforPost, setOpen] = React.useState(false);
    const [dialogComp, setDialogComp] = React.useState('');
    return (
        <div>
            <Header />
            {/* <BidAuction/> */}
            <AuctionDialog
                openforPost={openforPost}
                setOpen={setOpen}
                component={dialogComp === 'Post' ? <PostAuction /> : <BidAuction />} />
            <div className="profile-page">
                <nav className="full">

                    <div className="underline1"></div>
                    <div className="underline1"></div>
                    <div className="underline"></div>
                    <a onClick={() => ul(0)}>My Bids</a>
                    <a onClick={() => ul(1)}>My Auctions</a>
                    <a onClick={() => ul(2)}>Notifications</a>
                    <a onClick={() => ul(3)}>Win</a>
                    <a onClick={() => ul(4)}>lost</a>
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
                                <img src={`http://localhost:5000/${user.profileImage}`} alt="" />
                            </div>
                            <div className="name">
                                <a href="" target="_blank">{user.firstName} {user.lastName}</a>
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
                                    <p>20000</p>
                                </div>
                            </div>
                            <div className="ds-skill">
                                <h6>Activities<i className="fa fa-code" aria-hidden="true"></i></h6>
                                <div className="skill html">
                                    <h6><i className="fab fa-html5"></i> Total Auction </h6>
                                    <div className="bar bar-html">
                                        <p>95%</p>
                                    </div>
                                </div>
                                <div className="skill css">
                                    <h6><i className="fab fa-css3-alt"></i> Total Bid </h6>
                                    <div className="bar bar-css">
                                        <p>90%</p>
                                    </div>
                                </div>
                                <div className="skill javascript">
                                    <h6><i className="fab fa-js"></i> Total Win </h6>
                                    <div className="bar bar-js">
                                        <p>75%</p>
                                    </div>
                                </div>
                                <div style={{
                                    margin:"auto"
                                }}>
                                    <Button fullWidth
                                        style={{
                                            marginTop:"20px",
                                            marginBottom: "20px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px",
                                            color:"#00B0FF",
                                            borderColor:"#00B0FF"
                                        }} variant="outlined" >Deposite</Button>
                                    <Button fullWidth
                                        style={{
                                            paddingLeft: "20px", paddingRight: "20px",color:"#00B0FF",
                                            borderColor:"#00B0FF"
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


function BidTable() {
    return (
        <div className="bidTable">
            <div className="table">
                <div className="table-cell"></div>
                <div className="table-cell plattform">
                    <h3>Wins</h3>
                    <a href="" className="btn">Wins</a>
                </div>
                <div className="table-cell enterprise">
                    <h3>Loses</h3>
                    <a href="" className="btn">Loses</a>
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
    );
}

function Notification() {
    return (
        <div style={{
            marginLeft: "100px"
        }}>
            <Alert style={{ marginBottom: '10px' }} severity="error">This is an error alert — check it out!</Alert>
            <Alert style={{ marginBottom: '10px' }} severity="warning">This is a warning alert — check it out!</Alert>
            <Alert style={{ marginBottom: '10px' }} severity="info">This is an info alert — check it out!</Alert>
            <Alert style={{ marginBottom: '10px' }} severity="success">This is a success alert — check it out!</Alert>
        </div>
    );
}

function Win() {
    return (
        <div className="bidTable">
            <div className="table">
                <div className="table-cell"></div>
                <div className="table-cell plattform">
                    <h3>Wins</h3>
                    <a href="" className="btn">Wins</a>
                </div>
                <div className="table-cell enterprise">
                    <h3>Loses</h3>
                    <a href="" className="btn">Loses</a>
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