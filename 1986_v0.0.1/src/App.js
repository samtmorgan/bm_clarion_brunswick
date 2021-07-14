import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
// import Jumbotron from "react-bootstrap/Jumbotron";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Badge from 'react-bootstrap/Badge'




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
                  ]
    }
  }
    render() {
      return(
        <Container className='container'>
          <Alert className='alert' variant='outline-dark'>Brunswick house</Alert>
          {/* <Jumbotron variant="dark">model app</Jumbotron> */}
          <DataTable data={this.state.apartments}/>
        </Container>
      )
    }
}

class DataTable extends React.Component {
  render() {
    const data = [...this.props.data];
    // const lightBtn = <Button variant='outline-dark'>light</Button>

    // const lightBtn = <Button variant='dark'>{this.props.plot}</Button>

    const tableRows = data.map((apartment) =>
      <tr>
        {/* <td><lightBtn plot={apartment.plot} /></td> */}
        {/* <td>{lightBtn plot=apartment.plot}</td> */}
        {/* <td>plot {apartment.plot}</td> */}
        <td><Button variant='light'>Apartment {apartment.plot}</Button></td>
        <td>Level {apartment.level}</td>
        <td>Block {apartment.block}</td>
        <td> {apartment.beds} Bed</td>
        <td> {apartment.area}</td>
      </tr>
    )
    return (
      <div>
      {/* <Table  bordered hover size="sm" variant="light"> */}
      <Table hover  variant="">
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Apartment</th>
            <th>Level</th>
            <th>Block</th>
            <th>Number of bedrooms</th>
            <th>Net Internal Area</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
    )
  }
}

export default App;

