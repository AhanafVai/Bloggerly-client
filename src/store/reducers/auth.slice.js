import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "auth",
  initialState: { userData: null, isSignedIn: false },
  reducers: {},
})

export default slice.reducer
