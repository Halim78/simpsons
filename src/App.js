import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Quote from "./Quote";
import Lamp from './Lamp';

class App extends Component {

  constructor(){
    super();
    this.state = {
      working : true
    };
  }

  travailleClick = () => {
    this.setState ({ 
      working : !this.state.working 
    });
  };


  render() {
    const pause = this.state.working ? 'travaille' : 'en pause !!!';
    const visuel = this.state.working ? 'App-logo' : 'Taf-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={visuel} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={() => this.travailleClick()}>
        {pause.toUpperCase()}
        </button>
       
        <Quote />
        <Lamp on/>
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;
