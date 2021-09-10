import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Attendance from "./Attendance";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from 'react-router';

const App =() => {
    return(
        <>
        <Navbar/>
            <Switch>
                <Route path="/home" component= {Home}/> 
                <Route path="/about">
                    <About />
                </Route> 
                <Route path="/attendance" component= {Attendance}/> 
                <Route path="/contact" component= {Contact}/> 
            {/* <Redirect to= "/" /> */}
            </Switch>
        </>
    )
}

export default App;