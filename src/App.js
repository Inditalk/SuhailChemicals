import logo from "./logo.svg";
import "./App.css";
import ScrollableTabsButtonForce from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CoverDisplay from "./components/cover_display";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    //color: theme.palette.text.secondary,
  },
  // mainFeaturedPost: {
  //   position: "relative",
  //   backgroundColor: theme.palette.grey[800],
  //   color: theme.palette.common.white,
  //   marginBottom: theme.spacing(4),
  //   backgroundImage: "url(https://source.unsplash.com/random)",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  // },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   right: 0,
  //   left: 0,
  //   backgroundColor: "rgba(0,0,0,.3)",
  // },
}));

let coverDisplay = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{backgroundColor:"whitesmoke"}}>
      <Header />
      {/* <div className={classes.overlay} /> */}
      {/* <Paper
        className={classes.mainFeaturedPost}
        // style={{ backgroundImage: `url(${post.image})` }}
      >
        <h1>Hello</h1>
      </Paper> */}
      <CoverDisplay post={coverDisplay} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <img src="https://picsum.photos/seed/picsum/1020/250" /> */}
          {/* <Paper className={classes.paper}> */}
          <ScrollableTabsButtonForce />
          {/* </Paper> */}
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
      {/* </Paper> */}
      <Footer />
    </div>

    // <div className="App">
    //   <ScrollableTabsButtonForce />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
