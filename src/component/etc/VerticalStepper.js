import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@material-ui/core';
import Hello from '../page/Hello';
import Projects from '../page/Projects';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2), 
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Josh Chae', 'Projects', 'Contact me'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <Hello />
        </div>
      );
    case 1:
      return (
        <div>
          <Projects />
        </div>
      );
    case 2:
      return (
        <div>
          {/* <ContactForm /> */}
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button} >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography variant="h6">Now you know me well!</Typography>
          <Typography variant="h7">If you have more questions, please contact me.</Typography>
          <br />
          <Button variant="outlined" onClick={handleReset} className={classes.button}>
            Go to the top
          </Button>
        </Paper>
      )}
    </div>
  );
}
