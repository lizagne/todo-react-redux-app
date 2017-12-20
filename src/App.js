import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Input from "./components/Input";
import All from "./containers/All";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
        <All />
      
      </div>
    );
  }
}

export default App;
