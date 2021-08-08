import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Car from './Car';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

export default function CatagoryIndex() {
    const classes = useStyles();
    return (
        <div>
          <Header/>
          <Car/>
          <div style={{position:"relative",}}>
          <Footer/>
          </div>
        </div>
    )
}
