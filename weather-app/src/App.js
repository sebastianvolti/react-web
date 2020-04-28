import React, {Component} from 'react';
import SimpleAppBar from './utils/SimpleAppBar'
//import AppBar from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
//import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import Paper from '@material-ui/core/Paper';
import ForecastMain from './animation/ForecastMain'
import AnimationMain from './animation/AnimationMain'
import DraggableList from './cards/DraggableList'

import './App.css';

const cities = [
  "Montevideo,uy",
  "Buenos Aires,ar",
  "Santa Catarina,br",
  "Rio de Janeiro,br",
  "Oranjestad,aru",
];

//Ciclo de vida:
//  Orden de ejecuciones y renderizado:
//  constructor (app.js)
//  state = ..
//  render
//    component1 ->
//                render ..
//    component2 -> 
//                render ..

class App extends Component {
  constructor() {
    super();
    this.state = { city: null}
  }

  handleSelectionLocation = city => {
    this.setState({city:city});
    console.log(`handleSelectionLocation ${city}`);
  };


  //render(){
  //  const {city} = this.state;
  //  return (
  //    <Grid>
  //      <AppBar position="static">
  //        <Toolbar className="nav-bar">
  //          <Typography variant="title" color="initial">
  //            <span className="titleText"> Weather App</span>
  //          </Typography>
  //        </Toolbar>
  //      </AppBar>
  //      <Row>
  //        <Col xs={12} md={6}>
  //          <LocationList 
  //            cities={cities} 
  //            onSelectedLocation={this.handleSelectionLocation}>
  //          </LocationList>
  //        </Col>
  //        <Col xs={12} md ={6}>
  //            <div className="details">
  //              {
  //                city === null ?  <h1>No se seleccionó ciudad</h1> : <ForecastExtended city={city}></ForecastExtended>
  //              }
  //            </div>
  //        </Col>
  //      </Row>  
  //    </Grid>
  //  );
  //}

  render(){
    const {city} = this.state;
    return (
      <Grid>
        <SimpleAppBar title={"Weather App"}></SimpleAppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md ={6}>
            <Paper elevation={3}>
              <div className="details">
                {
                  city === null ? <AnimationMain></AnimationMain> : <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>  
      </Grid>
    );
  }
}



export default App;
