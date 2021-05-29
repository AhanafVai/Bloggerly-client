import { createSlice } from "@reduxjs/toolkit"
import URL from "../configs/api_endpoints"
import { apiCallBegan } from "./api.actions"

const slice = createSlice({
  name: "blogs",
  initialState: {
    articles: [],
    loading: false,
    bookmarks: [],
    bookmarksLoading: false,
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
    bookmarksRequested: blogs => {
      blogs.bookmarksLoading = true
    },
    bookmarksRequestFailed: blogs => {
      blogs.bookmarksLoading = false
    },
    bookmarksAdded: blogs => {
      blogs.bookmarksLoading = false
    },
    bookmarksReceived: (blogs, action) => {
      blogs.bookmarksLoading = false
      blogs.bookmarks = action.payload
    },
  },
})

const {
  blogsRequested,
  blogsRequestFailed,
  blogsReceived,
  bookmarksRequested,
  bookmarksRequestFailed,
  bookmarksAdded,
  bookmarksReceived,
} = slice.actions
export default slice.reducer

// Action Creator
export const LOAD_BLOGS = searchQuery => dispatch => {
  dispatch(
    apiCallBegan({
      url: `search?q=${searchQuery || "Technology"}&lang=en&${URL.API_TOKEN}`,
      onStart: blogsRequested.type,
      onSuccess: blogsReceived.type,
      onError: blogsRequestFailed.type,
    })
  )
}

export const LOAD_BOOKMARKS = () => dispatch => {
  const { email } = JSON.parse(sessionStorage.getItem("user"))
  dispatch(
    apiCallBegan({
      baseURL: URL.BACKEND_URL,
      url: `${URL.LOAD_BOOKMARK}?email=${email}`,
      onStart: bookmarksRequested.type,
      onSuccess: bookmarksReceived.type,
      onError: bookmarksRequestFailed.type,
    })
  )
}

export const ADD_BOOKMARK = blog => dispatch => {
  const user = JSON.parse(sessionStorage.getItem("user"))
  const bookmarkInfo = { ...blog, ...user }
  dispatch(
    apiCallBegan({
      baseURL: URL.BACKEND_URL,
      url: URL.ADD_BOOKMARK,
      method: "POST",
      data: bookmarkInfo,
      onStart: bookmarksRequested.type,
      onSuccess: bookmarksAdded.type,
      onError: bookmarksRequestFailed.type,
    })
  )
}

// Selectors
export const isBlogLoadingSelector = state => state.blogs.loading
export const blogsSelector = state => state.blogs.articles

export const isBookmarksLoadingSelector = state => state.blogs.bookmarksLoading
export const bookmarksSelector = state => state.blogs.bookmarks
