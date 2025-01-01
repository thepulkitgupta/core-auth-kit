import React from 'react';
import { Box, Typography, Grid2 as Grid, useTheme } from '@mui/material';

const SplitScreenComponent = ({ LeftComponent, imageUrl }) => {

    const theme = useTheme();

    return (
        <Grid container spacing={0} sx={{ height: '100vh' }}>
            {/* Left Section: Login Form */}
            <Grid size={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                <LeftComponent />
            </Grid>

            {/* Right Section: Placeholder for an Image */}
            <Grid
                size={6}
                sx={{
                    display: { xs: 'none', md: 'flex' }, // Hide on small screens
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.palette.text.secondary

                }}
            >
                {/* Placeholder Box for Image */}
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                      
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6" color="text.secondary">
                        {imageUrl}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};


export default SplitScreenComponent;