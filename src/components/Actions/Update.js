import React, { Component } from 'react';
import '../../App.css';
var axios = require('axios');

class Update extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      owner: "",
      email: ""
    }
  }
  async componentDidMount() {
    let data = await axios.get('/actions');
    this.setState({ data: data.data })
  }
  updateText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  displayOwner = () => {
    return this.state.data.map(d => {
      return (
        <option className="owner" value={d.owner}>{d.owner}</option>
      )
    })
  }
  findClientIdByName = (name) => {
    let c = this.state.data.find(d => { return d.name == name });
    return (c._id);
  }
  changeOwner = async () => {
    if (!this.props.client || !this.state.owner)
    {
      alert('You must enter a client name and owner.')
      return;
    }
    const clientId = this.findClientIdByName(this.props.client);
    await axios.put(`/actions/owner/${clientId}`, { owner: this.state.owner });
    alert('The client has been updated.')
  }
  changeEmail = async () => {
    if (!this.props.client || !this.state.email)
    {
      alert('You must enter a client name and email type.')
      return;
    }
    const clientId = this.findClientIdByName(this.props.client);
    await axios.put(`/actions/email/${clientId}`, { emailType: this.state.email });
    alert('The client has been updated.')    
  }
  changeSold = async () => {
    if (!this.props.client)
    {
      alert('You must enter a client name.')
      return;
    }
    const clientId = this.findClientIdByName(this.props.client);
    await axios.put(`/actions/sold/${clientId}`);
    alert('The client has been updated.')
  }
  render() {

    return (
      <div className="App">
        <p className="pLeft">Transfer ownership to
                <select className="owners" name="owner" onChange={this.updateText}>
            {this.displayOwner()}
          </select>
          <span className="transfer" onClick={this.changeOwner}>TRANSFER</span>
        </p>
        <p className="pLeft">Send email:
                <select className="emailTypeDrop" name="email" onChange={this.updateText}>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
          </select>
          <span className="send" onClick={this.changeEmail}>SEND</span>
        </p>
        <p className="pLeft">Declare sale!
           <span className="declare" onClick={this.changeSold}>DECLARE</span>
        </p>
      </div>

    );
  }
}

export default Update;
