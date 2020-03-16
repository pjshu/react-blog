import React from 'react';
import Articles from './components/articleList';
import Archive from './components/Archive';
import Tag from "./components/tag/Tags";
import About from "./components/About";
import Article from './components/article';
import Home from './components/home/Home';
// import Nav from "./components/nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import router from './contants/router';
import './global.css';
import SideBar from "./components/SideBar";
import TopBar from "./components/topBar";
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <Router>
      <CssBaseline/>
      <TopBar/>
      <SideBar/>
      <Switch>
        <Route path={router.HOME} exact><Home/></Route>
        <Route>
          <Switch>
            <Route path={router.ARCHIVE}><Archive/></Route>
            <Route path={router.TAG}><Tag/></Route>
            <Route path={router.ABOUT}><About/></Route>
            <Route path={`${router.DETAIL}/:id`}><Article/></Route>
            <Route path={router.ARTICLES} exact><Articles/></Route>
          </Switch>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
