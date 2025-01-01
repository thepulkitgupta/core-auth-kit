import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import { loginUser } from '../services/AuthService';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { loginOrRegister } from '../slices/UserSlice';

const LoginFormComponent = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loginErrorMessage, setLoginErrorMessage ] = useState(null);

    const onSubmit = async (data) => {
        try {
            const response = await loginUser(data);
            reset();
            dispatch(loginOrRegister(response));
            navigate('/home');
        }
        catch (error) {
            setLoginErrorMessage(error.message);
        }
    };

    return (
        <Box sx={{ maxWidth: '400px', width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome Back
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Please enter your details
        </Typography>

        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Please enter username'
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                )}
            />

            {/* Password Field */}
            <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Please enter password'
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                )}
            />
            {/* Login Error Message  */}
            <Typography variant="caption" gutterBottom
                sx={{
                    color: red[500],
                    display : (!!loginErrorMessage ?  'inline-block' : 'none' )
                }}>
                {loginErrorMessage}
            </Typography>


            {/* Sign In Button */}
            <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                sx={{ marginTop: 2 }}
            >
                Sign In
            </Button>
        </Box>

        {/* Forgot Password */}
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 2,
            }}
        >
            <Button href="#" underline="hover" variant="body2" disabled>
                Forgot Password?
            </Button>

        </Box>

        {/* Footer */}
        <Box
            sx={{
                marginTop: 3,
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                Don’t have an account?{' '}
                <Button component={Link} to='/register' underline="hover">
                    Sign up
                </Button>
            </Typography>
        </Box>
    </Box>
    );
};


export default LoginFormComponent;

//TODO Add the functinality for Forget Password