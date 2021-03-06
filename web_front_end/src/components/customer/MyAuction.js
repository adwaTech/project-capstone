import React from 'react';
import './myauction.css';
import moment from 'moment';
// import {
//     AuctionerAuctionAction,
// } from '../../redux-state-managment/Actions';
import {  useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import HorzMore from '@material-ui/icons/MoreHoriz';
import DetailDialog from '../catagroy_slider/Detail';
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search'

const StyledBadge = withStyles(theme => ({
    badge: {
        top: '50%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
}))(Badge);


export default function MyAuction() {

    const AuctioneerAuction = useSelector((state) => state.AuctionsReducer.AuctioneerAuction);
    // const user = useSelector((state) => state.AccountReducer.user);
    const [open,setOpen]=React.useState(false);
    const [data,setData]=React.useState(null)
    const [filtered,setFiltered]=React.useState(null)
    // const [num, setNum] = React.useState(1);
    const handleSearchChange=(searchText)=>{
        if (searchText !== null) {
          searchText=searchText.toLowerCase();
          const filteredItems = AuctioneerAuction.filter((item) =>
          (
            
              item.auctionName.toLowerCase().includes(searchText)||
              item.auctionType.toLowerCase().includes(searchText) ||
              item.auctionCategory.toLowerCase().includes(searchText) 
          ));
          console.log('this are the processTypes',filteredItems)
          setFiltered(filteredItems);
       }}
      const filteredList = () => (filtered !== null ? filtered : AuctioneerAuction);

    return (
        <div className="auctionTable">
            {data?<DetailDialog open={open} setOpen={setOpen} data={data?data:null} detail={true}/>:null}
            {console.log(data)}
            <section>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <h1 style={{margin:"10px"}}>My Auction</h1>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginRight:'20px'}}>
                        <Input type='text' style={{color:'black'}} onChange={(e)=>handleSearchChange(e.target.value)}></Input>
                        <SearchIcon/>
                    </div>
                </div>
                <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>Auction Name</th>
                                <th>Min Amount</th>
                                <th>Auction Type</th>
                                <th>Auction Category</th>
                                <th>Deadline</th>
                                <th>Condition</th>
                                <th>proposals</th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            {
                                AuctioneerAuction.length>0
                                ?filteredList().map((auction, index) => (
                                    <tr key={index}>
                                        <td>{auction.auctionName}</td>
                                        <td>{auction.minAmount}</td>
                                        <td>{auction.auctionType}</td>
                                        <td>{auction.auctionCategory}</td>
                                        <td>{moment(auction.deadline).format()}</td>
                                        <td>{auction.condition}</td>
                                        <td>
                                            <StyledBadge badgeContent={auction.proposals.length===0?"0":auction.proposals.length} color="primary">
                                            </StyledBadge>
                                        </td>
                                        <td
                                        onClick={()=>{
                                            setData(auction)
                                            setOpen(true);
                                        }}
                                        ><IconButton><HorzMore/></IconButton></td>
                                    </tr>
                                ))
                                :<tr>you have no auction yet</tr>
                            }
                            
                        </tbody>
                    </table>
                </div>
            </section>
            <div className="made-with-love">
                M3K Auction
                <i>????????????</i> {moment(Date.now()).format()}<i>????????????</i>
            </div>
        </div>
    );
}
