import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "20vh",
        background: "#fffff",
    },
    typoContainer: {
        height: "20vh",
        padding: theme.spacing(2),
        textTransform: "uppercase",
    },
    headTypo: {
        marginTop: theme.spacing(0.5),
        fontWeight: "500",
    },
    paragraphTypo: {
        margin: theme.spacing(1),
        lineHeight: '15px',
        fontSize: "0.7rem",
    },
    divider: {
        border: '0px',
        width: '185px',
        height: '4px',
        backgroundColor: '#000000',
        margin: '1px auto',
    },
}));

function Projects() {
    const classes = useStyles();
    
    return (
        <div id='projects' className={classes.root}>
            <Container className={classes.typoContainer}>
                <Typography className={classes.headTypo} variant="h4" align="center">
                    Projects
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.paragraphTypo} variant="body2" align="center" >
                    {`defining a user-friendly interface,`} <br />
                    {`analyzing the problem, `}
                    {`and envisioning it strategically on the product`} <br />
                </Typography>
            </Container>
        </div>
    )
}

export default Projects