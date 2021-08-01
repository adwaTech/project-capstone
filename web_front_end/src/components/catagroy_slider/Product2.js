import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Image7 from '../../assets/images/dan-gold-N7RiDzfF2iw-unsplash.jpg';
import {
    NotificationsActive,
    
} from  '@material-ui/icons'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:"70%",
    justifyContent:"space-between",
    marginLeft:"15%",
    marginRight:"15%",
    padding:"10px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            House
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            addis abeba bole
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            24/27/12
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <NotificationsActive/> : <NotificationsActive />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={Image7}
        title="Live from space album cover"
      />
    </Card>
    <Divider className={ classes.root}/>
    </div>
  );
}
