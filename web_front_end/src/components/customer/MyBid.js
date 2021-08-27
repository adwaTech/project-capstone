import React from 'react';
import './mybid.css';
import moment from 'moment';
import {
    GetAuctionAuctionAction,
} from '../../redux-state-managment/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import HorzMore from '@material-ui/icons/MoreHoriz';
import DetailDialog from '../catagroy_slider/Detail';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default function MyBid() {

    const token = useSelector((state) => state.AccountReducer.token);
    const myauction = useSelector((state) => state.getBidReducer.getbid_auctions);
    


    const dispatch = useDispatch();

    function RenderBadge(color,letter) {
        return (
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={letter}  color={color}>
                    
                </StyledBadge>
            </IconButton>
        )
    }
    return (
        <div className="bidTable">
            <div className="table">
                <div className="table-cell"></div>
                <div className="table-cell plattform">
                    <h3>Status</h3>
                </div>
                <div className="table-cell"></div>

                {
                    myauction
                        ? myauction.map((auction, index) => (
                            <>
                                <div className="table-cell cell-feature">{auction.auctionId.auctionName}</div>
                                <div className="table-cell">
                                    {
                                        auction.status === "pending"
                                            ?RenderBadge("secondary","pending")
                                            :null
                                    }
                                    {
                                        auction.status==="won"
                                            ? RenderBadge("primary","won")
                                            :null
                                    }
                                    {
                                        auction.status==="lost"
                                        ? RenderBadge("error","lost")
                                        :null
                                    }
                                    {
                                        auction.status==="waitingresult"
                                        ? RenderBadge("deult","waitingresult")
                                        :null
                                        
                                    }
                                </div>
                                <div className="table-cell"><MoreHoriz /></div>
                            </>
                        ))
                        : null
                }
            </div>
        </div>
    );
}
