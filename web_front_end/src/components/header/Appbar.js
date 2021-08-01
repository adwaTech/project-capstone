import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShowContext from '../../Context';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex:2000
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isOpen,setIsOpen]=React.useState(false);
  const showContext =React.useContext(ShowContext);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
        <Fab color="primary" aria-label="add">
          <IconButton
            onClick={()=>{
              setIsOpen(true);
              showContext.setSideToggle(!showContext.sideToggle)
            }}
            edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
        </Fab>
          
          <Typography variant="h6" className={classes.title}>
            M3K Auction
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
