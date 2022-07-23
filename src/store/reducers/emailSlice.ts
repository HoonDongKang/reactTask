import { createSlice } from '@reduxjs/toolkit'

export interface EmailState {
    emailValue: string
}

const initialState: EmailState = {
    emailValue: '',
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        //action
        setEmail: (state, payload) => {
            state.emailValue = payload.payload
        },
    },
})

export const { setEmail } = emailSlice.actions

export default emailSlice.reducer
