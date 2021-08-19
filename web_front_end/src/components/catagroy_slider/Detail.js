import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
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
  console.log(props);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Dialog open={props.open}>
      <DialogTitle onClose={() => props.setOpen(!props.open)}>
        Auction Detail
      </DialogTitle>
      <DialogContent dividers>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <div >
                <h5>Name:</h5> <Typography variant="subtitle2">{props.data.auctionName}</Typography>
              </div>
              <div>
                <h5>Description:</h5> <Typography variant="subtitle2">{props.data.briefDescription}</Typography>
              </div>
              <div >
                <h5>Bid Fee:</h5> <Typography variant="subtitle2">{props.data.bidFee}</Typography>
              </div>
              <div>
                <h5>Min Amount:</h5> <Typography variant="subtitle2">{props.data.minAmount}</Typography>
              </div>
              <div >
                <h5>Min CPO:</h5> <Typography variant="subtitle2">{props.data.minCPO}</Typography>
              </div>
              <div >
                <h5>Owner:</h5> <Typography variant="subtitle2">{props.data.owner}</Typography>
              </div>
              <div >
                <h5>Type:</h5> <Typography variant="subtitle2">
                  {props.data.auctionType}
                </Typography>
              </div>
              <div>
                <h5>Category:</h5> {props.data.auctionCategory}
              </div>
            </CardContent>
          </div>
          <CardContent>
            <div >
              <h5>Extended Description:</h5><Typography variant="subtitle2"> {props.data.extendedDescription}</Typography>
            </div>
            <div>
              <h5>Start Date:</h5><Typography variant="subtitle2"> {moment(props.data.postedOn).format()}</Typography>
            </div>
            <div>
              <h5>Dedline Date:</h5><Typography variant="subtitle2"> {moment(props.data.deadline).format()}</Typography>
            </div>
            <div >
              <h5>Condition:</h5> <Typography variant="subtitle2">{props.data.condition}</Typography>
            </div>
            <div >
              {/* <h5>Number of Bids:</h5> <Typography variant="subtitle2">{props.data.proposals.length}</Typography> */}
            </div>
            <Typography  >
              <h5>Approval:</h5> <Typography variant="subtitle2">{props.data.approval}</Typography>
            </Typography>
            <div >
              <h5>Status:</h5> <Typography variant="subtitle2">{props.data.status}</Typography>
            </div>

          </CardContent>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              className={classes.cover}
              src={`http://localhost:5000/${props.data.images}`}
              alt="Product images"
            />
            <div className={classes.controls}>
              <Button fullWidth variant="contained" color="primary">Bid</Button>
            </div>
          </div>
        </Card>
      </DialogContent>

    </Dialog>
  )
}
