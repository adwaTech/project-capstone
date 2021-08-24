import React from 'react';
import './mybid.css';
import moment from 'moment';
import {
    AuctionerAuctionAction,
} from '../../redux-state-managment/Actions';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import HorzMore from '@material-ui/icons/MoreHoriz';
import DetailDialog from '../catagroy_slider/Detail';

export default function MyBid() {
    return (
        <div className="bidTable">
            <div className="table">
                <div className="table-cell"></div>
                <div className="table-cell plattform">
                    <h3>Wins</h3>
                    {/* <a href="" className="btn">Wins</a> */}
                </div>
                <div className="table-cell enterprise">
                    <h3>Loses</h3>
                    {/* <a href="" className="btn">Loses</a> */}
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
