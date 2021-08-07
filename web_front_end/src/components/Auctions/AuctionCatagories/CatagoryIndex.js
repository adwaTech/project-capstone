import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Detail from './Detail';
import {Search} from '@material-ui/icons';
import Car from './Car';
import Header from '../../header/Header';
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
              <div className="catagoryindex">
                <div className="catagoryindex-sidebar">
                <div class="search-container">
                    <input type="text" name="search" placeholder="Search..." class="search-input"/>
                    <a href="#" class="search-btn">
                            <Search/>    
                    </a>
                </div>
              </div>
              <div className="catagoryindex-mainmain">
                  <Car/>
              </div>
              <div className="catagoryindex-rightside">
                      <Detail/>
              </div>
              
          </div>
        </div>
    )
}
