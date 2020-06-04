import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {registerSentrySDK} from "./config/security";

registerSentrySDK();

const root = document.getElementById('root');

// ReactDOM.render(<App/>, root);

ReactDOM.unstable_createRoot(
  root
).render(<App/>);

