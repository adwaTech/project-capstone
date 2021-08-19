import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, TextField, Grid, Slide } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import {BidAuctionAction,
} from '../../redux-state-managment/Actions';




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
const useStyles = makeStyles({
    addCartBtn: {
        borderRadius: "20px"
    },
    shopNow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: "30px"
    },
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
    },
    dialogbtn1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "10px",
        marginBottom: "10px"
    },
    dialogbtn2: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
})
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function BidAuctionForm(props) {


    // for bid 
    const bidstatus = useSelector((state) => state.bidAuctionReducer.bidstatus);
    const biderror = useSelector((state) => state.bidAuctionReducer.biderror);
    const bidstatusText = useSelector((state) => state.bidAuctionReducer.bidstatusText);
    const bid = useSelector((state) => state.bidAuctionReducer.bid);

    const dispatch=useDispatch();
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
    const classes = useStyles();
    const [state, setState] = React.useState({
        proposalType: "",
        description: "",
        amount: "",
        cpo: "",
        ownerId: "",
        auctionId: "",
        proposalDocument: '',
    })
    const token = useSelector((state) => state.AccountReducer.token);
    return (
        <Dialog
            open={props.open}
        >
            <DialogTitle onClose={() => props.setOpen(!props.open)}>
                Bid For An Auction
            </DialogTitle>
            {
                biderror
                    ? <Alert severity="error">status :{bidstatus} <br />statusText:{bidstatusText} <br /> error:{biderror}</Alert>
                    : null
            }
            {
                bidstatus === 200
                    ? <Alert severity="success">status :{bidstatus} : your request to bid is successfuly submited</Alert>
                    : null
            }
            <DialogContent >
                <Grid spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="description"
                            value={state.description}
                            multiline
                            fullWidth
                            autoComplete="description"
                            onChange={(e) => {
                                setState({ ...state, description: e.target.value })
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            type="number"
                            id="amount"
                            name="amount"
                            label="amount"
                            multiline
                            fullWidth
                            autoComplete="amount"
                            value={state.amount}
                            onChange={(e) => {
                                setState({ ...state, amount: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            type="number"
                            id="cpo"
                            name="cpo"
                            label="cpo"
                            multiline
                            fullWidth
                            autoComplete="cpo"
                            value={state.cpo}
                            onChange={(e) => {
                                setState({ ...state, cpo: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.dialogbtn1} >
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            multiple
                            id="raised-button-file"
                            onChange={(e) => {
                                setState({ ...state, proposalDocument: e.target.files[0] });
                            }}
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="outlined" component="span" className={classes.button}>
                                Upload Doc if any
                            </Button>
                        </label>
                        <label>{state.proposalDocument.name}</label>
                    </Grid>

                    <Grid className={classes.dialogbtn2}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={async () => {
                                const formData = new FormData();
                                formData.append('amount', state.amount);
                                formData.append('auctionId', props.data._id);
                                formData.append('cpo', state.cpo);
                                formData.append('description', state.description);
                                formData.append('ownerId', props.data.owner);
                                if(state.proposalDocument){
                                    formData.append('proposalDocument', state.proposalDocument);
                                }
                                formData.append('proposalType', props.data.auctionType);
                                await dispatch(BidAuctionAction(formData, token));
                            }}
                        >Submite Bid</Button>
                    </Grid>
                </Grid>
            </DialogContent >
        </Dialog>

    )
}
