import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Badge from 'react-bootstrap/Badge';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [ 
                    {plotNumber:'B 0-1',level:'0',block:'B',number:'39',beds:'2',area:69.9},
                    {plotNumber:'B 0-2',level:'0',block:'B',number:'40',beds:'2',area:65},
                    {plotNumber:'B 0-3',level:'0',block:'B',number:'41',beds:'1',area:51.3},
                    {plotNumber:'B 0-4',level:'0',block:'B',number:'42',beds:'2',area:76.4},
                    {plotNumber:'B 0-5',level:'0',block:'B',number:'43',beds:'2',area:76},
                    {plotNumber:'B 0-6',level:'0',block:'B',number:'44',beds:'1',area:53.5},
                    {plotNumber:'B 0-7',level:'0',block:'B',number:'45',beds:'2',area:65},
                    {plotNumber:'B 0-8',level:'0',block:'B',number:'46',beds:'2',area:69},
                    {plotNumber:'B 0-9',level:'0',block:'B',number:'47',beds:'1',area:55.3},
                    {plotNumber:'B 1-1',level:'1',block:'B',number:'48',beds:'1',area:68.8},
                    {plotNumber:'B 1-2',level:'1',block:'B',number:'49',beds:'2',area:83.8},
                    {plotNumber:'B 1-3',level:'1',block:'B',number:'50',beds:'2',area:65},
                    {plotNumber:'B 1-4',level:'1',block:'B',number:'51',beds:'1',area:51.3},
                    {plotNumber:'B 1-5',level:'1',block:'B',number:'52',beds:'2',area:76.4},
                    {plotNumber:'B 1-6',level:'1',block:'B',number:'53',beds:'2',area:76},
                    {plotNumber:'B 1-7',level:'1',block:'B',number:'54',beds:'1',area:53.5},
                    {plotNumber:'B 1-8',level:'1',block:'B',number:'55',beds:'2',area:65},
                    {plotNumber:'B 1-9',level:'1',block:'B',number:'56',beds:'2',area:83.8},
                    {plotNumber:'B 1-10',level:'1',block:'B',number:'57',beds:'1',area:55.3},
                    {plotNumber:'B 2-1',level:'2',block:'B',number:'58',beds:'1',area:68.8},
                    {plotNumber:'B 2-2',level:'2',block:'B',number:'59',beds:'2',area:83.8},
                    {plotNumber:'B 2-3',level:'2',block:'B',number:'60',beds:'2',area:65},
                    {plotNumber:'B 2-4',level:'2',block:'B',number:'61',beds:'1',area:51.3},
                    {plotNumber:'B 2-5',level:'2',block:'B',number:'62',beds:'2',area:76.4},
                    {plotNumber:'B 2-6',level:'2',block:'B',number:'63',beds:'2',area:76},
                    {plotNumber:'B 2-7',level:'2',block:'B',number:'64',beds:'1',area:53.5},
                    {plotNumber:'B 2-8',level:'2',block:'B',number:'65',beds:'2',area:65},
                    {plotNumber:'B 2-9',level:'2',block:'B',number:'66',beds:'2',area:83.8},
                    {plotNumber:'B 2-10',level:'2',block:'B',number:'67',beds:'1',area:55.3},
                    {plotNumber:'B 3-1',level:'3',block:'B',number:'68',beds:'2',area:76.5},
                    {plotNumber:'B 3-2',level:'3',block:'B',number:'69',beds:'1',area:51.3},
                    {plotNumber:'B 3-3',level:'3',block:'B',number:'70',beds:'3',area:80.6},
                    {plotNumber:'B 3-4',level:'3',block:'B',number:'71',beds:'1',area:53.5},
                    {plotNumber:'B 3-5',level:'3',block:'B',number:'72',beds:'2',area:76.5},
                    {plotNumber:'B 3-6',level:'3',block:'B',number:'73',beds:'3',area:111.5},
                    {plotNumber:'B 3-7',level:'3',block:'B',number:'74',beds:'3',area:118.4},
                    {plotNumber:'B 4-1',level:'4',block:'B',number:'75',beds:'2',area:76.5},
                    {plotNumber:'B 4-2',level:'4',block:'B',number:'76',beds:'1',area:51.3},
                    {plotNumber:'B 4-3',level:'4',block:'B',number:'77',beds:'2',area:80.6},
                    {plotNumber:'B 4-4',level:'4',block:'B',number:'78',beds:'1',area:53.5},
                    {plotNumber:'B 4-5',level:'4',block:'B',number:'79',beds:'2',area:76.5},
                    {plotNumber:'B 4-6',level:'4',block:'B',number:'80',beds:'3',area:111.5},
                    {plotNumber:'B 4-7',level:'4',block:'B',number:'81',beds:'3',area:118.4},
                    {plotNumber:'C 0-1',level:'0',block:'C',number:'82',beds:'2',area:85.1},
                    {plotNumber:'C 0-2',level:'0',block:'C',number:'83',beds:'1',area:53.5},
                    {plotNumber:'C 0-3',level:'0',block:'C',number:'84',beds:'2',area:65.5},
                    {plotNumber:'C 0-4',level:'0',block:'C',number:'85',beds:'2',area:76},
                    {plotNumber:'C 0-5',level:'0',block:'C',number:'86',beds:'2',area:76.4},
                    {plotNumber:'C 0-6',level:'0',block:'C',number:'87',beds:'1',area:51.3},
                    {plotNumber:'C 0-7',level:'0',block:'C',number:'88',beds:'2',area:65},
                    {plotNumber:'C 0-8',level:'0',block:'C',number:'89',beds:'2',area:69.9},
                    {plotNumber:'C 1-1',level:'1',block:'C',number:'90',beds:'1',area:55},
                    {plotNumber:'C 1-2',level:'1',block:'C',number:'91',beds:'1',area:53.5},
                    {plotNumber:'C 1-3',level:'1',block:'C',number:'92',beds:'2',area:65.5},
                    {plotNumber:'C 1-4',level:'1',block:'C',number:'93',beds:'2',area:76},
                    {plotNumber:'C 1-5',level:'1',block:'C',number:'94',beds:'2',area:76.4},
                    {plotNumber:'C 1-6',level:'1',block:'C',number:'95',beds:'1',area:51.3},
                    {plotNumber:'C 1-7',level:'1',block:'C',number:'96',beds:'2',area:65},
                    {plotNumber:'C 1-8',level:'1',block:'C',number:'97',beds:'2',area:78.7},
                    {plotNumber:'C 1-9',level:'1',block:'C',number:'98',beds:'2',area:66.3},
                    {plotNumber:'C 2-1',level:'2',block:'C',number:'99',beds:'1',area:55},
                    {plotNumber:'C 2-2',level:'2',block:'C',number:'100',beds:'1',area:53.5},
                    {plotNumber:'C 2-3',level:'2',block:'C',number:'101',beds:'2',area:65.5},
                    {plotNumber:'C 2-4',level:'2',block:'C',number:'102',beds:'2',area:76},
                    {plotNumber:'C 2-5',level:'2',block:'C',number:'103',beds:'2',area:76.4},
                    {plotNumber:'C 2-6',level:'2',block:'C',number:'104',beds:'1',area:51.3},
                    {plotNumber:'C 2-7',level:'2',block:'C',number:'105',beds:'2',area:65},
                    {plotNumber:'C 2-8',level:'2',block:'C',number:'106',beds:'2',area:78.7},
                    {plotNumber:'C 2-9',level:'2',block:'C',number:'107',beds:'2',area:66.3},
                    {plotNumber:'C 3-1',level:'3',block:'C',number:'108',beds:'2',area:80},
                    {plotNumber:'C 3-2',level:'3',block:'C',number:'109',beds:'1',area:53.5},
                    {plotNumber:'C 3-3',level:'3',block:'C',number:'110',beds:'2',area:65.5},
                    {plotNumber:'C 3-4',level:'3',block:'C',number:'111',beds:'2',area:80.6},
                    {plotNumber:'C 3-5',level:'3',block:'C',number:'112',beds:'1',area:51.3},
                    {plotNumber:'C 3-6',level:'3',block:'C',number:'113',beds:'2',area:65},
                    {plotNumber:'C 3-7',level:'3',block:'C',number:'114',beds:'3',area:78.7},
                    {plotNumber:'C 4-1',level:'4',block:'C',number:'115',beds:'2',area:80},
                    {plotNumber:'C 4-2',level:'4',block:'C',number:'116',beds:'1',area:53.5},
                    {plotNumber:'C 4-3',level:'4',block:'C',number:'117',beds:'2',area:65.5},
                    {plotNumber:'C 4-4',level:'4',block:'C',number:'118',beds:'2',area:80.6},
                    {plotNumber:'C 4-5',level:'4',block:'C',number:'119',beds:'1',area:51.3},
                    {plotNumber:'C 4-6',level:'4',block:'C',number:'120',beds:'2',area:65},
                    {plotNumber:'C 4-7',level:'4',block:'C',number:'121',beds:'3',area:78.7}
                  ],
      filteredApartments: []
    }
  }
    render() {
      return(
        <Container fluid>
          <Row>
            <Col className='title-banner'>
              <br/>
              <h1 className='title' >Brunswick House</h1>
              {/* <hr className='line'/> */}
            </Col>
          </Row>
          <Row >
            <Col className='filter-background' md={2}>
              <FilterComponent />
            </Col>            
            <Col className='light-background' md={10}>
              <ContainerInterface 
                oneBeds={this.state.apartments.filter(apartment => apartment.beds === '1')}
                twoBeds={this.state.apartments.filter(apartment => apartment.beds === '2')}
                threeBeds={this.state.apartments.filter(apartment => apartment.beds === '3')}
              />
            </Col>
          </ Row>
          <Row>
            {/* <ToggleButtonFilter /> */}
          </Row>
        </Container>
      )
    }
}




class ContainerInterface extends React.Component {
  render() {
    // let button = <button className='button' >button</button>
    const makeRows = function(apartments, title) {
      let buttons = [...apartments].map((apartment) => 
      <Col md={1}><button className="button">{apartment.number}</button></Col>
    );
      let output = [];
      // output.push(<Row className='row-pad'><Col><button className='button'>{title}</button></Col></Row>)
      // output.push(<Row className='row-pad'><Col><h2>One Beds</h2></Col></Row>)
      while(buttons.length > 0) {
        if(buttons.length >= 12) {
          output.push(<Row className='row-pad'>{buttons.splice(0, 12)}</Row>);
        } else {
          output.push(<Row className='row-pad'>{buttons.splice(0, buttons.length)}</Row>)
        }
      }
      return output;
    };
    return (
      <Container fluid>
        {/* {makeRows(this.props.oneBeds, 'One Beds')} */}
        {makeRows(this.props.oneBeds, )}

      </Container>
    )
  }
}


// function ToggleButtonFilter() {
//   // const [value, setValue] = useState([1, 3]);
//   const [value, setValue] = [1, 3];

//   /*
//    * The second argument that will be passed to
//    * `handleChange` from `ToggleButtonGroup`
//    * is the SyntheticEvent object, but we are
//    * not using it in this example so we will omit it.
//    */
//   // const handleChange = (val) => setValue(val);
//   const handleChange = function(val) {

//   }

//   return (
//     <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1}>
//         Option 1
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2}>
//         Option 2
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3}>
//         Option 3
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

class FilterComponent extends React.Component {
  render() {
    const makeCheckBox = function(label, id, group) {
      return <Col >
              <Form>
                <Form.Check
                  inline
                  label={label}
                  name={group}
                  type='checkbox'
                  id={`${id}-checkbox`}
                />
              </Form>
            </Col>
    }
    return (    

    <Container className='container-border'>
      
      <br/>
        
      <Container >
        <Row>
            {/* <h2>Filters</h2> */}
            <h4>Filters</h4>
        </Row>
      </Container>
        <hr className='line'/>
      <Container>
        
        <Row>
            {/* <h4>Bedrooms</h4> */}
            <h5>Bedrooms</h5>
        </Row>
        <Row>
          {makeCheckBox('1 Bed', '1-bed', 1)}
        </Row>
        <Row>
          {makeCheckBox('2 Bed', '2-bed', 1)}
        </Row>
        <Row>
          {makeCheckBox('3 Bed', '3-bed', 1)}     
        </Row>
      </Container>
        {/* <hr className='line'/> */}
      <Container>
        <Row> 
          {/* <h4>Floor</h4> */}
          <h5>Floor</h5>
        </Row>
        {/* <br/> */}
          
        <Row>
          {makeCheckBox('Ground', '0', 2)}
        </Row>
        <Row>
          {makeCheckBox('First', '1', 2)}
        </Row>
        <Row>
          {makeCheckBox('Second', '2', 2)}
        </Row>
        <Row>
          {makeCheckBox('Third', '3', 2)}
        </Row>
        <Row>
          {makeCheckBox('Fourth', '4', 2)}
        </Row>
        {/* <br/> */}
      </Container>
      <hr className='line'/>
      <Container >
      <Row>
          {makeCheckBox('Show All', 'all', 3)}
        </Row>


      </Container>
    </Container>

      // <Container>
      //   <Row>
      //     <Col md={3}>
      //       <h3>beds</h3>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col md={1}>
      //       <button className='button'>One Beds</button>
      //     </Col>
      //     <Col md={1}>
      //       <button className='button'>Two Beds</button>
      //     </Col>
      //     <Col md={1}>
      //       <button className='button'>Three Beds</button>
      //     </Col>
      //   </Row>
      // </Container>
    )
  }
}


// class Floors extends React.Component {
//   render() {
//     const data = [...this.props.data];    
//     const level00Buttons = data.filter(apartment => apartment.level === '00').map((apartment) =>
//         <td><Button variant='light'>No {apartment.plot}</Button></td>
//     )
//     const level01Buttons = data.filter(apartment => apartment.level === '01').map((apartment) =>
//     <td><Button variant='light'>No {apartment.plot}</Button></td>
//     )
//     const level02Buttons = data.filter(apartment => apartment.level === '02').map((apartment) =>
//       <td><Button variant='light'>No {apartment.plot}</Button></td>
//     )
//     return (
//       <div>
//       {/* <Table  bordered hover size="sm" variant="light"> */}
//       <Table hover  variant="">
//         <thead>
//           <tr>
//             {/* <th></th> */}
//             {/* <th>Apartment</th>
//             <th>Level</th>
//             <th>Block</th>
//             <th>Number of bedrooms</th>
//             <th>Net Internal Area</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>L 00</td>
//             {level00Buttons}
//           </tr>
//           <tr>
//             <td>L 01</td>
//             {level01Buttons}
//           </tr>
//           <tr>
//             <td>L 02</td>
//             {level02Buttons}
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//     )
//   }
// }

// class Interface extends React.Component {
//   render() {
//     const btnVariant = 'info';
//     const makeRows = function(apartments) {
//       let buttons = [...apartments].map((apartment) => 
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//       let output = []
//       while(buttons.length > 0) {
//         if(buttons.length >= 10) {
//           output.push(<tr>{buttons.splice(0, 10)}</tr>);
//         } else {
//           output.push(<tr>{buttons.splice(0, buttons.length)}</tr>)
//         }
//       }
//       return output;
//     };
//     let oneBedRows = makeRows(this.props.oneBeds);
//     let twoBedRows = makeRows(this.props.twoBeds);
//     let threeBedRows = makeRows(this.props.threeBeds);
//     return (
//       <div >
//         <Table size=''>
//           <tbody>
//             <tr>
//               <td className="block-btn" colSpan='10'>
//                 <div >
//                   <Button className='' variant={btnVariant} size="">1 Bed</Button>
//                 </div>
//               </td>             
//             </tr>
//             {oneBedRows}
//             <tr>
//               <td className="block-btn" colSpan='10'>
//                 <div >
//                   <Button className='' variant={btnVariant} size="">2 Bed</Button>
//                 </div>
//               </td>             
//             </tr>
//             {twoBedRows}
//             <tr>
//             <td className="block-btn" colSpan='10'>
//                 <div >
//                   <Button className='' variant={btnVariant} size="">3 Bed</Button>
//                 </div>
//               </td>             
//             </tr>
//             {makeRows(this.props.threeBeds)}
//           </tbody>
//         </Table>
//       </div>
//     )
//   }
// }

// class Top extends React.Component {
//   render() {
//     const data = [...this.props.data];    
//     const btnVariant = 'info'
//     const levelB0Buttons = data.filter(apartment => apartment.level === '0' && apartment.block === 'B').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelB1Buttons = data.filter(apartment => apartment.level === '1' && apartment.block === 'B').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelB2Buttons = data.filter(apartment => apartment.level === '2' && apartment.block === 'B').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelB3Buttons = data.filter(apartment => apartment.level === '3' && apartment.block === 'B').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelB4Buttons = data.filter(apartment => apartment.level === '4' && apartment.block === 'B').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelC0Buttons = data.filter(apartment => apartment.level === '0' && apartment.block === 'C').map((apartment) =>
//     <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelC1Buttons = data.filter(apartment => apartment.level === '1' && apartment.block === 'C').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelC2Buttons = data.filter(apartment => apartment.level === '2' && apartment.block === 'C').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelC3Buttons = data.filter(apartment => apartment.level === '3' && apartment.block === 'C').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const levelC4Buttons = data.filter(apartment => apartment.level === '4' && apartment.block === 'C').map((apartment) =>
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     const blockBCell = <td>Block B</td>;
//     const blockCCell = <td>Block C</td>;
//     const allButtons = data.map((apartment) => 
//       <td><Button variant={btnVariant}>{apartment.number}</Button></td>
//     );
//     let allButtonsFiltered = [];
//     while(allButtons.length > 0) {
//       if(allButtons.length >= 13) {
//         allButtonsFiltered.push(<tr>{allButtons.splice(0, 13)}</tr>);
//       } else {
//         allButtonsFiltered.push(<tr>{allButtons.splice(0, allButtons.length)}</tr>)
//       }
//     }
//     return (
//       <div>
//       {/* <Table  bordered hover size="sm" variant="light"> */}
//       <Tabs>
//         <Tab eventKey="floors" title="Floors">
//         <Table responsive="" hover  variant="">
//           {/* <thead>
//             <tr>
//               <th></th>
//               <th>Apartment</th>
//               <th>Level</th>
//               <th>Block</th>
//               <th>Number of bedrooms</th>
//               <th>Net Internal Area</th>
//             </tr>
//           </thead> */}
//           <tbody>
//             <tr>
//               <td>L 00</td>
//               {blockBCell}
//               {levelB0Buttons}
//             </tr>
//             <tr>
//               <td></td>
//               {blockCCell}
//               {levelC0Buttons}
//             </tr>

//             <tr>
//               <td>L 01</td>
//               {blockBCell}
//               {levelB1Buttons}
//             </tr>
//             <tr>
//               <td></td>
//               {blockCCell}
//               {levelC1Buttons}
//             </tr>

//             <tr>
//               <td>L 02</td>
//               {blockBCell}
//               {levelB2Buttons}
//             </tr>
//             <tr>
//               <td></td>
//               {blockCCell}
//               {levelC2Buttons}
//             </tr>

//             <tr>
//               <td>L 03</td>
//               {blockBCell}
//               {levelB3Buttons}
//             </tr>
//             <tr>
//               <td></td>
//               {blockCCell}
//               {levelC3Buttons}
//             </tr>

//             <tr>
//               <td>L 04</td>
//               {blockBCell}
//               {levelB4Buttons}
//             </tr>
//             <tr>
//               <td></td>
//               {blockCCell}
//               {levelC4Buttons}
//             </tr>
//           </tbody>
//         </Table>
//         </Tab>
//         <Tab eventKey="all" title="All">
//           <Table>
//             <tbody>
//               {allButtonsFiltered}
//             </tbody>
//           </Table>
//         </Tab>
//           <Tab eventKey="beds" title="Beds" >
//             <br></br>
//             <Tabs>
//               <Tab eventKey="1 bed" title="1 Bed">
              
//               </Tab>
//               <Tab eventKey="2 bed" title="2 Bed">

//               </Tab>
//           </Tabs>
//         </Tab>
//       </Tabs>
//     </div>
//     )
//   }
// }

export default App;

