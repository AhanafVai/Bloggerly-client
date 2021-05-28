import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
