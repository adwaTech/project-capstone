
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#aucions" className={classes.block}>
                Auctions
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#FAQ" className={classes.block}>
                FAQ
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#news" className={classes.block}>
                News
              </a>
            </ListItem>
          </List>
        </div>
        
      </div>
    </footer>
  );
}
