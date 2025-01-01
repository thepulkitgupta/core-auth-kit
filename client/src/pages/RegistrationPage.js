import React from 'react';
import SplitScreenComponent from '../components/SplitScreenComponent';
import RegistrationFormComponent from '../components/RegistrationFormComponent';

export default function RegistrationPage() {
  return (
      <SplitScreenComponent LeftComponent={RegistrationFormComponent} imageUrl={"Register Page Image"}/>
  )
}

