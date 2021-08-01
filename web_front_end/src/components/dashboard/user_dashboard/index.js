import React from "react";
import { 
  BrowserRouter, 
  Route, 
  Switch, 
  Redirect 
} from "react-router-dom";

import AdminDashboard from "./Admin.js";

import "./dashboard.css";



export default function DashBoardIndex() {
  return (
    <div>
      <BrowserRouter>
    <Switch>
      <Route path="/user" component={AdminDashboard} />
      <Redirect from="/" to="/user/dashboard" />
    </Switch>
    </BrowserRouter>
    </div>
  )
}

