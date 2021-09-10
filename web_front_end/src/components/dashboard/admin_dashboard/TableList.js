import React,{useState} from "react";
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
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog'
import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";

import {
  Card,
  CardHeader,
  CardBody
} from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress } from "@material-ui/core";
import {

  ApproveAuctionAction,
  AllAuctionAction,
  DeleteAuctionAction,
  DeleteAuctionCleanUpAction

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
  const [num, setNum] = React.useState(1);
  const [filtered,setFiltered]=useState(null)
  React.useEffect(() => {
    // dispatch(AllAuctionAction());
    if (num === 1) {
      dispatch(AllAuctionAction());
      setNum(2);
    }
  }, [allAuction])

  const delete_auction_status = useSelector((state) => state.DeletAuctionReducer.delete_auction_status);
  const delete_auction_error = useSelector((state) => state.DeletAuctionReducer.delete_auction_error);

  const [progress, setProgress] = React.useState(false);
  React.useEffect(() => {
    if (delete_auction_error) {
      setProgress(false);
    }
    if (delete_auction_status) {
      setProgress(false);
    }
    if (num == 1) {
      dispatch(AllAuctionAction(token))
    }
  }, [delete_auction_error, delete_auction_status])
  const handleSearchChange=(searchText)=>{
    if (searchText !== null) {
      searchText=searchText.toLowerCase();
      const filteredItems = allAuction.filter((item) =>
      (
        
          item.firstName.toLowerCase().includes(searchText)||
          item.lastName.toLowerCase().includes(searchText) ||
          item.city.toLowerCase().includes(searchText) ||
          item.sex.toLowerCase().includes(searchText) ||
          item.phone.toLowerCase().includes(searchText)||
          item.email.toLowerCase().includes(searchText) 
      ));
      console.log('this are the processTypes',filteredItems)
      setFiltered(filteredItems);
   }}
  const filteredList = () => (filtered !== null ? filtered : allAuction);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ });
  const [openDEl,setOpenDel]=React.useState(false);
  const [auctionId,setAuctionId]=React.useState('')
  return (
    <div>
      <Detail open={open} setOpen={setOpen} data={data} />
      <GridContainer>
        {/* {RenderTable()} */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <div>
                 <h4 className={classes.cardTitleWhite}>Aution Table</h4>
                  <p className={classes.cardCategoryWhite}>
                    Approve Auction
                  </p>
             </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:'20px'}}>
                  <Input type='text' style={{color:'white'}} onChange={(e)=>handleSearchChange(e.target.value)}></Input>
                  <SearchIcon/>
              </div>
            </CardHeader>
            
            <CardBody>
              {allAuction ? <Table
                tableHeaderColor="infoy"
                tableHead={["Auction Name", "auctionCategory",
                  "bid Fee", "condition", "owner", "minAmount", "", "Approve", ""]}
                tableData=
                {filteredList().filter(auction => auction.approval === false).map(auction => [
                  auction.auctionName, auction.auctionCategory,
                  auction.bidFee, auction.condition,
                  auction.owner ? auction.owner.firstName : "", auction.minAmount,
                  <IconButton
                    onClick={async () => {
                      await setData(auction);
                      setOpen(true);
                    }}
                  >
                    <HorzMore />
                  </IconButton>,
                  <IconButton
                    onClick={async () => {
                      await dispatch(ApproveAuctionAction(auction._id, token));
                      dispatch(AllAuctionAction());
                    }}
                  >
                    <Approve color="primary" />
                  </IconButton>,
                  <IconButton onClick={() => {
                    setAuctionId(auction._id )
                    setOpenDel(true)
                  }}>
                    <DeleteAuction color="secondary" />
                  </IconButton>
                ])}
              /> : null}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Dialog open={openDEl}>
        <DialogTitle>
          <IconButton onClick={()=>setOpenDel(false)}>x</IconButton>
        </DialogTitle>
        {
              delete_auction_error
                ? <Alert severity="error">{delete_auction_error}</Alert>
                : null
            }
            {
              delete_auction_status === 200
                ? <Alert severity="success">Auction is successfuly deleted</Alert>
                : null
            }
        <Alert severity='warning'>are you sure? <Button 
        variant="contained"
        onClick={async ()=>{
          setProgress(true);
                    await dispatch(DeleteAuctionAction({ auctionId: auctionId }, token));
                    setTimeout(function () {
                      dispatch(DeleteAuctionCleanUpAction());
                      setOpenDel(false);
                    }, 6000);
                    dispatch(AllAuctionAction());
        }}
        color="secondary">{progress?<span><CircularProgress color="primary"/>loading</span>:"Delete"}</Button></Alert>
      </Dialog>
    
    </div>
  );
}
