import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Clients from './components/Clients/Clients'
import Analytics from './components/Analytics'
import Actions from './components/Actions/Actions'
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="nav">
      {<Link to="/clients"><span className="navClient">Clients</span></Link>}
        {<Link to="/actions"><span className="navActions">Actions</span></Link>}
        {<Link to="/analytics"><span className="navAnalytics">Analytics</span></Link>}
        </div>
        
        {<Route path="/clients" exact component={Clients}/>}
        {<Route path="/actions" exact component={Actions}/>}
        {<Route path="/analytics" exact component={Analytics}/>}

      </div>
      </Router>
    );
  }
}

export default App;
