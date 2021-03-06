import React,{useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "./main_dashbaord/Grid/GridItem.js";
import GridContainer from "./main_dashbaord/Grid/GridContainer.js";
import Table from "./main_dashbaord/Table/Table.js";

import DeleteAuction from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search'
import {
  Card,
  CardHeader,
  CardBody
} from './Cards';
import { useDispatch, useSelector } from 'react-redux'
import {
  DeleteAccountCleanUpAction,
  DeleteCustomerAction,
  GetuserAction

} from '../../../redux-state-managment/Actions';
import Avatar from '@material-ui/core/Avatar';
import {BACKENDURL} from '../../../redux-state-managment/Constants';
import {Link} from 'react-router-dom';
import {
  Button, CircularProgress,

} from '@material-ui/core';
import {
  Edit
} from '@material-ui/icons'
import { Dialog ,DialogTitle} from "@material-ui/core";

import {Alert } from '@material-ui/lab'

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

  const token = useSelector((state) => state.AccountReducer.token);
  const customers = useSelector((state) => state.getUsersReducer.admin_users);
  const delete_status = useSelector((state) => state.DeletAccountReducer.delete_status);
  const delete_error = useSelector((state) => state.DeletAccountReducer.delete_error);

   const [filtered,setFiltered]=useState(null)
  const [num, setNum] = React.useState(1);

  const [progress, setProgress] = React.useState(false);
    React.useEffect(() => {
        if (delete_error) {
            setProgress(false);
        }
        if (delete_status) {
            setProgress(false);
        }
        if(num==1){
          dispatch(GetuserAction(token))
        }
    }, [delete_error, delete_status])
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ });

  const handleSearchChange=(searchText)=>{
    if (searchText !== null) {
      searchText=searchText.toLowerCase();
      const filteredItems = customers.filter((item) =>
      (
        
          item.firstName.toLowerCase().includes(searchText)||
          item.lastName.toLowerCase().includes(searchText) ||
          item.city.toLowerCase().includes(searchText) ||
          item.sex.toLowerCase().includes(searchText) ||
          item.phone.toLowerCase().includes(searchText)||
          item.email.toLowerCase().includes(searchText) 
      ));
      setFiltered(filteredItems);
   }}
   const filteredList = () => (filtered !== null ? filtered : customers);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div>
                  <h4 className={classes.cardTitleWhite}>Customer Table</h4>
                  <p className={classes.cardCategoryWhite}>
                    Manage Customer
                  </p>
              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:'20px'}}>
                  <Input type='text' style={{color:'white'}} onChange={(e)=>handleSearchChange(e.target.value)}></Input>
                  <SearchIcon/>
              </div>
            </CardHeader>
            <CardBody>
              {customers ? <Table
                tableHeaderColor="infoy"
                tableHead={["first name", "last name",
                  "city", "latitude", "longitude", "sex", "phone number", "email", "id number","profile Pic","id image"]}
                tableData=
                {filteredList().map(customer => [
                  customer.firstName, customer.lastName,
                  customer.city, customer.latitude,
                  customer.longitude ,
                  customer.sex,
                  customer.phone,
                  customer.email,
                  customer.idNo,
                  <Avatar src={`${BACKENDURL}/users/${customer.profileImage}`}>

                  </Avatar>,
                  <Avatar src={`${BACKENDURL}/users/${customer.idPhoto}`}>

                  </Avatar>,
                  
                  <Link  to={{
                    pathname: "/admin/profile",
                    state: {customer}
               }}
               >
                    <IconButton
                    >
                      <Edit color="primary"/>
                    </IconButton>
                  </Link>,
                  <IconButton onClick={()=>{
                    setOpen(true);
                    setData(customer)
                  }}>
                    <DeleteAuction color="secondary" />
                  </IconButton>
                ])}
              /> : null}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Dialog open={open}>
        <DialogTitle>
          <IconButton onClick={()=>setOpen(false)}>X</IconButton>
        </DialogTitle>
        {
            delete_error
                ? <Alert severity="error">{delete_error}</Alert>
                : null
        }
        {
            delete_status === 200
                ? <Alert severity="success">user is successfuly deleted</Alert>
                : null
        }
        <Alert severity='warning'>are you sure? <Button 
        variant="contained"
        onClick={async ()=>{
          setProgress(true);
          await dispatch(DeleteCustomerAction({userId: data._id},token));
          setTimeout(function () {
            dispatch(DeleteAccountCleanUpAction());
            setOpen(false);
        }, 6000);
        }}
        color="secondary">{progress?<span><CircularProgress color="primary"/>loading</span>:"Delete"}</Button></Alert>
      </Dialog>
    
    </div>
  );
}
