import React from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LandingPage } from "../pages/LandingPage";
import RegistrationPage from "../pages/RegistrationPage";
import { LoginPage } from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

export const MyRouter = () => {
    return (
        <Routes>
            {/* Open Routes */}
            <Route index element={<LandingPage />} />
            <Route path ="register" element={<RegistrationPage/>}/>
            <Route path ="login" element={<LoginPage/>}/>

            {/* Protected Routes */}
            <Route path="home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            
        </Routes>

    )
}