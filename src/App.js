import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar"
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () =>{
  return (
      <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact  path="/about" component ={About} />
      <Route exact path="/service" component ={Service} />
      <Route exact path="/contact" component ={Contact} />
      <Redirect to='/'/>
      
      </Switch>
      </>

  )
}
export default App;