import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Image0 from '../../assets/images/paul-einerhand-uyDHQc128DA-unsplash.jpg';
import Image11 from '../../assets/images/samantha-borges-EeS69TTPQ18-unsplash.jpg';
import Image2 from '../../assets/images/lode-lagrainge-45cr4wHWTIw-unsplash.jpg';
import Image3 from '../../assets/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg';
import Image4 from '../../assets/images/adele-payman-2oYMwuFgnTg-unsplash.jpg';
import {strings} from '../../language/language';
import {useSelector} from 'react-redux'

import {
  Add,
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
    width: "40%",
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
let list=[
  {
      image:Image0,

  },
  {
      image:Image11
  },
  {
      image:Image2,

  },
  {
      image:Image3
  },
  {
      image:Image4,

  },
];

export default function MediaControlCard(props) {
  const lang=useSelector((state)=>state.LanguageReducer.language)
  React.useEffect(()=>{

  },[lang]);
  console.log(props.image)
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
        {
          list.map(data=>(
            <div>
               <Card className={classes.root}>
                <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {strings.House}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {strings.addisabababole}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                 {strings.description}:{strings.description2}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                 {strings.start}:24/27/12
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {strings.end} :24/27/12
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {strings.endtime} :24/27/12
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? <Add/> : <Add />}
                </IconButton>
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={data.image}
              title="Live Auction"
            />
          </Card>
          <Divider className={ classes.root}/>
            </div>
          ))
        }
    </div>
  );
}
