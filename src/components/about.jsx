import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CoverPic from "../images/cover.jfif"
import AboutPic from "../images/about.png"
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


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SuhailPic from '../images/suhail.jpg';
import PartnerPic from '../images/partner.jpg';


const useStyles = makeStyles((theme) => ({
  home: {
    position: "relative",
    //backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.black,
    // marginBottom: theme.spacing(4),
    flexGrow: 1,
    
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
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));


//Static Text Input
let introOne = {
    title: "About",
    description:
      "Write here about the company and TAG line.",
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



export default function About(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container>
    <Grid item xs={12} sm={12}>
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
        <Grid item xs={12}>
       
          <div className={classes.coverDisplayContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              style={{textAlign:"center",fontFamily:"Comic sans MS", color : "#e34760", fontWeight:"bold", textShadow:"4px 4px 8px black"}}
            >
              About
            </Typography>
            <Typography color="inherit" style={{textAlign:"center",fontSize:"170%",fontWeight:"bold",fontFamily:"Garamond", textShadow:"4px 4px 8px white"}} paragraph>
              {introOne.description}
            </Typography>
          </div>
        </Grid>
        <Grid item md={12}>
          <div className={classes.coverDisplayContent}  style={{marginInlineEnd:'4%'}} >
           <img src={AboutPic} style={{height: '100%',width: '100%', boxShadow:"1px 1px 25px black", borderRadius:"3%"}}/> 
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
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <div className={classes.coverDisplayContent}  style={{margin:'3%'}} >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SuhailPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{fontWeight:"bold",color:"darkslategray"}}>
            Suhail Khan
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
           Chemical Technical Expert
          </Typography>
          <Typography variant="body5" color="textSecondary" component="p">
           CO-FOUNDER
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  color="primary">
          Connect
        </Button>
      </CardActions>
    </Card>
    </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className={classes.coverDisplayContent}  style={{margin:'3%'}} >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={PartnerPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" style={{fontWeight:"bold",color:"darkslategray"}}>
            Partner
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
           Client Manager
          </Typography>
          <Typography variant="body5" color="textSecondary" component="p">
           CO-FOUNDER
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  color="primary">
          Connect
        </Button>
      </CardActions>
    </Card>
    </div>
        </Grid>
        </Grid>
        </Paper>
        
      </Grid>
      <Grid container>


        
        
      </Grid>
    {/* </Paper> */}
    </Grid>
        </Grid>
  );
}

About.propTypes = {
  post: PropTypes.object,
};
