import { combineReducers } from "redux"
import authReducer from "../reducers/auth.slice"
import blogsReducer from "../reducers/blogs.slice"

export default combineReducers({
  blogs: blogsReducer,
  auth: authReducer,
})
