import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./store/configs/configureStore"
import "./styles/global.css"

const myStore = store()
const rootEl = document.getElementById("root")
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={myStore}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootEl
  )
}
if (module.hot) {
  module.hot.accept("./App.js", function () {
    setTimeout(render)
  })
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
