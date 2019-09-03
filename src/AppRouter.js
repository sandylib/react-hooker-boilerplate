import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    BookComponent,
    UserComponent,
    Home
} from './components/';


const  AppRouter = () => {
    return (
        <Router>
            <div>

            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>

        <hr />
            
           

            <Route exact path="/" component={Home} />
            <Route path="/user" component={UserComponent} />
            <Route path="/book" component={BookComponent} />
            </div>
            
        </Router>
    )
}

export default AppRouter;
