import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import MapStoriesMain from '../../assets/images/Map Stories.png'
import MiniTwit from '../../assets/images/Mini Twitter Project.png'
import Quarttet from '../../assets/images/Quartett.png'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  card: {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: '30vh'
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    textDecoration: 'none',
    '&:hover': {
      background: '#ebebeb',
    }
  }
}));

const cards = [
  {
    'projectTitle': 'Mini Twitter',
    'imageUrl': MiniTwit,
    'dev': 'Front-end',
    'stack': 'HTML & CSS, React JS, Node JS',
    'source': 'https://github.com/hangingpulse/crossover-twitter',
  },
  {
    'projectTitle': 'Map Stories Platform',
    'imageUrl': MapStoriesMain,
    'dev': 'Full-stack',
    'stack': 'React JS, Node JS, MongoDB, Scrum',
    'source': 'https://github.com/zuzuc/mapstories-frontend',
  },
  {
    'projectTitle': 'Mini Quartett(Back-end)',
    'imageUrl': Quarttet,
    'dev': 'Back-end',
    'stack': 'React JS, NoSQL, Node JS, MongoDB',
    'source': 'https://github.com/Joshchae/backendquartett02',
  },
];

function ItemAlbum() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Zoom disableStrictModeCompat	in={true}>
                  <Card className={classes.card} >
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.imageUrl}
                      title={card.projectTitle}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        {card.projectTitle}
                      </Typography>
                      <Typography gutterBottom variant="subtitle2" >
                        {card.dev}
                      </Typography>
                      <Typography>
                        <Box lineHeight={1.5}>
                          {card.stack}
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <a href={card.source} className={classes.button}>
                        <Button size="small" color="primary" >
                          Source Code
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
 
    </div>
  );
}

export default ItemAlbum;