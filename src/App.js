import React from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Archive from "./components/Archive";
import Tag from "./components/Tag";
import About from "./components/About";
import Detail from './components/Detail';
import Admin from "./components/admin/Admin";
import AdminNav from './components/admin/Nav';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import router from './contants/router';


function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route><Nav/></Route>
          <Switch>
            <Route path={router.ARCHIVE}><Archive/></Route>
            <Route path={router.TAG}><Tag/></Route>
            <Route path={router.ABOUT}><About/></Route>
            <Route path={`${router.DETAIL}/:id`}><Detail/></Route>
            <Route path={router.HOME}><Home/></Route>
          </Switch>
        </Route>
        <Route>
          <Route><AdminNav/></Route>
          <Switch>
            <Router>
              <Route path={router.ADMIN}><Admin/></Route>
            </Router>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
