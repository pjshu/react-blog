import React from 'react';
import Articles from './components/Articles';
import Test from './components/archive/Test';
import Tag from "./components/tag/Tags";
import About from "./components/About";
import Detail from './components/Detail';
import Home from './components/home/Home';
import Nav from "./components/nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import router from './contants/router';
import './global.css';
import Test2 from './components/Test'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={router.HOME} exact><Home/></Route>
        <Route>
          <Nav/>
          <Switch>
            <Route path={router.ARCHIVE}><Test/></Route>
            <Route path={router.TAG}><Tag/></Route>
            <Route path={router.ABOUT}><About/></Route>
            <Route path={`${router.DETAIL}/:id`}><Detail/></Route>
            <Route path={router.ARTICLES} exact><Articles/></Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
