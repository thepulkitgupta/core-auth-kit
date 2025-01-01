import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getUserDetails } from "../services/AuthService";

export const HomePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetails();
                setUser(JSON.stringify(response));
            } catch (error) {
                console.log("Unable to fetch the user details", error.message);
            }
        }
        fetchUserDetails();
    }, []);

    return (
        <Box
            sx={{
                height: '100vh', // Full viewport height
                width: '100vw', // Full viewport width
                display: 'flex', // Flexbox for centering content
                flexDirection:'column',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                textAlign: 'center', // Align text to center
            }}
        >
            <Typography variant="h2">Welcome to the Home Page.</Typography>
            <Typography variant="body">
                {user}
            </Typography>
        </Box>
    )
}