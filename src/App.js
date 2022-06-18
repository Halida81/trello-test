import { Redirect, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/pages/loginPage/SignIn";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Redirect to="loginPage" />
      </Route>
      <Route path="/loginPage">
        <SignIn />
      </Route>

      <Route path="/todo" exact>
        <Main />
      </Route>
    </div>
  );
}

export default App;
