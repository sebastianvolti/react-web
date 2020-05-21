import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
       <div>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={CustomersContainer}/>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:ci" render={props => <CustomerContainer ci={props.match.params.ci}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
 
}

export default App;
