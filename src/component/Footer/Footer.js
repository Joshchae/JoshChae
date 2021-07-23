import React, { useState } from 'react';
import { makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { Typography, Container, Link, Tooltip, ClickAwayListener } from '@material-ui/core';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { SiDiscord } from 'react-icons/si';

const unstableTheme= unstable_createMuiStrictModeTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2, 2),
    backgroundColor: theme.palette.grey[300],
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    margin: theme.spacing(0, 2),
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Footer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const tooltipOpen = () => {
    setOpen(true);
  };
  const tooltipClose = () => {
    setOpen(false)
  }

  return (
    <>
      <footer>
        <div className={classes.root}>
            {/* ------- Icon Container ------------------------------------------------ */}
            <Container maxWidth="sm" className={classes.iconContainer}>
                <Link href="https://github.com/Joshchae" color="inherit">
                    <GitHubIcon className={classes.icons} style={{ fontSize: 30 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/Josh-Hyunki-Chae" color="inherit">
                    <LinkedInIcon className={classes.icons} style={{ fontSize: 40 }} />
                </Link>
                {/* ------- Discord ID auto copy -------------------------------------------- */}
                <ThemeProvider theme={unstableTheme}>
                  <ClickAwayListener onClickAway={tooltipClose}>
                      <div>
                          <Tooltip
                            TransitionProps={false}
                            PopperProps={{ disablePortal: true, }}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="My Discord ID is Copied!" 
                          >
                              <Link color="inherit" >
                                  <CopyToClipboard text="Josh Chae#5971" >
                                      <SiDiscord className={classes.icons} size={31} onClick={tooltipOpen} style={{cursor: 'pointer'}}/>
                                  </CopyToClipboard>
                              </Link>
                          </Tooltip>
                      </div>
                  </ClickAwayListener>
                </ThemeProvider>
                {/* ------- End of Discord ID auto copy -------------------------------------- */}
            </Container>
            {/* ------- End of Icon Container ------------------------------------------- */}
            
            {/* ------- Copyright Container --------------------------------------------- */}
            <Container maxWidth="sm" className={classes.textContainer}>
                <Typography variant="body2" color="textSecondary">
                    {'© '}Josh Hyunki Chae{' '}
                    {new Date().getFullYear()}
                </Typography>
            </Container>
            {/* ------- End of Copyright Container --------------------------------------- */}
          </div>
      </footer>
    </>
  );
}

export default Footer