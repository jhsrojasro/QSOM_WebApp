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
    is_email_verified: false,
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
                is_email_verified: action.payload.is_email_verified,
                token: ''
            }
        },
        whoAmI: (state, action) => {
            const { id, email, is_email_verified } = action.payload;
            return {
                ...state,
                id,
                email,
                is_email_verified,
            };
        },
    },
});

export const {
    signIn,
    signUp,
    whoAmI,
} = userSlice.actions;

export const userReducer = userSlice.reducer;