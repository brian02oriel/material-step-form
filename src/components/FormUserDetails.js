import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Enter User Details" />
            <TextField hinText = "Enter your first name"
            floatingLabelText = "First Name"
            onChange = {handleChange('firstName')}
            defaultValue = {values.firstName} />

            <br/>

            <TextField hinText = "Enter your last name"
            floatingLabelText = "Last Name"
            onChange = {handleChange('lastName')}
            defaultValue = {values.lastName} />
            
            <br/>
            
            <TextField hinText = "Enter your email"
            floatingLabelText = "Email"
            onChange = {handleChange('email')}
            defaultValue = {values.email} />

            <br/>

            <RaisedButton 
            label = "Continue"
            primary = "true"
            style = {styles.button}
            onClick = {this.continue}/>

        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}