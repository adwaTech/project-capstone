import React from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);


export const TextInput = (props) => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
            value={props.value}
            onChange={props.onChange}
            type="number"
                id="standard-text"
                label="insert amount"
                className={classes.wrapText}
                //margin="normal"
            />
            <Button variant="contained" color="primary" className={classes.button}>
                {/* <SendIcon /> */}
                Bid
            </Button>
            </form>
        </>
    )
}



