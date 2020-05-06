import React, {Component} from 'react';
import SimpleAppBar from './utils/SimpleAppBar'
//import AppBar from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
//import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import Paper from '@material-ui/core/Paper';
import ForecastMain from './animation/ForecastMain';
import AnimationMain from './animation/AnimationMain';
import LocationListContainer from './containers/LocationListContainer';
import DraggableList from './cards/DraggableList';
import './App.css';
import ForecastExtended from './components/ForecastExtended';

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
  render(){
    return (
      <Grid>
        <SimpleAppBar title={"Weather App"}></SimpleAppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer
              cities={cities} >
            </LocationListContainer>
          </Col>
          <Col xs={12} md ={6}>
            <Paper elevation={3}>
              <div className="details">
                <ForecastExtendedContainer/>
              </div>
            </Paper>
          </Col>
        </Row>  
      </Grid>
    );
  }
}

//connect espera 2 funciones como param, y retorna otra funcion que espera un componente como param
export default App;

