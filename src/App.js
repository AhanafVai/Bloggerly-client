import { BrowserRouter, Route, Switch } from "react-router-dom"
import BookmarkPage from "./pages/BookmarkPage"
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import PrivateRoute from "./pages/Login/PrivateRoute"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/login" children={<Login />} />
        <PrivateRoute exact path="/bookmarks" children={<BookmarkPage />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
