import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
// import Jumbotron from "react-bootstrap/Jumbotron";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [ {'plot': '1', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '2', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '3', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '4', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '5', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '6', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '7', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '8', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '9', 'level': '00', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '10', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '11', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '12', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '13', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '14', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '15', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '16', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},   
                    {'plot': '17', 'level': '01', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '18', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '19', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '20', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '21', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '22', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},
                    {'plot': '23', 'level': '02', 'beds': '3', 'area': '70.5sqm', 'block': 'A'},              
                  ]
    }
  }
    render() {
      return(
        <Container className='container'>
          <Alert className='alert' variant='outline-dark'>Brunswick house b_0.1</Alert>
          {/* <Jumbotron variant="dark">model app</Jumbotron> */}
          <Floors data={this.state.apartments}/>
          <br />
          <hl />
          <Top data={this.state.apartments}/>
        </Container>
      )
    }
}

class Floors extends React.Component {
  render() {
    const data = [...this.props.data];    
    const level00Buttons = data.filter(apartment => apartment.level === '00').map((apartment) =>
        <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    const level01Buttons = data.filter(apartment => apartment.level === '01').map((apartment) =>
    <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    const level02Buttons = data.filter(apartment => apartment.level === '02').map((apartment) =>
      <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    return (
      <div>
      {/* <Table  bordered hover size="sm" variant="light"> */}
      <Table hover  variant="">
        <thead>
          <tr>
            {/* <th></th> */}
            {/* <th>Apartment</th>
            <th>Level</th>
            <th>Block</th>
            <th>Number of bedrooms</th>
            <th>Net Internal Area</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>L 00</td>
            {level00Buttons}
          </tr>
          <tr>
            <td>L 01</td>
            {level01Buttons}
          </tr>
          <tr>
            <td>L 02</td>
            {level02Buttons}
          </tr>
        </tbody>
      </Table>
    </div>
    )
  }
}

class Top extends React.Component {
  render() {
    const data = [...this.props.data];    
    const level00Buttons = data.filter(apartment => apartment.level === '00').map((apartment) =>
        <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    const level01Buttons = data.filter(apartment => apartment.level === '01').map((apartment) =>
    <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    const level02Buttons = data.filter(apartment => apartment.level === '02').map((apartment) =>
      <td><Button variant='light'>No {apartment.plot}</Button></td>
    )
    return (
      <div>
      {/* <Table  bordered hover size="sm" variant="light"> */}
      <Tabs>
        <Tab eventKey="floors" title="Floors">
        <Table hover  variant="">
          <thead>
            <tr>
              {/* <th></th> */}
              {/* <th>Apartment</th>
              <th>Level</th>
              <th>Block</th>
              <th>Number of bedrooms</th>
              <th>Net Internal Area</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>L 00</td>
              {level00Buttons}
            </tr>
            <tr>
              <td>L 01</td>
              {level01Buttons}
            </tr>
            <tr>
              <td>L 02</td>
              {level02Buttons}
            </tr>
          </tbody>
        </Table>
        </Tab>
        <Tab eventKey="bedrooms" title="Bedrooms">
          
        </Tab>
        <Tab eventKey="beds" title="Contact" >
          
        </Tab>
      </Tabs>
    </div>
    )
  }
}

export default App;

