import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {useSelector} from 'react-redux'

const columnsData = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'auctionName',
      headerName: 'auction Name',
      width: 150,
      
    },
    {
      field: 'status',
      headerName: 'status',
      width: 150,
      
    },
    {
      field: 'auctionCategory',
      headerName: 'auction Category',
      width: 150,
      
    },
    {
      field: 'auctionType',
      headerName: 'auctionType',
    //   type: 'number',
      width: 110,
      
    },
    {
        field: 'deadline',
        headerName: 'deadline',
        width: 150,
        
      },
      {
        field: 'minAmount',
        headerName: 'minAmount',
        width: 150,
        
      },
      {
        field: 'minCpo',
        headerName: 'minCpo',
      //   type: 'number',
        width: 110,
        
      },
      {
        field: 'postedOn',
        headerName: 'postedOn',
        width: 150,
        
      },
      {
        field: 'startDate',
        headerName: 'startDate',
        width: 150,
        
      },
      {
        field: 'statusCondition',
        headerName: 'status condition',
      //   type: 'number',
        width: 110,
        
      },
      
  ];
  


function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    textField: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      margin: theme.spacing(1, 0.5, 1.5),
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(0.5),
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  { defaultTheme },
);

function QuickSearchToolbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function QuickFilteringGrid() {
    
  const myauction = useSelector((state) => state.getBidReducer.getbid_auctions);
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(genderatMap());
  function genderatMap(){
    let array=[];
    if(myauction){
      myauction.map((arr,i)=>{
        array.push(
          {id:i,
          auctionName:arr.auctionId.auctionName,
          status:arr.status,
          auctionCategory:arr.auctionId.auctionCategory,
          auctionType:arr.auctionId.auctionType,
          deadline:arr.auctionId.deadline,
          minAmount:arr.auctionId.minAmount,
          minCpo:arr.auctionId.minCpo,
          postedOn:arr.auctionId.postedOn,
          startDate:arr.auctionId.startDate,
          statusCondition:arr.auctionId.status,
        })
      })
      return array;
    }else{
      return array;
    }
    
  }
  const [num,setNum]=React.useState(1)
  React.useEffect(()=>{
    if(num===1){
      setTimeout(() => {
        setRows(genderatMap());
      }, 1000);
      if(myauction.length>0){
        setNum(2);
      }
    }
  },[myauction])
  
  
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field]);
      });
    });
    setRows(filteredRows);
  };

  return (
    <div style={{ height: "500px", width: '90%' ,background:"#ffffff"}}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columnsData}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
      />
    </div>
  );
}
