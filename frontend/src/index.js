/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SiteLayout from "layouts/SiteLayout.js";


import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { Provider } from 'react-redux'
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById("root"));


// console.log("PROTOCOL: "+process.env.REACT_APP_PROTOCOL)
// console.log("BACKEND_HOST: "+process.env.REACT_APP_BACKEND_HOST)
// console.log("BACKEND_PORT: "+process.env.REACT_APP_BACKEND_PORT)

root.render(
  <Provider store={store}>
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/login" render={(props) => }/> */}
            <Route path="/" render={(props) => <SiteLayout {...props} />} />
            <Redirect from="/" to={store.getState().user.token ? "/home" : "/login"} />
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  </Provider>
);
