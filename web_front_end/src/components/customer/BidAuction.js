import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {TextField} from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import {
  House,
  Commute,
  Landscape,
  RoomService,
  CameraRear,
  Cached,
  Search,
  Tv
} from '@material-ui/icons'

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
const auctionCategory= ['land', 'house', 'vehicle', 'electronics', 'service', 'rare', 'oldies'];
export default function SimpleDialog(props) {
  const classes = useStyles();
  const array=[
    {comp:Landscape,text:"Land"},
    {comp:House,text:"House"},
    {comp:Commute,text:"Vehicle"},
    {comp:Tv,text:"Electronics"},
    {comp:RoomService,text:"Service"},
    {comp: CameraRear,text:"Rare"},
    {comp:Cached,text:"Oldies"}
  ];

  return (
    <div>
      <List>
        {array.map((Array,i) => (
          <Link to={`/${auctionCategory[i]}`}>
          <ListItem button onClick={() => {}} key={i}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                  <Array.comp />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={Array.text} />
          </ListItem>
          </Link>
        ))}

        <ListItem autoFocus button onClick={() =>{}}>
          <ListItemAvatar>
            <Avatar>
              <Search />
            </Avatar>
          </ListItemAvatar>
          <TextField
          onChange={(e)=>{

          }}
           variant="outlined" fullWidth placeholder="search" label="search"></TextField>
        </ListItem>
      </List>
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

