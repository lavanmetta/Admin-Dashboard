import PropTypes from 'prop-types';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'
import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
// material-ui
import { Box, Card } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';


// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
    <Card sx={{ mb: 3, boxShadow: shadow }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 4.5,
                bgcolor: 'primary.light',
                color: 'grey.800'
            }}
        >
            <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
        </Box>
    </Card>
);

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};




// ============================|| UTILITIES SHADOW ||============================ //

const AddLocation = ({ ...others }) => {

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


      const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth/locations", data).then((response) => {
   
          if(response.status === 200) {
            setSuccess(response.data.msg)
           
            
          } else if (response.status === 400) {
          
            setError(response.data.error)
            
          } else {
            setError('Failed to add location')
          }
        })
      };


    return(
    <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    <div className="profile-manage-container">
      <Typography variant="h3" gutterBottom sx={{ marginBottom:'25px' }}>
        Add Locations
      </Typography>

     

      <Formik
      initialValues={{

        name:'',
        address:'',
        phone_number:'',
        longitude:'',
        latitude:'',
        radius_proximity:'',
        photos_videos:'',
        parent_location:'',
        description:''
       
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(),
        address: Yup.string().required(),
        phone_number: Yup.number()
        .min(10, "Must be more than 10 characters")
        .required("This field is required"),
        longitude: Yup.number().required(),
        latitude: Yup.number().required(),
        radius_proximity: Yup.number().required(),
        parent_location: Yup.string().required(),
        description: Yup.string().required(),
        photos_videos: Yup.mixed().required("A file is required")
      })}

      onSubmit={onSubmit}
  >
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          
          <form noValidate onSubmit={handleSubmit} {...others}>
          <Grid spacing={2} >
          <Grid container spacing={2} >
          <Grid item xs={12} sm={12} md={6}>
              <FormControl  fullWidth error={Boolean(touched.name && errors.name)}>
                  <InputLabel  htmlFor="outlined-adornment-name-register">Name</InputLabel>
                  <OutlinedInput
                     variant="outlined"
                      id="outlined-adornment-name-register"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      inputProps={{}}
                      
                  />
                  {touched.name && errors.name && (
                      <FormHelperText error id="standard-weight-helper-text--register">
                          {errors.name}
                      </FormHelperText>
                  )}
              </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth error={Boolean(touched.phone_number && errors.phone_number)} >
              <InputLabel htmlFor="outlined-adornment-phone_number-register">phone_number</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-phone_number-register"
                  type="number"
                  value={values.phone_number}
                  name="phone_number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.phone_number && errors.phone_number && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.phone_number}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop:'3px' }} >
              <Grid item xs={12} sm={12} md={12}>
              <FormControl fullWidth error={Boolean(touched.address && errors.address)} >
              <InputLabel htmlFor="outlined-adornment-address-register">address</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-address-register"
                  type="text"
                  value={values.address}
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                  variant="outlined"
              />
              {touched.address && errors.address && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.address}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>
              </Grid>

             
              <Grid container spacing={2} sx={{ marginTop:'3px' }} >
              <Grid item xs={12} sm={12} md={4}>
              <FormControl fullWidth error={Boolean(touched.longitude && errors.longitude)} >
              <InputLabel htmlFor="outlined-adornment-longitude-register">longitude</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-longitude-register"
                  type="number"
                  value={values.longitude}
                  name="longitude"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.longitude && errors.longitude && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.longitude}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
              <FormControl fullWidth error={Boolean(touched.latitude && errors.latitude)} >
              <InputLabel htmlFor="outlined-adornment-latitude-register">latitude</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-latitude-register"
                  type="number"
                  value={values.latitude}
                  name="latitude"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.latitude && errors.latitude && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.latitude}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>

              
              <Grid item xs={12} sm={12} md={4}>
              <FormControl fullWidth error={Boolean(touched.radius_proximity && errors.radius_proximity)} >
              <InputLabel htmlFor="outlined-adornment-radius_proximity-register">radius_proximity</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-radius_proximity-register"
                  type="number"
                  value={values.radius_proximity}
                  name="radius_proximity"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.radius_proximity && errors.radius_proximity && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.radius_proximity}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ marginTop:'3px' }} >
              <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth error={Boolean(touched.photos_videos && errors.photos_videos)} >
              <InputLabel htmlFor="outlined-adornment-photos_videos-register"></InputLabel>
              <OutlinedInput
                  id="outlined-adornment-photos_videos-register"
                  type="file"
                  value={values.photos_videos}
                  name="photos_videos"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.photos_videos && errors.photos_videos && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.photos_videos}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth error={Boolean(touched.parent_location && errors.parent_location)} >
              <InputLabel htmlFor="outlined-adornment-parent_location-register">parent_location</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-parent_location-register"
                  type="text"
                  value={values.parent_location}
                  name="parent_location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.parent_location && errors.parent_location && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.parent_location}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>
              </Grid>

              <Grid item xs={12} sx={{ marginTop:'20px' }} >
              <FormControl fullWidth error={Boolean(touched.description && errors.description)} >
              <InputLabel htmlFor="outlined-adornment-description-register">description</InputLabel>
              <OutlinedInput
                  id="outlined-adornment-description-register"
                  type="text"
                  value={values.description}
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
              />
              {touched.description && errors.description && (
                  <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.description}
                  </FormHelperText>
              )}
              </FormControl>
              </Grid>

              {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
              )}
              <Grid item xs={12} sx={{ marginTop:'5px' }} >
              {success && <p style={{fontSize:'16px', color:'rgb(0, 187, 0)', fontWeight:'500' }}>{success}</p>}
              {error && <p style={{fontSize:'16px', color:'red', fontWeight:'500' }} >{error}</p>}
              </Grid>
              <Grid item xs={12}>
              <Box sx={{ mt: 2 }}>
                  
                      <Button
                          disableElevation
                          size="large"
                          type="submit"
                          variant="contained"
                          color="secondary"
                      >
                         Add Location
                      </Button>
                  
              </Box>
              </Grid>

              </Grid>
          </form>
      )}
          </Formik>


    </div>
    
    </MainCard>
    )
}

export default AddLocation;