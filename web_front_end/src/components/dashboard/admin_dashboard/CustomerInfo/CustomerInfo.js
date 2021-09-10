import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../main_dashbaord/Grid/GridItem.js";
import GridContainer from "../main_dashbaord/Grid/GridContainer.js";
import {useSelector,useDispatch} from 'react-redux';


import Button from "../components/CustomButtons/Button.js";
import {
    CardHeader,
    CardBody,
    Card,
} from '../Cards'
import {
  GetAllAuctionAction,
  GetuserAction
} from '../../../../redux-state-managment/Actions';

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
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);


export default function 
UpgradeToPro({history}) {
  const dispatch=useDispatch();
  const allauction=useSelector(state=> state.AuctionsReducer.overallauction);
  const customers = useSelector((state) => state.getUsersReducer.admin_users);
  const token= useSelector(state=>state.AccountReducer.token)
  React.useEffect(async ()=>{
    await dispatch(GetAllAuctionAction());
    dispatch(GetuserAction(token));
  },[])
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              M3K Auction
            </h4>
            <p className={classes.cardCategoryWhite}>
            Total Auction Info  
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>In Number</th>
                    {/* <th className={classes.center}>In Quality</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Auctions</td>
                    <td className={classes.center}>{allauction.length}{console.log(allauction.length)}</td>
                    {/* <td className={classes.center}>{}</td> */}
                  </tr>
                  <tr>
                    <td>Users</td>
                    <td className={classes.center}>{customers.length}</td>
                    {/* <td className={classes.center}>10</td> */}
                  </tr>
                  <tr>
                    <td>Auctions With Status open</td>
                    <td className={classes.center}>{allauction.filter(a=>a.status==='open').length}</td>
                    {/* <td className={classes.center}>28</td> */}
                  </tr>
                  <tr>
                    <td>Auctions With Status Ended</td>
                    <td className={classes.center}>{allauction.filter(a=>a.status==='ended').length}</td>
                    {/* <td className={classes.center}>28</td> */}
                  
                  </tr>
                  <tr>
                    <td>Auctions With Status waitingresult</td>
                    <td className={classes.center}>{allauction.filter(a=>a.status==='archieved').length}</td>
                    {/* <td className={classes.center}>28</td> */}
                  </tr>
                  
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round color="info"
                      onClick={()=>{
                        history.push("/admin/auction_location");
                      }}
                     
                      >
                        find customer on map
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button
                        round
                        color="info"
                        onClick={()=>{
                          history.push("/admin/customer_location");
                        }}
                       
                      >
                        find auction on map
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
