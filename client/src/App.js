import React from 'react';
import { BrowserRouter } from "react-router";
import { MyRouter } from './routes/MyRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useSelector } from 'react-redux'
import ResponsiveAppBarComponent from './components/ResponsiveAppBarComponent.js';
const App=() => {

// Access the user's theme preference from Redux state
const themePreference = useSelector((state) => state.user.themePreference); 

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
    },
    palette: {
        mode: themePreference
    },
    });
    
  return (
  
    <ThemeProvider theme={theme}>  {/* Provides a Global Material UI Theme */}
      <CssBaseline /> {/*Resets default browser styles */}
      <BrowserRouter> 
      <ResponsiveAppBarComponent/>
        <MyRouter /> 
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App