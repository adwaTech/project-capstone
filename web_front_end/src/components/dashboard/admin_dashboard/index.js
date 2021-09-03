import React from "react";
import { 
  BrowserRouter, 
  Route, 
  Switch, 
  Redirect 
} from "react-router-dom";

import AdminDashboard from "./Admin.js";

// import "./dashboard.css";



export default function DashBoardIndex() {
  return (
    <div>
      <BrowserRouter>
    <Switch>
      <Route path="/admin" component={AdminDashboard} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
    </BrowserRouter>
    </div>
  )
}

