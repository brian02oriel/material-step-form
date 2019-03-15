
import React, { Component } from 'react'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
  state = {
      step:1,
      firstName: '',
      lastName:'',
      email: '',
      occupation: '',
      city:'',
      bio:''
  }

  //Proceed to next step
  nextStep = () => {
      const {step} = this.state;
      this.setState({
          step: step + 1
      });
  }

   //Go back previous step
   prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    getSteps() {
        return ['FormUserDetails', 'FormPersonalDetails', 'Confirm'];
      }

    render() {
     const {step} = this.state;
     const {firstName, lastName, email, occupation, bio, city} = this.state;
     const values = {firstName, lastName, email, occupation, bio, city};
     const activeStep = this.state.step;
     const steps = this.getSteps

     switch(step) {
        case 1:
            return(
                <FormUserDetails 
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
        case 2:
            return(
                <FormPersonalDetails
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
        case 3:
            return(
                < Confirm
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
        case 4:
            return(
                < Success />
            )
     }
        return (
          <div>
              <Stepper activeStep={activeStep}>
                 {steps.map((label, index) => {
                  const props = {};
                    const labelProps = {};
                    
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
             
         </div>
    )
  }
}

export default UserForm
