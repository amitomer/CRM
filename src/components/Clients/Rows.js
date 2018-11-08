import React, { Component } from 'react';
import '../../App.css';
import Row from './Row'
var axios = require('axios');

class Rows extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
   componentDidMount= async ()=> {
      let data= await axios.get('/clients');
      this.setState({ data: data.data })
  }

  searchFits = (row)=>{
    let search= this.props.search.toLowerCase();
    let select=this.props.select;
    let finds;
    if (select == "surname"){finds= row.name.split(" ")[1].toLowerCase();}
    else if (select == "name"){finds= row.name.split(" ")[0].toLowerCase();}
    else {finds=row.country.toLowerCase();}
    return (finds.includes(search))
  }
  
  displayData = () => {
    let afterSearch=this.state.data.filter(r=> this.searchFits(r))
    return afterSearch.map(r => {
      return (<Row row={r}/>)
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.displayData()}
      </div>

    );
  }
}

export default Rows;
