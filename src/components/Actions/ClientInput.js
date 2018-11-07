import React, { Component } from 'react';
import '../../App.css';
import Update from './Update'

var axios = require('axios');

class ClientInput extends Component {
    constructor() {
        super()
        this.state = {
          data: [],
          clients: ""
        }
      }
    async componentDidMount (){
        let data = await axios.get('http://localhost:8080/actions');
        this.setState({ data: data.data })
    }
    updateText = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    displayDataList(){
        return this.state.data.map(d =>{
            return (
              <option value={d.name} className="clientOption" >{d.name}</option>
            )
        })
    }
  render() {
    return (
        <div className="App">
            <h3 className="leftUpdate update">UPDATE</h3>        
            <p className="leftUpdate">Client: 
            <input list="clients" name="clients" className="updateClientName" placeholder="Client Name"onChange={this.updateText} value={this.state.clients}/>
            <datalist id="clients">
            {this.displayDataList()}
            </datalist></p>
            <Update client={this.state.clients}/>
        </div>
      
    );
  }
}

export default ClientInput;
