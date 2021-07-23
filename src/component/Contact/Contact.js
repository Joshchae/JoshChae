import React, { useState} from 'react'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        height: "65vh",
        width: "100%",
        background: "#a1a9ab",
        fontFamily: 'sans-serif',
    },
    headTypo: {
        marginTop: theme.spacing(2),
        fontWeight: '500',
        textTransform: "uppercase",
        color: "#ffffff",
    },
    divider: {
        border: '0px',
        width: '170px',
        height: '4px',
        backgroundColor: '#ffffff',
        margin: '2px auto',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5px auto',
        width: '50vw',
        height: '45vh',
    },
    input: {
        width: '100%',
        padding: '10px 0px 10px 10px',
        marginBottom: '8px',
        fontFamily: 'sans-serif',
        backgroundColor: '#e3e3e3',
        color: '#000000',
        border: 'none',
    },
    textArea: {
        width: '100%',
        height: '40%',
        padding: '10px 0px 10px 10px',
        fontFamily: 'sans-serif',
        backgroundColor: '#e3e3e3',
        color: '#000000',
        border: 'none',
    },
    submitButton: {
        alignSelf: 'flex-end',
        color: "#ffffff",
        '&:hover': {
            background: '#e3e3e3',
            color: '#000000',
          },
    },
}));


function Contact() {
    const classes = useStyles();
    const { register, formState: {errors} } = useForm();
    
    const userId = process.env.REACT_APP_EMAILJS_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                console.log('Message successfully sent.', result.text);
            }, (error) => {
                console.log('Sorry, unexpected error occured.', error.text)
            });
        e.target.reset();
        setOpenDialog(true);
    }

    const [openDialog, setOpenDialog] = useState(false);
    const handleClose = () => openDialog(false);

    return (
        <div id='contact' className={classes.root}>
            <svg preserveAspectRatio='none' viewBox='0 0 100 102' height='40' width='100%'>
                <path d='M0 0 L50 100 L100 0 Z' fill='#ffffff' />
            </svg>
            <Container className={classes.typoContainer}>
                <Typography className={classes.headTypo} variant="h4" align="center">
                    Contact
                <Divider className={classes.divider} />
                </Typography>
            </Container>
            
            <Container id="contact">
                <form id="contact-form" className={classes.form} onSubmit={sendEmail}>
                    <input
                        className={classes.input}
                        type="text"
                        id="enter-name"
                        name="name" 
                        placeholder="Name"
                        required
                        {...register("name", {
                            required: "Please write down your name.",
                            maxLength: "20",
                        }
                        )}
                    />
                    <Typography gutterBottom style={{color: '#726F6E'}} variant='caption'>
                        {errors.name && errors.name.message}
                    </Typography>

                    <input
                        className={classes.input} 
                        type="email"
                        id="enter-email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                        {...register("email", {
                            required: 'Please write down your email address.',
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }
                        )}
                    />
                    <Typography gutterBottom style={{color: '#726F6E'}} variant='caption'>
                        {/* {errors.email && errors.email.message} */}
                    </Typography>

                    <textarea 
                        className={classes.textArea} 
                        type="text"
                        id="enter-message"
                        name="message" 
                        placeholder="Please write down message"
                        required
                        {...register("message", {
                            required: 'Please write dowm messages to me.',
                        })}
                    />
                    <Typography gutterBottom variant='caption'>
                        {/* {errors} */}
                    </Typography>
                    <Button type='submit' disableRipple={true} className={classes.submitButton} >
                        Submit
                    </Button>
                </form>
                </Container>

                <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title" >
                    <DialogTitle id="form-dialog-title">
                        Thanks for your message.
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            I'll get back to you as soon as possible.
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
        </div>
    )
}

export default Contact

