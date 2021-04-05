import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CoverPic from "../images/cover.jfif"
import IntroOne from "../images/introOne.jpg"
import IntroTwo from "../images/introTwo.jpg"
import IntroThree from "../images/introThree.jpg"

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  home: {
    position: "relative",
    //backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.black,
    // marginBottom: theme.spacing(4),
    
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  coverDisplayContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));


//Static Text Input
let introOne = {
    title: "What We Do",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Then there is more and more text you can add about the untroduction amd keep on adding till you actually get the height that will be equivalent to the height of the image.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    // linkText: "Continue reading…",
  };
  let introTwo = {
    title: "Our Product",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Then there is more and more text you can add about the untroduction amd keep on adding till you actually get the height that will be equivalent to the height of the image.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    // linkText: "Continue reading…",
  };
  let introThree = {
    title: "Quality",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Then there is more and more text you can add about the untroduction amd keep on adding till you actually get the height that will be equivalent to the height of the image.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    // linkText: "Continue reading…",
  };
  let introFour = {
    title: "Assurance",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Then there is more and more text you can add about the untroduction amd keep on adding till you actually get the height that will be equivalent to the height of the image.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    // linkText: "Continue reading…",
  };
//Static Text Input End



export default function Home(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container>
    <Grid item xs={12} sm={11}>
    {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
    {/* <Paper
      className={classes.home}
      // style={{ backgroundImage: `url(${post.image})` }}
      //style={{ backgroundImage: `url(${CoverPic})` }}
      style={{backgroundColor:"lightsteelblue"}}
      elevation='8'
    > */}
     
      <Grid container style={{marginBottom:"2%"}}>
     <Paper
      className={classes.home}
      // style={{ backgroundImage: `url(${post.image})` }}
      //style={{ backgroundImage: `url(${CoverPic})` }}
      style={{backgroundColor:"lightsteelblue"}}
      elevation='8'
    >
        <Grid container> 
        <Grid item md={6}>
       
          <div className={classes.coverDisplayContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{fontFamily:"Comic sans MS", color : "#e34760", fontWeight:"bold", textShadow:"4px 4px 8px black"}}
            >
              {introOne.title}
            </Typography>
            <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              {introOne.description}
            </Typography>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.coverDisplayContent}  style={{margin:'3%'}} >
           <img src={IntroOne} style={{height: '100%',width: '100%', boxShadow:"1px 1px 25px black", borderRadius:"3%"}}/> 
          </div>
        </Grid>
        </Grid>
        </Paper>
      </Grid>
      <Grid container  style={{marginBottom:"2%"}}>
      <Paper
      className={classes.home}
      // style={{ backgroundImage: `url(${post.image})` }}
      //style={{ backgroundImage: `url(${CoverPic})` }}
      style={{backgroundColor:"lightsteelblue"}}
      elevation='8'
    >
        <Grid container> 
      <Grid item md={6}>
          <div className={classes.coverDisplayContent}  style={{margin:'3%'}} >
          <img src={IntroTwo} style={{height: '100%',width: '100%', boxShadow:"1px 1px 25px black", borderRadius:"3%"}}/> 
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.coverDisplayContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{fontFamily:"Comic sans MS", color : "#4bc658", fontWeight:"bold", textShadow:"4px 4px 8px black"}}
            >
              {introTwo.title}
            </Typography>
            <Typography variant="h5" color="inherit"  style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              {introTwo.description}
            </Typography>
          </div>
        </Grid>
        </Grid>
        </Paper>
        
      </Grid>
      <Grid container  style={{marginBottom:"2%"}}>
      <Paper
      className={classes.home}
      // style={{ backgroundImage: `url(${post.image})` }}
      //style={{ backgroundImage: `url(${CoverPic})` }}
      style={{backgroundColor:"lightsteelblue"}}
      elevation='8'
    >
        <Grid container> 
      
        <Grid item md={6}>
          <div className={classes.coverDisplayContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{fontFamily:"Comic sans MS", color : "#e34760", fontWeight:"bold", textShadow:"4px 4px 8px black"}}
            >
              {introThree.title}
            </Typography>
            <Typography variant="h5" color="inherit"  style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}}  paragraph>
              {introThree.description}
            </Typography>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.coverDisplayContent} style={{margin:'3%'}}  >
          <img src={IntroThree}  style={{height: '100%',width: '100%', boxShadow:"1px 1px 25px black", borderRadius:"3%"}}/> 
          </div>
        </Grid>
        </Grid>
        </Paper>
      </Grid>
      <Grid container>
      <Paper
      className={classes.home}
      // style={{ backgroundImage: `url(${post.image})` }}
      //style={{ backgroundImage: `url(${CoverPic})` }}
      style={{backgroundColor:"lightsteelblue"}}
      elevation='8'
    >
        <Grid container> 
      
      <Grid item md={6}>
          <div className={classes.coverDisplayContent} style={{margin:'3%'}} >
          <img src={IntroOne}  style={{height: '100%',width: '100%', boxShadow:"1px 1px 25px black", borderRadius:"3%"}}/> 
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.coverDisplayContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{fontFamily:"Comic sans MS", color : "#4bc658", fontWeight:"bold", textShadow:"4px 4px 8px black"}}
            >
              {introFour.title}
            </Typography>
            <Typography variant="h5" color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}}  paragraph>
              {introFour.description}
            </Typography>
          </div>
        </Grid>
        </Grid>
        </Paper>
        


        
        
      </Grid>
    {/* </Paper> */}
    </Grid>
        <Grid item xs={12} sm={1}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <Link  href="http://www.facebook.com">
          <IconButton color="primary" aria-label="upload picture" component="span" >
          <FacebookIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton style={{color:"#e34760"}} aria-label="upload picture" component="span" >
          <InstagramIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton style={{color:"#00a2f3"}} aria-label="upload picture" component="span" >
          <TwitterIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton style={{color:"#4bc658"}} aria-label="upload picture" component="span" >
          <WhatsAppIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton style={{color:"red"}} aria-label="upload picture" component="span" >
          <YouTubeIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton color="primary" aria-label="upload picture" component="span" >
          <RedditIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        <Link  href="http://www.facebook.com">
          <IconButton style={{color:"#0077b5"}} aria-label="upload picture" component="span" >
          <LinkedInIcon style={{fontSize: "80"}}/>
        </IconButton>
        </Link>
        </Grid>
        </Grid>
  );
}

Home.propTypes = {
  post: PropTypes.object,
};
