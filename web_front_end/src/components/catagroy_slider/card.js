import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Star from '@material-ui/icons/Star'
import {strings} from '../../language/language'

const styles = {
  card: {
    margin: "0 20px",
    transition:"1s",
    '&:hover':{
        transform:"scale(1.1)",
        boxShadow:"0 0 5px rgba(0,0,0,0.3)"
    }
  },
  media: {
    height: 160
  }
};

function MediaCard(props) {
  const { classes, image, headline, description, isMoving } = props;

  return (
    <a onClick={(e) => {
        if(isMoving) {
          e.preventDefault();
        }
      }} href='' target="">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={headline} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <div className="btn">
                <p className="star">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </p>
                <a href="#">{strings.seeMore}</a>
            </div>
      </CardActions>
    </Card>
  </a>
  );
}
export default withStyles(styles)(MediaCard);