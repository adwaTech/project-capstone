import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {TextField} from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Typography} from '@material-ui/core'
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
const styles = (theme) => ({
  root: {
      margin: 0,
      padding: theme.spacing(2),
  },
  closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
  },
});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          ) : null}
      </MuiDialogTitle>
  );
});

const emails = ['meseretkifle2@gmail.com', 'user02@gmail.com'];
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

