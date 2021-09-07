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
    console.log(props.data);
  const classes = useStyles();
  
  const [selectedValue, setSelectedValue] = React.useState();
  return (
    <Dialog open={props.open}>
    <Button onClick={()=>{
        props.setOpen(false);
    }}>
        <Close/>
    </Button>
    <Button onChange={()=>{

    }}>
        Set Win
    </Button>
    <div>
      <List>
        {props.data?props.data.proposals.map((Array,i) => (
          <div>
          <ListItem button onClick={() => {}} key={i}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                  P
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={Array._id} />
            <GreenRadio
                checked={selectedValue==Array}
                onChange={(event)=>{
                    setSelectedValue(event.target.value);
                }}
                value={Array}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            />
          </ListItem>
          </div>
        )):null}

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

