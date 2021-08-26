import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {useSelector} from 'react-redux';



export default function Notification() {
    const notification = useSelector((state) => state.getNotificationReducer.Notification);
    return (
        <div style={{   
            width:"100%",
            height:"300px",
            overflowX:"hidden",
        }}>
            {
                notification.map((note,index)=>(
                    <Alert variant="outlined" fullWidth style={{ marginBottom: '10px' }} severity="info">This is an error alert — check it out!</Alert>
                ))
            }
            {
                notification
                ?<Alert fullWidth style={{ marginBottom: '10px' }} severity="info" variant="outlined">you have no notification</Alert>
                :null
            }
            
        </div>
    );
}
