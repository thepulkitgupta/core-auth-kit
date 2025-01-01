import { createSlice } from '@reduxjs/toolkit'
import { deleteJwtTokenInCookies, retrieveJwtTokenFromCookies, saveJwtTokenInCookies } from '../utils/CookieJwtUtil';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
     isLoggedIn : retrieveJwtTokenFromCookies!=null, 
     themePreference : 'dark'
    },
    reducers: {
        loginOrRegister: (state,action)=>{
           state.isLoggedIn = true; 
           const {token} = action.payload;
           saveJwtTokenInCookies(token);
        }, 
        logout: state=>{
            state.isLoggedIn = false;
            deleteJwtTokenInCookies();
        }, 
        toggleTheme: (state)=>{
            let newTheme = state.themePreference === 'light' ? 'dark' : 'light';
            state.themePreference=newTheme
        }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { loginOrRegister, logout,toggleTheme } = userSlice.actions
  
  export default userSlice.reducer