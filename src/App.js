import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/login" children={<Login />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
