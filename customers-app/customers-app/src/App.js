import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customer List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
       <div>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}/>
            <Route path="/customers/:ci" component={this.renderCustomerContainer}/>
            <Route path="/customers" component={CustomersContainer}/>
            <Route path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
 
}

export default App;
