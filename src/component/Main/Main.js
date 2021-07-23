import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Particle from '../Particle/Particle';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        filter: "grayscale(100%)",
    },
    typoContainer: {
        padding: theme.spacing(0.5),
        width: "50%",
        height: "35vh",
        '@media (max-width:1024px)': {height: "28vh"},
        '@media (max-width:380px)': {height: "28vh"},
        background: "#0e0f0e",
        filter: "opacity(0.8)",
        color: "#ffffff",
        transition: 'transform 0.5s',
        '&:hover':{
            background: '#fffff0',
            color: 'black',
            transform: 'rotate(10deg)',
        },
    },
    headTypo: {
        fontWeight: '650',
        paddingTop: "3%",
        fontSize: "3rem",
        '@media (max-width:1024px)': {fontSize: '1.5rem'},
        '@media (max-width:380px)': {fontSize: '1rem'},
    },
    subHeadTypo: {
        fontSize: "1.5rem",
        '@media (max-width:1024px)': {fontSize: '0.9rem'},
        '@media (max-width:380px)': {fontSize: '0.8rem'},
    },
    paragraphTypo: {
        fontSize: "1em",
        '@media (max-width:1024px)': {fontSize: '0.5rem'},
        '@media (max-width:380px)': {fontSize: '0.2rem'},
    },
    typo2: {
        color: "#0e0f0e",
        fontSize: "1em",
        '@media (max-width:1024px)': {fontSize: '0.5rem'},
        '@media (max-width:380px)': {fontSize: '0.2rem'},
    },
}));

function Main() {
    const classes = useStyles();

    return (
        <div id='main' className={classes.root}>
            <Container className={classes.typoContainer}>
                    <Typography className={classes.headTypo} variant="h4" align="center" gutterBottom>
                        Hello, world
                    </Typography>
                    <Typography className={classes.subHeadTypo} variant="h6" align="center" >
                        This is Josh Hyunki Chae.
                    </Typography>
                    <Typography className={classes.paragraphTypo} variant="body1" align="center" gutterBottom>
                        {`Full-stack Web & App Developer`}<br />
                    </Typography>
                    <Typography className={classes.typo2} variant="body2" align="center">
                        with Business-mindset, Entrepreneurship 
                    </Typography>
            </Container>
            <Particle />
        </div>
    )
}

export default Main



