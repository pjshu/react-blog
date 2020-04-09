import React, {useEffect, useReducer} from 'react';
import Articles from './components/articleList';
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
import Footer from "./Footer";
import {Context, defaultValue, reducer, TYPE, useMethods} from './context';
import axios from "./helpers/http";
import api from "./contants/api";


const App = React.memo(function App() {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  return (
    <Context.Provider value={{state, dispatch}}>
      <ContextApp/>
    </Context.Provider>
  );
});

const ContextApp = React.memo(function ContextApp() {
  const [, setState] = useMethods(TYPE.userInfo);

  useEffect(() => {
    axios.get(api.about).then(res => {
      setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, [setState]);

  return (
    <Router>
      <CssBaseline/>
      <TopBar/>
      <SideBar/>
      <Switch>
        <Route path={router.HOME} exact><Home/></Route>
        <Route>
          <Switch>
            <Route path={router.TAG}><Tag/></Route>
            <Route path={router.ABOUT}><About/></Route>
            <Route path={`${router.DETAIL}/:id`}><Article/></Route>
            <Route path={router.ARTICLES} exact><Articles/></Route>
          </Switch>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
});

export default App;
