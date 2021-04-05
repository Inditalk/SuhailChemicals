import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CoverPic from "../images/cover.jfif"
import ContactPic from "../images/contact.png"

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
    flexGrow:1,
    
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
let contact = {
    title: "Contact Us",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Then there is more and more text you can add about the untroduction amd keep on adding till you actually get the height that will be equivalent to the height of the image.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    // linkText: "Continue reading…",
  };
//Static Text Input End



export default function Contact(props) {
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
              Contact Us
            </Typography>
            <Grid container>
            <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              Mobile:
            </Typography>
           <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              +91-7263953345
            </Typography>
            </Grid>
            <Grid container>
            <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              Address:
            </Typography>
           <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              ABC Ltd, Block C/24, Madanpur Khadar Extension, Sarita vihar, New Delhi
            </Typography>
            </Grid>
            <Grid container>
            <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              Pin:
            </Typography>
           <Typography color="inherit" style={{fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              110076
            </Typography>
            </Grid>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className={classes.coverDisplayContent}  style={{margin:'3%'}} >
           <img src={ContactPic} style={{height: '100%',width: '100%', 
        //    boxShadow:"1px 1px 25px black",
            borderRadius:"3%"}}/> 
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

Contact.propTypes = {
  post: PropTypes.object,
};
