import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from './CoursesPage';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/courses" exact component={CoursesPage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route component={NotFoundPage}/> 
      </Switch>
    </div>
  );
}
export default App;
