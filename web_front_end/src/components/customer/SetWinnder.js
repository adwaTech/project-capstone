import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {TextField,Dialog,Radio} from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {BACKENDURL} from '../../redux-state-managment/Constants';
import {
    SetWinnerAuctionAction,
    SetwinnerCleanUpAction
} from '../../redux-state-managment/Actions';
import {useDispatch,useSelector} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import {
  Search,
} from '@material-ui/icons'
import Close from '@material-ui/icons/Close';





const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

export default function SimpleDialog(props) {
  const classes = useStyles();
  
  const [selectedValue, setSelectedValue] = React.useState('');
  const [message,setMessage]=React.useState('');
  const dispatch=useDispatch();

  const token = useSelector((state) => state.AccountReducer.token);
  const winner_error = useSelector((state) => state.SetWinnerReducer.winner_error);
const winner_status = useSelector((state) => state.SetWinnerReducer.winner_status);
const winner = useSelector((state) => state.SetWinnerReducer.winner);
console.log(winner);
  
  return (
    <Dialog 
    open={props.open} 
    fullWidth
    maxWidth="lg"
    >
    <Button color="secondary" variant="contained" onClick={()=>{
        props.setOpen(false);
    }}>
        <Close/>
    </Button>
    <Button color="primary" variant="contained" onClick={()=>{
        if(selectedValue==''){
            setMessage("select on person or company before set the winner")
        }else{
            dispatch(SetWinnerAuctionAction({auctionId:props.data._id,proposalId:selectedValue},token));
        }
        setTimeout(function () {
            dispatch(SetwinnerCleanUpAction());
        }, 5000);
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }}>
        Set Win
    </Button>
    
    <div>
        {
            message?<Alert severity="error">{message}</Alert>:null
        }
        {
                winner_error
                    ? <Alert severity="error">{winner_error}</Alert>
                    : null
            }
            {
                winner_status === 200
                    ? <Alert severity="success">your request to set winner is done</Alert>
                    : null
            }
    
      <List>
        {props.data?props.data.proposals
        ?props.data.proposals.map((Array,i) => (
            <div>
            <ListItem button onClick={() => {}} key={i}>
              <ListItemAvatar>
                <Avatar className={classes.avatar} src={`${BACKENDURL}/users/${Array.ownerId.profileImage}`} alt="">
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={Array.ownerId.firstName +" "+Array.ownerId.lastName} />
              <ListItemText primary={Array.amount} />
              <ListItemText primary={Array.ownerId.city} />
              <ListItemText primary={Array.cpo} />
              <ListItemText primary={Array._id} />
              <GreenRadio
                  checked={selectedValue==Array._id}
                  onChange={(event)=>{
                      setSelectedValue(event.target.value);
                  }}
                  value={Array._id}
                  name="radio-button-demo"
              />
            </ListItem>
            </div>
          )):null
        :null}

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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

