import React from 'react'
import SplitScreenComponent from '../components/SplitScreenComponent'
import LoginFormComponent from '../components/LoginFormComponent'

export const LoginPage =() => {
  return (
     <SplitScreenComponent LeftComponent={LoginFormComponent} imageUrl={"Login Page Image"}/>
  )
}