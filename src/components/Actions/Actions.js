import React, { Component } from 'react';
import '../../App.css';
import Add from './Add'
import ClientInput from './ClientInput'

class Actions extends Component {
  render() {
    return (
        <div className="App">
          <ClientInput />
          <Add />
        </div>
      
    );
  }
}

export default Actions;
