import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export default class FormPersonalDetails extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title = "Enter Personal Details" />
            <TextField hinText = "Enter your occupation"
            floatingLabelText = "Occupation"
            onChange = {handleChange('occupation')}
            defaultValue = {values.occupation} />

            <br/>

            <TextField hinText = "Enter your city"
            floatingLabelText = "City"
            onChange = {handleChange('city')}
            defaultValue = {values.city} />
            
            <br/>
            
            <TextField hinText = "Enter your bio"
            floatingLabelText = "Bio"
            onChange = {handleChange('bio')}
            defaultValue = {values.bio} />

            <br/>

            <RaisedButton 
            label = "Back"
            primary = "false"
            style = {styles.button}
            onClick = {this.back}/>

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
