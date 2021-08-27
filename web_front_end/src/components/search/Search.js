import React from 'react';
import {
    withStyles
} from '@material-ui/core'
import './search.css';
import { useSelector } from 'react-redux';
import BidAuctionForm from '../auction_dialog/BidAuctionForm';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import Timer from 'react-compound-timer';

import Badge from '@material-ui/core/Badge';

const defaultProps = {
    center: {
        lat: 8.9806,
        lng: 38.7578
    },
    zoom: 11
}
const StyledBadge = withStyles((theme) => ({

    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const defaultLocation = { lat: 8.9806, lng: 38.7578 };
const DefaultZoom = 13;
export default function Search(props) {
    // location
    const [location, setLocation] = React.useState(defaultLocation);
    const [zoom, setZoom] = React.useState(DefaultZoom);
    
    // type
    const auctionsWithName = useSelector((state) => state.SearchAuctionReducer.auctionsWithName);
    const auctionsWithCategory = useSelector((state) => state.SearchAuctionReducer.auctionsWithCategory);
    const cities = useSelector((state) => state.SearchAuctionReducer.cities);
    const usersWithFirstName = useSelector((state) => state.SearchAuctionReducer.usersWithFirstName);
    const usersWithLastName = useSelector((state) => state.SearchAuctionReducer.usersWithLastName);


    const id = props.match.params.search_item;
    const type = props.match.params.type;
    const [auction, setAuction] = React.useState({});
    const [auctiontype, setAuctionType] = React.useState('');
    const [date, setDate] = React.useState('');
    React.useEffect(() => {
        if (type === 'name') {
            const au = auctionsWithName.filter(auction => auction._id == id);
            setAuction(au[0]);
            timer(au[0].deadline)
            setAuctionType('name')
        }
        if (type === 'first_name') {
            const au = usersWithFirstName.filter(auction => auction._id == id);
            setAuction(au[0]);
            setAuctionType('first_name')
        }
        if (type === 'last_name') {
            const au = usersWithLastName.filter(auction => auction._id == id);
            setAuction(au[0]);
            setAuctionType('last_name')
        }
        if (type === 'catagory') {
            const au = auctionsWithCategory.filter(auction => auction._id == id);
            setAuction(au[0]);
            setAuctionType('catagory')
        }
        if (type === 'city') {
            const au = auctionsWithName.filter(auction => auction._id == id);
            setAuction(au[0]);
            setAuctionType('city')
        }


    }, id);
    function timer(end) {
        let date;
        date = new Date(end.toString()).getTime();
        const now = new Date().getTime();
        const d = date - now;
        return d;
    }
    const [open_bid_dialog, setOpen_bid_dialog] = React.useState(false);
    return (
        <div className="search-detail">
            <div class="big">
                <article class="recipe">
                    <div class="pizza-box">
                        <img src={auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city'
                            ? `http://localhost:5000/users/${auction.profileImage}` :
                            auction.images ? `http://localhost:5000/auctions/${auction.images[0]}` : ''}
                            width="1500" height="100%" alt="" />
                    </div>
                    <div class="recipe-content">
                        <p class="recipe-tags">
                            <span class="recipe-tag">
                                {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                    '' :
                                    date ? <Timer
                                        initialTime={
                                            async () => {
                                                const date = await new Date(auction.deadline.toString()).getTime();
                                                const now = new Date().getTime();
                                                return date - now;
                                            }
                                        }
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
                                    </Timer> : ''
                                }
                            </span>
                            <span class="recipe-tag">
                                {auction.status === "ended"
                                    ? <StyledBadge badgeContent="ended" color="secondary">
                                    </StyledBadge>
                                    : <StyledBadge badgeContent="pending" color="primary">
                                    </StyledBadge>}
                            </span>
                        </p>

                        <h1 class="recipe-title"><a href="#">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                '' : auction.auctionName
                            }
                        </a></h1>

                        <p class="recipe-metadata">
                            <span class="recipe-rating">★★★★<span>☆</span></span>
                            <span class="recipe-votes">
                                ({auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                    ''
                                    : auction.proposals ? auction.proposals.length : ''
                                })
                            </span>
                        </p>

                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : auction.briefDescription
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'aproval :' + auction.approval
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Bid fee :' + auction.bidFee
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Minimum amout to bid : ' + auction.minAmount
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Min CPO : ' + auction.minCPO
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Auction type : ' + auction.auctionType
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Auction Category : ' + auction.auctionCategory
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'Further information : ' + auction.extendedDescription
                            }
                        </p>
                        <p class="recipe-desc">
                            {auctiontype === 'first_name' || auctiontype === 'last_name' || auctiontype === 'city' ?
                                ''
                                : 'condition : ' + auction.condition
                            }
                        </p>

                        <button
                            onClick={
                                () => {
                                    setOpen_bid_dialog(!open_bid_dialog);
                                }
                            }
                            class="recipe-save" type="button">
                            <svg xmlns="#" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" /></svg>
                            Bid
                        </button>

                    </div>
                </article>
            </div>

            <div class="small">
                <article class="recipe">
                    <div style={{ width: "90vh", height: "70vh" }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <Marker
                                lat={defaultLocation.lat}
                                lng={defaultLocation.lng}
                                text="auction location"
                            />
                        </GoogleMapReact>
                    </div>
                </article>
            </div>
            <BidAuctionForm open={open_bid_dialog} data={auction} setOpen={setOpen_bid_dialog} />
        </div>
    )
}
