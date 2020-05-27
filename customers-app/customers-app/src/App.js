import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
  render() {
    return (
      <Router>
       <div>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomersContainer}/>
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer}/>
            <Route path="/customers/:ci" render={props => <CustomerContainer ci={props.match.params.ci}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
 
}

export default App;
