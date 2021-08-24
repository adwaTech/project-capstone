import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, TextField, Grid, Slide, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import {
    BidAuctionAction,
    BidCleanUpAction
} from '../../redux-state-managment/Actions';
import { FileUploader } from "react-drag-drop-files";



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

const fileTypes = ["jpg", "png", "gif", 'jpeg', 'svg', 'pdf'];

export default function BidAuctionForm(props) {


    // for bid 
    const bidstatus = useSelector((state) => state.bidAuctionReducer.bidstatus);
    const biderror = useSelector((state) => state.bidAuctionReducer.biderror);

    const dispatch = useDispatch();
   
    const classes = useStyles();
    const intialState = {
        proposalType: "",
        description: "",
        amount: "",
        cpo: "",
        ownerId: "",
        auctionId: "",
        proposalDocument: '',
    }
    const [state, setState] = React.useState(intialState)
    const token = useSelector((state) => state.AccountReducer.token);
    const user = useSelector((state) => state.AccountReducer.user);
    const [des, setDes] = React.useState({ message: "", haveError: false });
    const [amount, setAmount] = React.useState({ message: "", haveError: false });
    const [propDoc, setPropDoc] = React.useState({ message: "", haveError: false });
    const [CPO, setCPO] = React.useState({ message: "", haveError: false });
    function validation() {
        if (state.description === '') {
            setDes({ message: "this field is required", haveError: true })
        }
        if (state.description) {
            setDes({ message: "", haveError: false })
        }
        if (state.amount === '') {
            setAmount({ message: "this field is required", haveError: true })
        }
        if (state.amount) {
            setAmount({ message: "", haveError: false })
        }
        if (state.proposalDocument === '') {
            setPropDoc({ message: "this field is required", haveError: true })
        }
        if (state.proposalDocument) {
            setPropDoc({ message: "", haveError: false })
        }
        if (state.proposalDocument === '') {
            setPropDoc({ message: "this field is required", haveError: true })
        }
        if (state.cpo) {
            setCPO({ message: "", haveError: false })
        }
        if (state.cpo === '') {
            setCPO({ message: "this field is required", haveError: true })
        }
    }
    const [progress, setProgress] = React.useState(false);
    React.useEffect(() => {
        if (biderror) {
            setProgress(false);
        }
        if (token) {
            setProgress(false);
        }
    }, [biderror, token])
    return (
        <Dialog
            open={props.open}
        >
            <div style={{
                margin:"20px",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }}>
                <span >Bid For An Auction</span>
                <IconButton onClick={()=>props.setOpen(!props.open)}><span ><CloseIcon/></span></IconButton>
            </div>
            
            {
                biderror
                    ? <Alert severity="error">
                        
                        {biderror}&nbsp; {biderror === "Unauthorized" ? "you must have an account to bid item" : null} &nbsp;{biderror === "Unauthorized"
                        ? <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
                        : null}</Alert>
                    : null
            }
            {
                bidstatus === 200
                    ? <Alert severity="success">your request to bid is successfuly submited</Alert>
                    : null
            }
            <DialogContent >
                <Grid spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            error={des.haveError}
                            helperText={des.message}
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
                            error={amount.haveError}
                            helperText={amount.message}
                            type="number"
                            id="amount"
                            name="amount"
                            label="amount"
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
                            error={CPO.haveError}
                            helperText={CPO.message}
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
                        <div >
                            <p>upload proposal doc if any</p>
                            <FileUploader
                                maxSize={100}
                                handleChange={(e) => {
                                    setState({ ...state, proposalDocument: e });
                                }}
                                name="file" types={fileTypes} />
                            <p>{state.proposalDocument ? `file name: ${state.proposalDocument.name}` : "no files uploaded yet"}</p>

                        </div>
                    </Grid>

                    <Grid className={classes.dialogbtn2}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={async () => {
                                validation();
                                if (state.amount && state.cpo && state.description) {
                                    if (props.data.auction) {
                                        setProgress(true);
                                        const formData = new FormData();
                                        formData.append('amount', state.amount);
                                        formData.append('auctionId', props.data.auction._id);
                                        formData.append('cpo', state.cpo);
                                        formData.append('description', state.description);
                                        formData.append('ownerId', props.data.auction.owner);
                                        if (state.proposalDocument) {
                                            formData.append('proposalDocument', state.proposalDocument);
                                        }
                                        formData.append('proposalType', props.data.auction.auctionType);
                                        await dispatch(BidAuctionAction(formData, token));
                                        setState(intialState);
                                        setTimeout(function () {
                                            dispatch(BidCleanUpAction());
                                        }, 5000);
                                    }
                                }

                            }}
                        >{progress ? <span><CircularProgress color="#ffffff" /> Loading</span> : "Submite Bid"}</Button>
                    </Grid>
                </Grid>
            </DialogContent >
        </Dialog>

    )
}
