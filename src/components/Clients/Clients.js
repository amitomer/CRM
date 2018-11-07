import React, { Component } from 'react';
import '../../App.css';
import ColumnHeaders from './ColumnHeaders'
import Rows from './Rows'


class Clients extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      select: "name"
    }
  }
  updateText = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input type="text" className="search" value={this.state.search} placeholder="Search" onChange={this.updateText} />
        <select className="select" onChange={this.updateText}>
          <option value="name">Name</option>
          <option value="surname">Surname</option>
          <option value="country">Country</option>
        </select>
        <ColumnHeaders />
        <Rows search={this.state.search} select={this.state.select}/>
      </div>

    );
  }
}

export default Clients;
