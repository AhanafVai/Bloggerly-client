import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { userData: null, isSignedIn: false },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { setSignedIn, setUserData } = authSlice.actions

export const selectSignedIn = state => state.auth.isSignedIn
export const selectUserData = state => state.auth.userData

export default authSlice.reducer
