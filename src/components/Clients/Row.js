import React, { Component } from 'react';
import '../../App.css';
var axios = require('axios');
 
class Row extends Component {
  constructor() {
    super()
    this.state = {
      popup: false,
      name: "",
      surname: "",
      country: ""
    }
  }
  componentDidMount(){
    this.setState({ name: this.props.row.name.split(" ")[0] })
    this.setState({ surname: this.props.row.name.split(" ")[1] })
    this.setState({ country: this.props.row.country })
  }
  updateText = (event) => {
    this.setState({
      [event.target.className]: event.target.value
    })
  }
  
  popUp = () => {
    this.setState({popup: !this.state.popup})
  }
  updateClient = async () => {
    if (!this.state.name || !this.state.surname || !this.state.country)
    {
      alert('You must enter all 3 fields.')
      this.popUp();
      return;
    }
    let clientId = this.props.row._id;
    let country = this.state.country;
    country= country.charAt(0).toUpperCase() + country.slice(1);
    let name = this.state.name;
    name= name.charAt(0).toUpperCase() + name.slice(1);
    let surname = this.state.surname;
    surname= surname.charAt(0).toUpperCase() + surname.slice(1);
    name=name+" "+surname;
    await axios.put(`/client/update/${clientId}`, { name: name, country:country });
    this.updateClientScreen(name, country);
    alert('The client has been updated.')
    this.popUp();
  }
  updateClientScreen =(name, country)=>{
    this.props.row.name=name;
    this.props.row.country=country;
  }

  render() {
    
    let r=this.props.row;
    let name = r.name.split(" ");
    let date = r.firstContact;
    date = date.charAt(8) + date.charAt(9) + "/" + date.charAt(5) + date.charAt(6) + "/" + date.charAt(0) + date.charAt(1) + date.charAt(2) + date.charAt(3)
    return (
      <div className="App">
        <div className="columnHeaders" onClick={this.popUp}>
          <span className="clientName">{name[0]}</span>
          <span className="clientSurname">{name[1]}</span>
          <span className="clientCountry">{r.country}</span>
          <span className="clientContact">{date}</span>
          <span className="clientEmail">{r.emailType ? r.emailType : "-"}</span>
          <span className="clientSold">{r.sold ? "✓" : "-"}</span>
          <span className="clientOwner">{r.owner}</span>
        </div>

      {this.state.popup ? 
        <div className="outterPop">
        <div className="pop-up">
          <p className="popName">Name: </p><input type="text" className="name" defaultValue={this.state.name} onChange={this.updateText} />
          <p className="popSur">Surname: </p><input type="text" className="surname" defaultValue={this.state.surname} onChange={this.updateText} />
          <p className="popCount">Country: </p><input type="text" className="country" defaultValue={this.state.country} onChange={this.updateText} />
          <button onClick={this.popUp} className="closePop">X</button>
          <button className="updateClient" onClick={this.updateClient}>Update</button>
        </div>
      </div>
        
        : null}
      
        
      </div>

    );
  }
}

export default Row;
