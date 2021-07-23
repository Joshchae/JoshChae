import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Slide, useScrollTrigger } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import myLogo from '../../assets/images/balkon_logo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    justifyContent: "space-between",
    background: "linear-gradient(to right, #d1d1d1, #0e0f0e)",
  },
  myLogo: {
    height: "50px",
    width: "50px",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
  },
  navButton: {
    '&:hover':{
        background: '#fffff0',
        color: 'black',
    }  
  },
  sendButton: {
    margin: "auto 0",
  },
}));

export default function Header(props) {
    const classes = useStyles();

    // ------------- Header hidden on Scroll ----------------------------------------- //
    const HideOnScroll = (props) => {
      const {children, window} = props;
      const trigger = useScrollTrigger({target: window ? window() : undefined});
      
      return ( <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>)
    }
    // ------------- End of Header hidden on Scroll --------------------------------- //

    return (
        <div id="header" className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <img src={myLogo} alt="Josh Chae's Balkon" className={classes.myLogo} />
                        <div className={classes.navList}>
                            <Link to="main" activeClass="active" spy={true} smooth={true} duration={1000}>
                                <Button className={classes.navButton} color="inherit">About</Button>
                            </Link>
                            <Link to="projects" activeClass="active" spy={true} smooth={true} duration={1000}>
                                <Button className={classes.navButton} color="inherit">Projects</Button>
                            </Link>
                            <Link to="contact" activeClass="active" spy={true} smooth={true} duration={1000}>
                                <Button className={classes.navButton} color="inherit">
                                    <SendIcon className={classes.sendButton}/>
                                </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
  );
}
