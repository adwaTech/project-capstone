import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from '../header/Header';
import House from '../Auctions/AuctionCatagories/House';
import Car from '../Auctions/AuctionCatagories/Car';
import Governments from '../Auctions/AuctionCatagories/Governments';
import Land from '../Auctions/AuctionCatagories/Land'
import {
    Route,
} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"#eee"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    marginTop:"300px",
    display:"block",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
      marginTop:"120px",
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    marginTop:"180px",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [type,setType]=React.useState('House');
  function RenderCompoenent(){
      switch(type){
        case 'House':
            return <House/>;
        case "Car":
            return <Car/>;
        case "Government":
            return <Governments/>;
        case "Land":
            return <Land/>;
          
      }
  }
  return (
    <div className={classes.root}>
        <div  >
        <Header/>
      </div>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['House', 'Car', 'Land', 'Services','Government', 'Private', 'Bank', 'Mobile Phone',"Letest","Last Week"].map((text, index) => (
            <ListItem button key={text}
                onClick={()=>{
                    setType(text);
                }}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Posts', 'Subscribe', 'Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {RenderCompoenent()}
      </main>
    </div>
  );
}
