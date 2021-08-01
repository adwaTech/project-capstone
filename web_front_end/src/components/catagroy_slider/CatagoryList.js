import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Image10 from '../../assets/images/bird-wallpaper-1366x768-008.jpg';
import Image11 from '../../assets/images/bird-wallpaper-1366x768-009.jpg';
import Image12 from '../../assets/images/bird-wallpaper-1366x768-010.jpg';
import Image13 from '../../assets/images/bird-wallpaper-1366x768-012.jpg';
import Image14 from '../../assets/images/bird-wallpaper-1366x768-013.jpg';


const useStyles = makeStyles((theme) => ({

  imageList1: {
    width: "60%",
    height: "40%",
  },
  root: {
    width:"80%",
    height:"300px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft:"10%",
    marginRight:"10%",
    alignContent:"center",
    alignItems:"center",
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



 const itemData = [
   {
     img: Image10,
     title: 'Image',
     author: 'author',
     cols: 1,
   },
   {
    img: Image11,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: Image12,
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  {
    img: {Image13},
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Image14,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: Image10,
    title: 'Image',
    author: 'author',
    cols: 3,
  },
  {
    img: Image11,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Image12,
    title: 'Image',
    author: 'author',
    cols: 3,
  },
 ];
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
                title={item.title}
                classes={{
                root: classes.titleBar,
                title: classes.title,
                }}
                actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                    <StarBorderIcon className={classes.title} />
                </IconButton>
                }
            />
            </ImageListItem>
        ))}
        </ImageList>
    </div>
    </div>
  );
}
