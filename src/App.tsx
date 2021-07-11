import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./app/home";
import { Projects } from "./app/projects";
import { Navigation } from "./shared/components/navigation";
import "./App.css";
import { Footer } from "./shared/components/footer";

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Projects" component={Projects} exact />
      </Switch>
    </div>
    <Footer topText="Created with React JS" bottomText="Version 1.0" />
  </BrowserRouter>
);

export default App;
