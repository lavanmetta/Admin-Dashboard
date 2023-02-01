import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import axios from "axios";
import  { useState } from "react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';



export default function ProfileManage({ ...others }) {

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  const changePassword = (data) => {
  
  
    const accessToken = getCookie('token');
    console.log(accessToken);
  
    if (!accessToken) {
      console.error('No access token found in cookies.');
      return;
    }
  
    axios.put("http://localhost:3001/auth/change-password", data, {

      headers: {
        accessToken: accessToken
      }

    })
      .then((response) => {
        console.log(response)
        if (response.data.error) {
          setError(response.data.error);
          console.log(response.data.error)
        } else {
          setSuccess(response.data.success)
          console.log(response.data.success)
        }
      });
  };
  
  


  return (
    <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    <div className="User-details">
    <Typography variant="h3" gutterBottom sx={{ marginBottom:'25px' }} >
      Profile Manage
    </Typography>

  

    <Grid container spacing={3}>
    <Grid item xs={12} sm={4}>
        <TextField
          required
          id="name"
          name="name"
          label="FullName"
          fullWidth
        />
     </Grid>

     <Grid item xs={12} sm={4}>
        <TextField
          required
          id="name"
          name="name"
          label="Number"
          fullWidth
        />
     </Grid>

     <Grid item xs={12} sm={4}>
        <TextField
          required
          id="name"
          name="name"
          label="Email Address"
          fullWidth
        />
     </Grid>
     <Grid item xs={12}>
        <Button  sx={{ backgroundColor:'#5e35b1' , borderRadius:'18px' }}  variant="contained" >
         Save Changes
       </Button>
        </Grid>
     </Grid>
    </div>


<div className="password-container">
<Typography sx={{ margin:'20px 0px 20px 0px' }}  variant="h5" gutterBottom>
    Set New Password
  </Typography>

         <Formik

                initialValues={{
                  oldPassword: '',
                  newPassword: '',
                }}
                validationSchema={Yup.object().shape({
                  oldPassword: Yup.string().max(255).required('Password is required'),
                  newPassword:  Yup.string()
                  .min(8, 'Password must be 8 characters long')
                  .matches(/[0-9]/, 'Password requires a number')
                  .matches(/[a-z]/, 'Password requires a lowercase letter')
                  .matches(/[A-Z]/, 'Password requires an uppercase letter')
                  .matches(/[^\w]/, 'Password requires a symbol'),
                })}
                onSubmit={changePassword}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        
                    <Grid item xs={12} sm={12} >
                    <FormControl  sx={{ margin:'0px 0px 20px 0px' }} error={Boolean(touched.oldPassword && errors.oldPassword)} >
                            <InputLabel htmlFor="outlined-adornment-oldPassword-login">Old Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-oldPassword-login"
                                type="password"
                                value={values.oldPassword}
                                name="oldPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="oldPassword"
                                inputProps={{}}
                            />
                            {touched.oldPassword && errors.oldPassword && (
                                <FormHelperText error id="standard-weight-helper-text-oldPassword-login">
                                    {errors.oldPassword}
                                </FormHelperText>
                            )}
                        </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={5}>
                        <FormControl
                            
                            error={Boolean(touched.newPassword && errors.newPassword)}
                           
                        >
                            <InputLabel htmlFor="outlined-adornment-newPassword-login">New Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-newPassword-login"
                                type='password'
                                value={values.newPassword}
                                name="newPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="newPassword"
                                inputProps={{}}
                            />
                            {touched.newPassword && errors.newPassword && (
                                <FormHelperText error id="standard-weight-helper-text-newPassword-login">
                                    {errors.newPassword}
                                </FormHelperText>
                            )}
                        </FormControl>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                            
                        )}
                        <div>
                        {success && <p className="suc-msg">{success}</p>}
                        {error && <p className="err-msg">{error}</p>}
                        </div>
                        <Box sx={{ mt: 2 }}>
                      
                            
                                <Button
                                    disableElevation
                                    size="medium"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    sx={{ backgroundColor:'#5e35b1' , borderRadius:'18px' }}
                                >
                                    Save Changes
                                </Button>
                        
                        </Box>

                    </form>
                )}
            </Formik>

</div>


    </MainCard>
  );
}
