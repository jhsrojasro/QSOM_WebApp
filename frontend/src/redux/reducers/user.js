/**
 * User Reducers
 */

// Redux Toolkit
import {
    createSlice,
} from '@reduxjs/toolkit';

const userInitialState = {
    id: '',
    email: '',
    firstname: '',
    lastname: '',
    city: '',
    country: '',
    institution: '',
    token: '',
}

const userSlice = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        signIn: (state, action) => {
            return {
                ...state,
                token: action.payload.token,
            };
        },
        signUp: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                city: action.payload.city,
                country: action.payload.country,
                institution: action.payload.institution,
                token: 'created'
            }
        },
        update: (state, action) => {
            console.log("action.payload: ", action.payload);
            console.log("state: ", state);
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                city: action.payload.city,
                country: action.payload.country,
                institution: action.payload.institution,
            }
        },
        whoAmI: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email, 
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                city: action.payload.city,
                country: action.payload.country,
                institution: action.payload.institution,
                
            };
        },
        logOut: (state, action) => {
            return {
                ...state,
                id: '',
                email: '',
                firstname: '',
                lastname: '',
                token: '',
            };
        }
    },
});

export const {
    signIn,
    signUp,
    whoAmI,
    logOut,
    update,
} = userSlice.actions;

export const userReducer = userSlice.reducer;