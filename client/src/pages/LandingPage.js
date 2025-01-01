import React from "react";
import Box from '@mui/material/Box';
import { Typography,Button } from "@mui/material";
import { Link } from "react-router";

export const LandingPage = () => {

    return (
        <Box
            sx={{
                height: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
                // backgroundImage: 'url(/images/background.jpg)', // Replace with your image URL
                // backgroundSize: 'cover', // Ensure image covers the entire area
                // backgroundPosition: 'center', // Center the image
                display: 'flex', // Flexbox for centering content
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                textAlign: 'center', // Align text to center
            }}
        >
            <Box>
                {/* Tagline */}
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Welcome to My Project
                </Typography>

                {/* Subheading */}
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Building the future, one step at a time.
                </Typography>

                {/* Call-to-Action Button */}
                <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    sx={{
                        borderRadius: '25px', // Rounded button
                    }}
                    component = {Link}
                    to='/home'
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
}