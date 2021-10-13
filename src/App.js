import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    useRouteMatch, 
    useParams
} from "react-router-dom";
import Appointments from "./components/Appointments";
import Events from "./components/Events";
import Doctors from "./components/Doctors";
import Clients from "./components/Clients";

export default function App() {
    return (
        <Router>
            <div className = "text-left">
              <nav className="navbar mr-auto navbar-dark bg-dark">
                <button type="button" className="btn btn-outline-success btn-lg"><Link to="/appointments">Appointments</Link></button>
                <button type="button" className="btn btn-outline-success btn-lg"><Link to="/events">Events</Link></button>
                <button type="button" className="btn btn-outline-success btn-lg"><Link to="/doctors">Doctors</Link></button>
                <button type="button" className="btn btn-outline-success btn-lg"><Link to="/clients">Clients</Link></button>
              </nav>
                <Switch>
                    <Route path="/appointments">
                        <Appointments />
                    </Route>
                    <Route path="/events">
                        <Events />
                    </Route>
                    <Route path="/doctors">
                        <Doctors />
                    </Route>
                    <Route path="/clients">
                        < Clients />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
