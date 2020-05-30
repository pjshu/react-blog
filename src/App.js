import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import router from './contants/router';
import SideBar from "./components/SideBar";
import TopBar from "./components/topBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/footer";
import Provider from './context';
import {hot} from 'react-hot-loader';
import ErrorBoundary from './components/ErrorBoundaries';
import Loading from "./components/Loading";
import {ReactQueryConfigProvider} from 'react-query';
import './style/global.css';


const Article = React.lazy(() => import('./components/article'));
const Articles = React.lazy(() => import('./components/articles'));
const Tags = React.lazy(() => import('./components/tags'));
const About = React.lazy(() => import('./components/about'));
const Home = React.lazy(() => import('./components/home/Home'));
const PortalMessage = React.lazy(() => import('./components/Message'))

const queryConfig = {
  suspense: true,
  refetchOnWindowFocus: false,
};

const App = React.memo(function App() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading/>}>
        <ReactQueryConfigProvider config={queryConfig}>
          <Provider>
            <Router>
              <CssBaseline/>
              <TopBar/>
              <SideBar/>
              <Switch>
                <Route path={router.HOME} exact><Home/></Route>
                <Route>
                  <Switch>
                    <Route path={router.TAG}><Tags/></Route>
                    <Route path={router.ABOUT}><About/></Route>
                    <Route path={`${router.DETAIL}/:id`}><Article/></Route>
                    <Route path={router.ARTICLES} exact><Articles/></Route>
                  </Switch>
                  <PortalMessage/>
                </Route>
              </Switch>
              <Footer/>
            </Router>
          </Provider>
        </ReactQueryConfigProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
});

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;

