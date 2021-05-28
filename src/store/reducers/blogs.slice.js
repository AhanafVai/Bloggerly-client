import { createSlice } from "@reduxjs/toolkit"
import URL from "../configs/api_endpoints"
import { apiCallBegan } from "./api.actions"

const slice = createSlice({
  name: "blogs",
  initialState: {
    articles: [],
    loading: false,
  },
  reducers: {
    blogsRequested: blogs => {
      blogs.loading = true
    },
    blogsRequestFailed: blogs => {
      blogs.loading = false
    },
    blogsReceived: (blogs, action) => {
      blogs.loading = false
      blogs.articles = action.payload.articles
    },
  },
})

const { blogsRequested, blogsRequestFailed, blogsReceived } = slice.actions
export default slice.reducer

// Action Creator
export const LOAD_BLOGS =
  (searchQuery = "Technology") =>
  dispatch => {
    dispatch(
      apiCallBegan({
        url: `search?q=${searchQuery}&lang=en&${URL.API_TOKEN}`,
        onStart: blogsRequested.type,
        onSuccess: blogsReceived.type,
        onError: blogsRequestFailed.type,
      })
    )
  }

// Selectors
export const isBlogLoadingSelector = state => state.blogs.loading
export const blogsSelector = state => state.blogs.articles
