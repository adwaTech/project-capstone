import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    ShowNotificationAction,
    GetNotificationAuctionAction
}   from '../../redux-state-managment/Actions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Notification() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.getNotificationReducer.Notification);
    const token = useSelector((state) => state.AccountReducer.token);
    const user = useSelector((state) => state.AccountReducer.user);
    
    
    return (
        <div style={{
            width: "100%",
            height: "300px",
            overflowX: "hidden",
        }}>
            {
                notification.map((note, index) => (
                    <Accordion onClick={
                        ()=>{
                            dispatch(ShowNotificationAction(note._id,token));
                            dispatch(GetNotificationAuctionAction(token));
                        }
                    }>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{note.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography style={{}}>
                               Detail : {note.detail}
                            </Typography>
                            <Typography >
                               Date : {note.date}
                            </Typography>
                            <Typography >
                               Notification Type : {note.notificationType}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            {
                notification.length<=0
                    ? <Alert fullWidth style={{ marginBottom: '10px' }} severity="info" variant="outlined">you have no notification</Alert>
                    : null
            }

        </div>
    );
}
