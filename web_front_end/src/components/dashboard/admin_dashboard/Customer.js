import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import Table from "./main_dashbaord/Table/Table.js";
import HorzMore from '@material-ui/icons/MoreHoriz';
import Detail from '../../catagroy_slider/Detail';
import Approve from '@material-ui/icons/ThumbUp';
import DeleteAuction from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'

import {
  Card,
  CardHeader,
  CardBody
} from './Cards';
import { useDispatch, useSelector } from 'react-redux'
import {

  ApproveAuctionAction,
  AllAuctionAction,
  GetuserAction

} from '../../../redux-state-managment/Actions'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.AccountReducer.user);
  const token = useSelector((state) => state.AccountReducer.token);
  const allAuction = useSelector((state) => state.AuctionsReducer.allAuction);
  const customers = useSelector((state) => state.getUsersReducer.admin_users);
  const [num, setNum] = React.useState(1);

  React.useEffect(() => {
    // dispatch(AllAuctionAction());
    if (num === 1) {
      dispatch(GetuserAction(token));
      setNum(2);
    }
  },[allAuction])
  console.log(customers);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ });
  return (
    <div>
      <GridContainer>
        {/* {RenderTable()} */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Aution Table</h4>
              <p className={classes.cardCategoryWhite}>
                Approve Auction
              </p>
            </CardHeader>
            <CardBody>
              {allAuction ? <Table
                tableHeaderColor="infoy"
                tableHead={["first name", "last name",
                  "city", "latitude", "longitude", "sex", "phone number", "email", "id number","profile Pic"]}
                tableData=
                {allAuction.filter(auction=>auction.approval===false).map(auction => [
                  auction.auctionName, auction.auctionCategory,
                  auction.bidFee, auction.condition,
                  auction.owner ? auction.owner.firstName : "", auction.minAmount,
                  <IconButton
                  onClick={async () => {
                    await setData(auction);
                    setOpen(true);
                  }}
                  >
                    <HorzMore/>
                  </IconButton>,
                  <IconButton
                  onClick={async ()=>{
                    await dispatch(ApproveAuctionAction(auction._id,token));
                    dispatch(AllAuctionAction());
                  }}
                  >
                    <Approve color="primary"/>
                  </IconButton>,
                  <IconButton onClick={()=>{
                    dispatch(AllAuctionAction());
                  }}>
                    <DeleteAuction color="secondary" />
                  </IconButton>
                ])}
              /> : null}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}
