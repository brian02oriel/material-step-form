import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

export default class FormUserDetails extends Component {
    continue = e =>{ //e = event
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
      <Grid container spacing={24} 
      alignContent = 'center'
      alignItems = 'center'
      justify = 'center'
     > 
        <React.Fragment>
            <Grid container item xs={12} spacing={24}
             alignContent = 'space-around'
             alignItems = 'center'
             justify = 'flex-end'
             direction='column'
             style = {styles.gridStyle}>

                <TextField
                label = "First Name"
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName}
                margin = "dense" />

                <TextField 
                label = "Last Name"
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName} 
                margin = "dense"/>

                <TextField 
                label = "Email"
                onChange = {handleChange('email')}
                defaultValue = {values.email} 
                margin = "dense"/>
            </Grid>  

            <Grid item xs={6}> 
                <Button variant="contained" color="primary" style = {styles.button} onClick = {this.continue}>
                    Continue
                </Button>
            </Grid>
        </React.Fragment>
      </Grid>
    )
  }
}

const styles = {
    button: {
        margin: 15
    },

    gridStyle: {
        margin: 15
    }


}