import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Simulation from './SimulationComponent';
import Home from './HomeComponent';

class Main extends Component {

  render(){

    const AboutUs = () => {
      return(
        <About/>
      );
    }

    const HomePage = () => {
      return(
        <Home/>
      );
    }
    
    const AppSimulation = () => {
      return(
        <Simulation/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/app-simulation" component={AppSimulation}/>
          <Redirect from='/' to='/home'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;