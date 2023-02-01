import axios from 'axios'
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography,
    
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom'
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets





const ForgotPassword = ({ ...others }) => {
    const theme = useTheme();
    const { token } = useParams()
   

    const handleSubmit = async (values) => {
        console.log('load')
        try {
            const response = await axios.post(`http://localhost:3001/auth/reset/${token}`, { password: values.password });
            if (response.data.msg === 'Password reset token is invalid or has expired') {
                console.log(response)
                
            } else {
                // success message
            }
        } catch (err) {
            console.error(err);
            console.log("Something went wrong. Please try again later.")
        }
        console.log('not load')
    };


    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={3}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1"></Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    password: '',
                    confirm_password: ''
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(25).required('Password is required'),
                    confirm_password: Yup.string().max(25).required('Confirm Password is required')

                })}
               
                onSubmit={handleSubmit}
                
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type="password"
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <FormControl fullWidth error={Boolean(touched.confirm_password && errors.confirm_password)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-confirm_password-login">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="confirm_password"
                                value={values.email}
                                name="confirm_password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Confirm Password"
                                inputProps={{}}
                            />
                            {touched.confirm_password && errors.confirm_password && (
                                <FormHelperText error id="standard-weight-helper-text-confirm_password-login">
                                    {errors.confirm_password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}


                      

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Save Changes
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ForgotPassword;






