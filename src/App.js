import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Home from "./components/home/Home";
import TopMenu from "./components/topMenu/TopMenu";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { withCookies } from "react-cookie";
function App(props) {
  const [auth, updateAuth] = useState(false);

  const setAuth = a => {
    updateAuth(a);
  };

  const state = { auth: auth, setAuth: setAuth };
  return (
    <div className="App">
      <AuthContext.Provider value={state}>
        <TopMenu />
        <ToastContainer />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
