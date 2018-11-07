import React, { Component } from 'react';
import '../../App.css';

class ColumnHeaders extends Component {
  render() {
    return (
        <div className="App">
            <div className="columnHeaders Y head" >
            <span className="clientName">Name</span>
            <span className="clientSurname">Surname</span>
            <span className="clientCountry">Country</span>
            <span className="clientContact">First Contact</span>
            <span className="clientEmail">Email</span>
            <span className="clientSold">Sold</span>
            <span className="clientOwner">Owner</span>
            </div>
        </div>
      
    );
  }
}

export default ColumnHeaders;
