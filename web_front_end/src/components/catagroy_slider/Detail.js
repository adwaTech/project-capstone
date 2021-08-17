import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useSelector,useDispatch} from 'react-redux';
import { Dialog,DialogContent  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height:100,
    
  },
}));
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

export default function DetailDialog(props){
    const classes = useStyles();
    const theme = useTheme();
    const allAuction=useSelector((state)=>state.AuctionsReducer.allAuction);
    return(
        <Dialog  aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={()=>props.setOpen(!props.open)}>
            Auction Detail
        </DialogTitle>
        <DialogContent dividers>
            <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="p" variant="p">
                        Name: {props.data.auctionName}
                    </Typography>
                    <Typography  color="textSecondary">
                        Description: {props.data.briefDescription}
                    </Typography>
                    <Typography component="p" variant="p">
                        Bid Fee: {props.data.bidFee}
                    </Typography>
                    <Typography  color="textSecondary">
                        Min Amount: {props.data.minAmount}
                    </Typography>
                    <Typography component="p" variant="p">
                        Min CPO: {props.data.minCPO}
                    </Typography>
                    <Typography  color="textSecondary">
                        Owner: {props.data.owner}
                    </Typography>
                    <Typography component="p" variant="p">
                        Type: {props.data.auctionType}
                    </Typography>
                    <Typography  color="textSecondary">
                        Category: {props.data.auctionCategory}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button variant="contained" color="primary">Bid</Button>
                </div>
            </div>
            <CardContent>
                    <Typography component="p" variant="p">
                        Extended Description: {props.data.extendedDescription}
                    </Typography>
                    <Typography  color="textSecondary">
                        Start Date: {moment(props.data.postedOn).format()}
                    </Typography>
                    <Typography  color="textSecondary">
                        Dedline Date: {moment(props.data.deadline).format()}
                    </Typography>
                    <Typography component="p" variant="p">
                        Condition: {props.data.condition}
                    </Typography>
                    <Typography component="p" variant="p">
                        Number of Bids: {props.data.proposals.length}
                    </Typography>
                    <Typography  color="textSecondary">
                        Approval: {props.data.approval}
                    </Typography>
                    <Typography component="p" variant="p">
                        Status: {props.data.status}
                    </Typography>
                    
            </CardContent>
            <img
                className={classes.cover}
                src={`http://localhost:5000/${props.data.images}`}
                alt="Product images"
            />
            </Card>
        </DialogContent>
      </Dialog>
    )
}

