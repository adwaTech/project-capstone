import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { BACKENDURL } from '../../redux-state-managment/Constants';
import SetWinner from '../customer/SetWinnder';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import {
  BidAuctionAction,
  BidCleanUpAction,
  IdAuctionAction
} from '../../redux-state-managment/Actions';


const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: "40px",
      width:"30vw",
      height:"300px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "fixed"
    },
    paper2: {
      width: "100vw",
      // maxWidth: "500px",
      height:"60vh",
      overflow:" auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "500px",
      height: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

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

  const dispatch = useDispatch();
  const classes = useStyles();
  const classes1 = useStyles1();
  const [open_bid_dialog, setOpen_bid_dialog] = React.useState(false);
  const [winnerDialog, setWinnerDialog] = React.useState(false);
  const user = useSelector((state) => state.AccountReducer.user);
  const token = useSelector((state) => state.AccountReducer.token);

  const auctionbyid = useSelector((state) => state.AuctionsReducer.idAuction);

  const [state, setState] = React.useState({
    proposalType: "live",
    amount: "",
    cpo: 0,
    ownerId: "",
    auctionId: "",
  });
  const [num,setNum]=React.useState(5)
  React.useEffect(()=>{
    // dispatch(IdAuctionAction(props.data._id));
      if(num===1){
        dispatch(IdAuctionAction(props.data._id));
        setNum(num++)
      }
      if(props.data?props.open:null){
        setTimeout(() => {
          dispatch(IdAuctionAction(props.data._id));
        }, 1000);

      }
  },[auctionbyid,num])
  return (
    <div>
      <SetWinner open={winnerDialog} setOpen={setWinnerDialog} data={props.data} />
      <Dialog
        open={props.open}
        maxWidth={props.data ? props.data.auctionType === "live" ? 'md' : 'sm' : 'sm'}
      >
        <DialogTitle onClose={() => {
          if (props.map) {
            props.setOpen(false)
          }
          else {
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
                  <h5>Name:</h5> <Typography variant="subtitle2">{props.data ? props.data.auctionName : null}</Typography>
                </div>
                <div>
                  <h5>Description:</h5> <Typography variant="subtitle2">{props.data ? props.data.briefDescription : null}</Typography>
                </div>
                <div >
                  <h5>Bid Fee:</h5> <Typography variant="subtitle2">{props.data ? props.data.bidFee : null}</Typography>
                </div>
                <div>
                  <h5>Min Amount:</h5> <Typography variant="subtitle2">{props.data ? props.data.minAmount : null}</Typography>
                </div>
                <div >
                  <h5>Min CPO:</h5> <Typography variant="subtitle2">{props.data ? props.data.minCpo : null}</Typography>
                </div>
                <div >
                  <h5>Owner:</h5> <Typography variant="subtitle2">{props.data.owner ? props.data.owner.firstName : null}&nbsp; {props.data.owner ? props.data.owner.lastName : null}</Typography>
                </div>
                <div >
                  <h5>Type:</h5> <Typography variant="subtitle2">
                    {props.data ? props.data.auctionType : null}
                  </Typography>
                </div>
                <div>
                  <h5>Category:</h5> {props.data ? props.data.auctionCategory : null}
                </div>
              </CardContent>
            </div>
            <CardContent>
              <div >
                <h5>Extended Description:</h5><Typography variant="subtitle2"> {props.data ? props.data.extendedDescription : null}</Typography>
              </div>
              <div>
                <h5>Start Date:</h5><Typography variant="subtitle2"> {moment(props.data ? props.data.postedOn : Date.now()).format()}</Typography>
              </div>
              <div>
                <h5>Dedline Date:</h5><Typography variant="subtitle2"> {moment(props.data ? props.data.deadline : Date.now()).format()}</Typography>
              </div>
              <div >
                <h5>Condition:</h5> <Typography variant="subtitle2">{props.data ? props.data.condition : null}</Typography>
              </div>
                <div >
                <h5>Number of Bids:</h5> 
                {props.data?
                props.data.auctionType==='live'?<Typography variant="subtitle2">{
                  auctionbyid
                  ?auctionbyid.proposals
                  ?auctionbyid.proposals.length
                  ?auctionbyid.proposals.length
                  :null
                  :null
                  :null
                }
                </Typography>
                :<Typography variant="subtitle2">{
                  
                  props.data
                  ?props.data.proposals
                  ?props.data.proposals.length
                  ?props.data.proposals.length
                  :null
                  :null
                  :null
                }
                </Typography>
                :null
              }
              </div>
              
              <Typography  >
                <h5>Approval:</h5> <Typography variant="subtitle2">{props.data ? toString(props.data.approval) : null}</Typography>
              </Typography>
              <div >
                <h5>Status:</h5> <Typography variant="subtitle2">{props.data ? props.data.status : null}</Typography>
              </div>

            </CardContent>
            <CardContent>
              {props.data
                ? props.data.auctionType === "live"
                  ? props.data.proposals
                    ? props.data.proposals.length > 0
                      ? props.data.proposals.filter(m => {
                        if (m.ownerId)
                          return m.ownerId._id === user._id
                        else {
                          return false
                        }
                      }).length > 0
                        ?
                        <div className={classes1.container}>
                          <Paper className={classes1.paper} zDepth={2}>
                            <Paper id="style-1" className={classes1.messagesBody}>
                              {
                                props.data.proposals.length > 0
                                  ?auctionbyid?auctionbyid.proposals
                                  ?auctionbyid.proposals.length
                                  ? auctionbyid.proposals.map((p, i) => (
                                    i % 2 == 0 ?
                                      p.ownerId?<MessageLeft
                                      message={`${p.amount} birr`}
                                      timestamp={`${moment(p.submittedOn).format()}`}
                                      photoURL={`${BACKENDURL}/users/${p.ownerId?p.ownerId.profileImage:null}`}
                                      displayName={`${p.ownerId.firstName?p.ownerId.firstName:null + " " + p.ownerId.lastName?p.ownerId.lastName:null}`}
                                      avatarDisp={true}
                                      />
                                      : <MessageRight
                                      message={`${p.amount} birr`}
                                      timestamp={`${moment(p.submittedOn).format()}`}
                                      photoURL={`${BACKENDURL}/users/${p.ownerId?p.ownerId.profileImage:null}`}
                                      // displayName={`${p.ownerId.firstName?p.ownerId.firstName:null + " " + p.ownerId.lastName?p.ownerId.lastName:null}`}
                                      avatarDisp={true}
                                      />:null
                                  ))
                                  :null:null:null: <div>no bid yet</div>
                              }
                            </Paper>
                            <TextInput
                              onClick={async () => {
                                if (state.amount) {
                                  const formData = new FormData();
                                  formData.append('amount', state.amount);
                                  formData.append('auctionId', props.data._id);
                                  formData.append('cpo', 0);
                                  formData.append('ownerId', props.data.owner);
                                  formData.append('proposalType', 'live');
                                  await dispatch(BidAuctionAction(formData, token));
                                  dispatch(IdAuctionAction(props.data._id));
                                  setTimeout(function () {
                                    dispatch(BidCleanUpAction());
                                    setState({
                                      proposalType: "live",
                                      amount: "",
                                      cpo: 0,
                                      ownerId: "",
                                      auctionId: "",
                                    });
                                  }, 1000);
                                }
                              }}
                              value={state.amount}
                              onChange={(e) => {
                                setState({
                                  ...state,
                                  amount: e.target.value,
                                  ownerId: props.data ? props.data.owner : null,
                                  auctionId: props.data ? props.data._id : null,
                                  cpo: 0
                                })

                              }} />
                          </Paper>
                        </div>
                        : null : null : null
                  : null
                : null}

            </CardContent>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                className={classes.cover}
                src={`${BACKENDURL}/auctions/${props.data.images ? props.data.images[0] : null}`}
                alt="Product images"
              />
              {props.detail
                ? <div className={classes.controls}>
                  <Button
                    onClick={
                      () => {
                        setWinnerDialog(true);
                        props.setOpen(false)
                      }
                    }
                    fullWidth variant="contained" color="primary">Set Winner</Button>
                </div>
                : props.admin
                  ? null
                  : props.map === "map" && props.data.auctionType !== "live"
                    ? <div className={classes.controls}>
                      <Button
                        onClick={
                          () => {
                            setOpen_bid_dialog(true);
                            props.setOpen(false)
                          }
                        }
                        fullWidth variant="contained" color="primary">Bid</Button>
                    </div>
                    : null}
              {props.detail ?
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
                user ? user.userType === "admin"
                  ? null
                  : props.data.auctionType !== "live" ?
                    <div className={classes.controls}>
                      <Button
                        onClick={
                          () => {
                            setOpen_bid_dialog(true);
                            props.setOpen(false)
                          }
                        }
                        fullWidth variant="contained" color="primary">Bid</Button>
                    </div>
                    : null : null}
              {
                props.data
                  ? props.data.auctionType === 'live'
                    ? props.data.proposals
                      ? props.data.proposals.length >= 0
                        ? props.data.proposals.filter(m => {
                          if (m.ownerId)
                            return m.ownerId._id === user._id
                          else {
                            return false
                          }
                        }).length === 0
                          ?
                          <div className={classes.controls}>
                            <Button
                              onClick={
                                () => {
                                  setOpen_bid_dialog(true);
                                  props.setOpen(false)
                                }
                              }
                              fullWidth variant="contained" color="primary">Bid</Button>
                          </div>
                          : null : null : null : null : null
              }
            </div>
            

          </Card>

        </DialogContent>

      </Dialog>

      <BidAuctionForm open={open_bid_dialog} data={props.data} setOpen={setOpen_bid_dialog} />
    </div>
  )
}

