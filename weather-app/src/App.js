import React from 'react';
import AppBar from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Montevideo,uy",
  "Buenos Aires,ar",
  "Santa Catarina,br",
  "Rio de Janeiro,br",
  "Oranjestad,aru",
];

function App() {

  const handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  };

    return (
      <Grid>
          <AppBar position="static">
            <Toolbar className="nav-bar">
              <Typography variant="title" color="initial">
                <span className="titleText"> Weather App</span>
              </Typography>
            </Toolbar>
          </AppBar>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md ={6}>
              <div className="details"></div>
          </Col>
        </Row>  
      </Grid>
    
    );

}

export default App;
