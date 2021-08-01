import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./typographyStyle.js";

const useStyles = makeStyles(styles);


// danger

export  function Danger(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  children: PropTypes.node,
};


// info

export  function Info(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node,
};

// muted

export  function Muted(props) {
    const classes = useStyles();
    const { children } = props;
    return (
      <div className={classes.defaultFontStyle + " " + classes.mutedText}>
        {children}
      </div>
    );
  }
  
  Muted.propTypes = {
    children: PropTypes.node,
  };


//   primary

export  function Primary(props) {
    const classes = useStyles();
    const { children } = props;
    return (
      <div className={classes.defaultFontStyle + " " + classes.primaryText}>
        {children}
      </div>
    );
  }
  
  Primary.propTypes = {
    children: PropTypes.node,
  };

//   quote

export  function Quote(props) {
    const classes = useStyles();
    const { text, author } = props;
    return (
      <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
        <p className={classes.quoteText}>{text}</p>
        <small className={classes.quoteAuthor}>{author}</small>
      </blockquote>
    );
  }
  
  Quote.propTypes = {
    text: PropTypes.node,
    author: PropTypes.node,
  };

// success
export  function Success(props) {
    const classes = useStyles();
    const { children } = props;
    return (
      <div className={classes.defaultFontStyle + " " + classes.successText}>
        {children}
      </div>
    );
  }
  
  Success.propTypes = {
    children: PropTypes.node,
  };
  // warning

  export  function Warning(props) {
    const classes = useStyles();
    const { children } = props;
    return (
      <div className={classes.defaultFontStyle + " " + classes.warningText}>
        {children}
      </div>
    );
  }
  
  Warning.propTypes = {
    children: PropTypes.node,
  };