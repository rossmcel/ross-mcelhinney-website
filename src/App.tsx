import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./app/home";
import { Navigation } from "./shared/components";
import { Projects } from "./app/projects";
import "./App.css";

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Projects" component={Projects} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
