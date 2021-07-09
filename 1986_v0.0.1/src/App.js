import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [ {'plot': '1', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '2', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '3', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '4', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '5', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '6', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '7', 'level': '00', 'beds': '3', 'area': '70.5sqm'},
                    {'plot': '8', 'level': '00', 'beds': '3', 'area': '70.5sqm'},               
                  ]
    }
  }
    render() {
      return(
        <Container>
          {/* <Alert variant='dark'>model app</Alert> */}
          {/* <Jumbotron variant="dark">model app</Jumbotron> */}
          <DataTable data={this.state.apartments}/>
        </Container>
      )
    }
}

class DataTable extends React.Component {
  render() {
    const data = [...this.props.data];
    const lightBtn = <Button variant='outline-dark'>light</Button>
    const tableRows = data.map((apartment) =>
      <tr>
        <td>{lightBtn}</td>
        <td>plot {apartment.plot}</td>
        <td>level {apartment.level}</td>
        <td>beds {apartment.beds}</td>
        <td>area {apartment.area}</td>
      </tr>
    )
    return (
      <div>
      <Table  bordered hover size="sm" variant="light">
        {/* <thead>
          <tr>
            <th></th>
            <th>plot</th>
            <th>level</th>
            <th>level</th>
            <th>level</th>
          </tr>
        </thead> */}
        <tbody>
          {tableRows}
        </tbody>
      </Table>
    </div>
    )
  }
}

export default App;

