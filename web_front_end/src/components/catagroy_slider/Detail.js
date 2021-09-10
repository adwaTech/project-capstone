import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Dialog, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BidAuctionForm from '../auction_dialog/BidAuctionForm';
import {BACKENDURL} from '../../redux-state-managment/Constants';
import SetWinner from '../customer/SetWinnder'

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
    height: 100,

  },
  controls: {
    marginTop: "10px"
  }
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

export default function DetailDialog(props) {
  const classes = useStyles();
  const [open_bid_dialog, setOpen_bid_dialog] = React.useState(false);
  const [winnerDialog,setWinnerDialog] = React.useState(false);
  return (
    <div>
      <SetWinner open={winnerDialog} setOpen={setWinnerDialog} data={props.data}/>
      <Dialog open={props.open}>
        <DialogTitle onClose={() => {
          if(props.map){
            props.setOpen({open:false})
          }
          else{
            props.setOpen(!props.open)
          }
          
        }}>
          Auction Detail
        </DialogTitle>
        <DialogContent dividers>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div >
                  <h5>Name:</h5> <Typography variant="subtitle2">{props.data?props.data.auctionName:null}</Typography>
                </div>
                <div>
                  <h5>Description:</h5> <Typography variant="subtitle2">{props.data?props.data.briefDescription:null}</Typography>
                </div>
                <div >
                  <h5>Bid Fee:</h5> <Typography variant="subtitle2">{props.data?props.data.bidFee:null}</Typography>
                </div>
                <div>
                  <h5>Min Amount:</h5> <Typography variant="subtitle2">{props.data?props.data.minAmount:null}</Typography>
                </div>
                <div >
                  <h5>Min CPO:</h5> <Typography variant="subtitle2">{props.data?props.data.minCpo:null}</Typography>
                </div>
                <div >
                  <h5>Owner:</h5> <Typography variant="subtitle2">{props.data.owner?props.data.owner.firstName:null}&nbsp; {props.data.owner?props.data.owner.lastName:null}</Typography>
                </div>
                <div >
                  <h5>Type:</h5> <Typography variant="subtitle2">
                    {props.data?props.data.auctionType:null}
                  </Typography>
                </div>
                <div>
                  <h5>Category:</h5> {props.data?props.data.auctionCategory:null}
                </div>
              </CardContent>
            </div>
            <CardContent>
              <div >
                <h5>Extended Description:</h5><Typography variant="subtitle2"> {props.data?props.data.extendedDescription:null}</Typography>
              </div>
              <div>
                <h5>Start Date:</h5><Typography variant="subtitle2"> {moment(props.data?props.data.postedOn:Date.now()).format()}</Typography>
              </div>
              <div>
                <h5>Dedline Date:</h5><Typography variant="subtitle2"> {moment(props.data?props.data.deadline:Date.now()).format()}</Typography>
              </div>
              <div >
                <h5>Condition:</h5> <Typography variant="subtitle2">{props.data?props.data.condition:null}</Typography>
              </div>
              <div >
                <h5>Number of Bids:</h5> <Typography variant="subtitle2">{props.data?(props.data.proposals ? props.data.proposals.length : 0):null}</Typography>
              </div>
              <Typography  >
                <h5>Approval:</h5> <Typography variant="subtitle2">{props.data?toString(props.data.approval):null}</Typography>
              </Typography>
              <div >
                <h5>Status:</h5> <Typography variant="subtitle2">{props.data?props.data.status:null}</Typography>
              </div>

            </CardContent>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                className={classes.cover}
                src={`${BACKENDURL}/auctions/${props.data.images?props.data.images[0]:null}`}
                alt="Product images"
              />
              {props.detail?
              <div className={classes.controls}>
              <Button
                onClick={
                  () => {
                    setWinnerDialog(true);
                    props.setOpen(false)
                  }
                }
                fullWidth variant="contained" color="primary">Set Winner</Button>
            </div>
              :
              <div className={classes.controls}>
                <Button
                  onClick={
                    () => {
                      setOpen_bid_dialog(true);
                      props.setOpen(false)
                    }
                  }
                  fullWidth variant="contained" color="primary">Bid</Button>
              </div>}
            </div>
          </Card>
        </DialogContent>

      </Dialog>
      <BidAuctionForm open={open_bid_dialog} data={props.data} setOpen={setOpen_bid_dialog} />
    </div>
  )
}

