import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PublicHomePage from "./pages/PublicHomePage";
import Class1 from "./pages/Class1";
import Class2 from "./pages/Class2";

import Error from "./pages/Error";
import About from "./pages/About";
import Resources from "./pages/Resources";
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
            <Route exact path="/class1" component={Class1} />
            <Route exact path="/class2" component={Class2} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/syllabus" component={Syllabus} />
            <Route path="*" component={Error} />
          </Switch>
        </CalcProvider>
      </NavProvider>
    </BrowserRouter>
  );
}

export default App;
