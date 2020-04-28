import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from './CoursesPage';

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage></CoursesPage>;
    if (route === "/about") return <AboutPage></AboutPage>;
    return <HomePage></HomePage>;
  }
  return (
    <div className="container-fluid">
      <Header></Header>
      {getPage()} {/*to call the function*/}
    </div>
  );
}
export default App;
