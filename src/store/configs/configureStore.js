import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "../configs/reducer"
import api from "../middlewares/api"

export default function store() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  })
}
