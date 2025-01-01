import React from 'react';
import { useForm, Controller } from 'react-hook-form'; // Import necessary hooks from React Hook Form
import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { registerUser } from '../services/AuthService';
import { useNavigate } from 'react-router';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { loginOrRegister } from '../slices/UserSlice';
import { Link } from 'react-router';

function RegistrationFormComponent() {
  // 1. Set up form handling with React Hook Form's useForm hook
  const { handleSubmit, control, formState: { errors }, reset, watch } = useForm();
  const [registrationErrorMessage, setregistrationErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 2. Form submission function that logs form data
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      reset();
      dispatch(loginOrRegister(response));
      navigate('/home');
    }
    catch (error) {
      setregistrationErrorMessage(error.message);
    }
  };

  return (
    //Outer box to centeralise the full form
    <Box sx={{ maxWidth: '400px', width: '100%' }}>
      {/* 4. Page Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
      Welcome Aboard
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
      Your journey begins here.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)} // 3. Bind form submission to handleSubmit
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: 'auto',
          justifyContent: 'center',
        }}
      >
        {/* 5. Username Field */}
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: 'Username is required.' }} // Validation rule: required
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              variant="outlined"
              margin ='normal'
              error={!!errors.username} // Display error if name has an error
              helperText={errors.username?.message} // Show error message
              fullWidth
            />
          )}
        />
        {/* 6. Email Field */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required.', // Validation rule: required
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Enter a valid email address.', // Validation rule: valid email format
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email} // Display error if email has an error
              helperText={errors.email?.message} // Show error message
              fullWidth
            />
          )}
        />

        {/* 7. Password Field */}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required.', // Validation rule: required
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long.', // Validation rule: minLength
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password" // Make input type password
              label="Password"
              variant="outlined"
              error={!!errors.password} // Display error if password has an error
              helperText={errors.password?.message} // Show error message
              fullWidth
            />
          )}
        />

        {/* 8. Confirm Password Field */}
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: 'Confirm Password is required.',
            validate: (value) => {
              // Use watch to get the current value of the password field
              const password = watch('password'); // Watch the 'password' field
              if (value !== password) {
                return 'Passwords do not match.'; // Return error if passwords don't match
              }
              return true; // Validation passes if passwords match
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password" // Make input type password
              label="Confirm Password"
              variant="outlined"
              error={!!errors.confirmPassword} // Display error if confirm password has an error
              helperText={errors.confirmPassword?.message} // Show error message
              fullWidth
            />
          )}
        />

        {/* Registration Error Message  */}
        <Typography variant="caption" gutterBottom
          sx={{
            color: red[500],
            display: (!!registrationErrorMessage ? 'inline-block' : 'none')
          }}>
          {registrationErrorMessage}
        </Typography>

        {/* 9. Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>

        {/* Footer */}
        <Box
            sx={{
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                Already a member?{' '}
                <Button component={Link} to='/login' underline="hover">
                    Sign In
                </Button>
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RegistrationFormComponent;