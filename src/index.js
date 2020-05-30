import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {registerSentrySDK} from "./config/security";

registerSentrySDK();
// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }
const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
//
// ReactDOM.unstable_createRoot(
//   root
// ).render(<App/>);

