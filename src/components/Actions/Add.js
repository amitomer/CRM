import React, { Component } from 'react';
import '../../App.css';
var axios = require('axios');


class Add extends Component {
  constructor() {
    super()
    this.state = {
      owner: "",
      name: "",
      surname: "",
      country: "", 
      id: 0
    }
  }
  updateText = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  addClient = async ()=>{
    let name = this.state.name;
    name= name.charAt(0).toUpperCase() + name.slice(1);
    let surname = this.state.surname;
    surname= surname.charAt(0).toUpperCase() + surname.slice(1);
    name=name+" "+surname;
    let country = this.state.country;
    country= country.charAt(0).toUpperCase() + country.slice(1);    
    let owner = this.state.owner;
    owner= owner.charAt(0).toUpperCase() + owner.slice(1);   
    let id=this.state.id;
    if (!name || !surname || !country || !owner){
      alert("must fill out all the fields.")
      return;
    }
    await axios.post('/actions/add', {_id: id, name:name, country:country, owner:owner, firstContact:"2018-03-04T22:00:00.000Z", sold:false, emailType:null});
    id++;
    this.setState({id: id})
  }
  render() {
    return (
        <div className="App">
        <p className="line">____________________________________________</p>
          <h3 className="leftUpdate">ADD</h3>       
          <p className="leftUpdate">First name: <input type="text" name="name" onChange={this.updateText} /></p>
          <p className="leftUpdate">Surname: <input type="text" name="surname" onChange={this.updateText} /></p>
          <p className="leftUpdate">Country: <input type="text" name="country" onChange={this.updateText} /></p>
          <p className="leftUpdate">Owner: <input type="text" name="owner" onChange={this.updateText} /></p>
          <button className="addClient leftUpdate" onClick={this.addClient}>Add New Client</button> <p></p>
        </div>

      
    );
  }
}

export default Add;
