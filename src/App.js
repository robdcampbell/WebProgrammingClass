import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PublicHomePage from "./pages/PublicHomePage";

import Error from "./pages/Error";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Syllabus from "./pages/Syllabus";
import { NavProvider } from "./context/NavContext";
import { CalcProvider } from "./context/CalcContext";

function App() {
  return (
    <BrowserRouter>
      <NavProvider>
        <CalcProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home-public" component={PublicHomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/syllabus" component={Syllabus} />
            <Route path="*" component={Error} />
          </Switch>
        </CalcProvider>
      </NavProvider>
    </BrowserRouter>
  );
}

export default App;
