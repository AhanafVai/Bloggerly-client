import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "blogs",
  initialState: {
    totalArticles: 0,
    articles: [],
    loading: false,
  },
  reducers: {},
})

export default slice.reducer
