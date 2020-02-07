import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Archive from "./components/archive";
import Tag from "./components/Tag";
import About from "./components/About";
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import router from './contants/router';
import './global.css';


function App() {
  return (
    <Router>
      <Route><Nav/></Route>
      <Switch>
        <Route path={router.ARCHIVE}><Archive/></Route>
        <Route path={router.TAG}><Tag/></Route>
        <Route path={router.ABOUT}><About/></Route>
        <Route path={`${router.DETAIL}/:id`}><Detail/></Route>
        <Route path={router.HOME} exact><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
