import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from "./PageNotFound";
import ManageCoursePage from './ManageCoursePage';
function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/courses" exact component={CoursesPage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="about"></Redirect>
        <Route component={NotFoundPage}/> 
      </Switch>
    </div>
  );
}
export default App;
