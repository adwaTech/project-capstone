import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, TextField, Grid, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
    WithdrawAuctionAction,
    WithdrawCleanUpAction,
    // UpdateBalanceAction
    ProfileAuctionAction,
} from '../../redux-state-managment/Actions';




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



export default function Withdraw(props) {




    const dispatch = useDispatch();

    const classes = useStyles();
    const intialState = {
        type:'cbebirr',
        value: "",
    }
    const [state, setState] = React.useState(intialState)
    const token = useSelector((state) => state.AccountReducer.token);
    
    const withdraw_error = useSelector((state) => state.WithDrawReducer.withdraw_error);
    const withdraw_status = useSelector((state) => state.WithDrawReducer.withdraw_status);

    const [amount, setAmount] = React.useState({ message: "", haveError: false });

    function validation() {
        if (state.value === '') {
            setAmount({ message: "this field is required", haveError: true })
        }
        if (state.value) {
            setAmount({ message: "", haveError: false })
        }
    }
    const [progress, setProgress] = React.useState(false);
    React.useEffect(() => {
        if (withdraw_error) {
            setProgress(false);
        }
        if (withdraw_status) {
            setProgress(false);
        }
        if(withdraw_status===200){
            dispatch(ProfileAuctionAction(token));
            // dispatch(UpdateBalanceAction(state.value,"sub"));
        }

    }, [withdraw_error, withdraw_status,dispatch,state.value,token])

    return (
        <Dialog
            open={props.open}
            
        >
            <div style={{
                margin: "20px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <span >WithDraw</span>
                <IconButton onClick={() => props.setOpen(!props.open)}><span ><CloseIcon /></span></IconButton>
            </div>

            {
                withdraw_error
                    ? <Alert severity="error">
                        {withdraw_error ? withdraw_error : null}</Alert>
                    : null
            }
            {
                withdraw_status === 200
                    ? <Alert severity="success">amount is successfuly Withdrawd</Alert>
                    : null
            }
            <DialogContent >
                <Grid >
                    <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl} fullWidth >
                            <InputLabel id="user type">choose Withdraw provider</InputLabel>
                            <Select
                                labelId="user type"
                                id="user-type"
                                value={state.type}
                                onChange={(e) => {
                                    setState({ ...state, type: e.target.value });
                                }}
                            >
                                <MenuItem value="cbebirr">CBE birr</MenuItem>
                                <MenuItem value="amole">Amole</MenuItem>
                            </Select>
                        </FormControl>
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
                            value={state.value}
                            onChange={(e) => {
                                setState({ ...state, value: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid className={classes.dialogbtn2}>
                        <Button
                            disabled={withdraw_status}
                            color="primary"
                            variant="contained"
                            onClick={async () => {
                                validation();
                                if (state.type && state.value) {

                                    setProgress(true);
                                    await dispatch(WithdrawAuctionAction(state,token));
                                    setTimeout(function () {
                                        dispatch(WithdrawCleanUpAction());
                                        setState(intialState);
                                    }, 5000);
                                    
                                }

                            }}
                        >{progress ? <span><CircularProgress color="#ffffff" /> Loading</span> : "withdraw"}</Button>
                    </Grid>
                </Grid>
            </DialogContent >
        </Dialog>

    )
}
