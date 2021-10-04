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
// import Form from 'react-bootstrap/Form';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasBody from 'react-bootstrap/OffcanvasBody';
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import $ from 'jquery';
import logo from './latimer-logo-white.svg';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [ 
                    {plotNumber:'B 0-1',level:'Level 0',block:'B',number:'39',beds:'2 Bed',area:69.9,availability:true},
                    {plotNumber:'B 0-2',level:'Level 0',block:'B',number:'40',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 0-3',level:'Level 0',block:'B',number:'41',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'B 0-4',level:'Level 0',block:'B',number:'42',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'B 0-5',level:'Level 0',block:'B',number:'43',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'B 0-6',level:'Level 0',block:'B',number:'44',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'B 0-7',level:'Level 0',block:'B',number:'45',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 0-8',level:'Level 0',block:'B',number:'46',beds:'2 Bed',area:69,availability:true},
                    {plotNumber:'B 0-9',level:'Level 0',block:'B',number:'47',beds:'1 Bed',area:55.3,availability:true},
                    {plotNumber:'B 1-1',level:'Level 1',block:'B',number:'48',beds:'1 Bed',area:68.8,availability:true},
                    {plotNumber:'B 1-2',level:'Level 1',block:'B',number:'49',beds:'2 Bed',area:83.8,availability:true},
                    {plotNumber:'B 1-3',level:'Level 1',block:'B',number:'50',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 1-4',level:'Level 1',block:'B',number:'51',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'B 1-5',level:'Level 1',block:'B',number:'52',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'B 1-6',level:'Level 1',block:'B',number:'53',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'B 1-7',level:'Level 1',block:'B',number:'54',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'B 1-8',level:'Level 1',block:'B',number:'55',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 1-9',level:'Level 1',block:'B',number:'56',beds:'2 Bed',area:83.8,availability:true},
                    {plotNumber:'B 1-10',level:'Level 1',block:'B',number:'57',beds:'1 Bed',area:55.3,availability:true},
                    {plotNumber:'B 2-1',level:'Level 2',block:'B',number:'58',beds:'1 Bed',area:68.8,availability:true},
                    {plotNumber:'B 2-2',level:'Level 2',block:'B',number:'59',beds:'2 Bed',area:83.8,availability:true},
                    {plotNumber:'B 2-3',level:'Level 2',block:'B',number:'60',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 2-4',level:'Level 2',block:'B',number:'61',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'B 2-5',level:'Level 2',block:'B',number:'62',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'B 2-6',level:'Level 2',block:'B',number:'63',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'B 2-7',level:'Level 2',block:'B',number:'64',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'B 2-8',level:'Level 2',block:'B',number:'65',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'B 2-9',level:'Level 2',block:'B',number:'66',beds:'2 Bed',area:83.8,availability:true},
                    {plotNumber:'B 2-10',level:'Level 2',block:'B',number:'67',beds:'1 Bed',area:55.3,availability:true},
                    {plotNumber:'B 3-1',level:'Level 3',block:'B',number:'68',beds:'2 Bed',area:76.5,availability:true},
                    {plotNumber:'B 3-2',level:'Level 3',block:'B',number:'69',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'B 3-3',level:'Level 3',block:'B',number:'70',beds:'3 Bed',area:80.6,availability:true},
                    {plotNumber:'B 3-4',level:'Level 3',block:'B',number:'71',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'B 3-5',level:'Level 3',block:'B',number:'72',beds:'2 Bed',area:76.5,availability:true},
                    {plotNumber:'B 3-6',level:'Level 3',block:'B',number:'73',beds:'3 Bed',area:111.5,availability:true},
                    {plotNumber:'B 3-7',level:'Level 3',block:'B',number:'74',beds:'3 Bed',area:118.4,availability:true},
                    {plotNumber:'B 4-1',level:'Level 4',block:'B',number:'75',beds:'2 Bed',area:76.5,availability:true},
                    {plotNumber:'B 4-2',level:'Level 4',block:'B',number:'76',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'B 4-3',level:'Level 4',block:'B',number:'77',beds:'2 Bed',area:80.6,availability:true},
                    {plotNumber:'B 4-4',level:'Level 4',block:'B',number:'78',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'B 4-5',level:'Level 4',block:'B',number:'79',beds:'2 Bed',area:76.5,availability:true},
                    {plotNumber:'B 4-6',level:'Level 4',block:'B',number:'80',beds:'3 Bed',area:111.5,availability:true},
                    {plotNumber:'B 4-7',level:'Level 4',block:'B',number:'81',beds:'3 Bed',area:118.4,availability:true},
                    {plotNumber:'C 0-1',level:'Level 0',block:'C',number:'82',beds:'2 Bed',area:85.1,availability:true},
                    {plotNumber:'C 0-2',level:'Level 0',block:'C',number:'83',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'C 0-3',level:'Level 0',block:'C',number:'84',beds:'2 Bed',area:65.5,availability:true},
                    {plotNumber:'C 0-4',level:'Level 0',block:'C',number:'85',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'C 0-5',level:'Level 0',block:'C',number:'86',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'C 0-6',level:'Level 0',block:'C',number:'87',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'C 0-7',level:'Level 0',block:'C',number:'88',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'C 0-8',level:'Level 0',block:'C',number:'89',beds:'2 Bed',area:69.9,availability:true},
                    {plotNumber:'C 1-1',level:'Level 1',block:'C',number:'90',beds:'1 Bed',area:55,availability:true},
                    {plotNumber:'C 1-2',level:'Level 1',block:'C',number:'91',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'C 1-3',level:'Level 1',block:'C',number:'92',beds:'2 Bed',area:65.5,availability:true},
                    {plotNumber:'C 1-4',level:'Level 1',block:'C',number:'93',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'C 1-5',level:'Level 1',block:'C',number:'94',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'C 1-6',level:'Level 1',block:'C',number:'95',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'C 1-7',level:'Level 1',block:'C',number:'96',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'C 1-8',level:'Level 1',block:'C',number:'97',beds:'2 Bed',area:78.7,availability:true},
                    {plotNumber:'C 1-9',level:'Level 1',block:'C',number:'98',beds:'2 Bed',area:66.3,availability:true},
                    {plotNumber:'C 2-1',level:'Level 2',block:'C',number:'99',beds:'1 Bed',area:55,availability:true},
                    {plotNumber:'C 2-2',level:'Level 2',block:'C',number:'100',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'C 2-3',level:'Level 2',block:'C',number:'101',beds:'2 Bed',area:65.5,availability:true},
                    {plotNumber:'C 2-4',level:'Level 2',block:'C',number:'102',beds:'2 Bed',area:76,availability:true},
                    {plotNumber:'C 2-5',level:'Level 2',block:'C',number:'103',beds:'2 Bed',area:76.4,availability:true},
                    {plotNumber:'C 2-6',level:'Level 2',block:'C',number:'104',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'C 2-7',level:'Level 2',block:'C',number:'105',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'C 2-8',level:'Level 2',block:'C',number:'106',beds:'2 Bed',area:78.7,availability:true},
                    {plotNumber:'C 2-9',level:'Level 2',block:'C',number:'107',beds:'2 Bed',area:66.3,availability:true},
                    {plotNumber:'C 3-1',level:'Level 3',block:'C',number:'108',beds:'2 Bed',area:80,availability:true},
                    {plotNumber:'C 3-2',level:'Level 3',block:'C',number:'109',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'C 3-3',level:'Level 3',block:'C',number:'110',beds:'2 Bed',area:65.5,availability:true},
                    {plotNumber:'C 3-4',level:'Level 3',block:'C',number:'111',beds:'2 Bed',area:80.6,availability:true},
                    {plotNumber:'C 3-5',level:'Level 3',block:'C',number:'112',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'C 3-6',level:'Level 3',block:'C',number:'113',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'C 3-7',level:'Level 3',block:'C',number:'114',beds:'3 Bed',area:78.7,availability:true},
                    {plotNumber:'C 4-1',level:'Level 4',block:'C',number:'115',beds:'2 Bed',area:80,availability:true},
                    {plotNumber:'C 4-2',level:'Level 4',block:'C',number:'116',beds:'1 Bed',area:53.5,availability:true},
                    {plotNumber:'C 4-3',level:'Level 4',block:'C',number:'117',beds:'2 Bed',area:65.5,availability:true},
                    {plotNumber:'C 4-4',level:'Level 4',block:'C',number:'118',beds:'2 Bed',area:80.6,availability:true},
                    {plotNumber:'C 4-5',level:'Level 4',block:'C',number:'119',beds:'1 Bed',area:51.3,availability:true},
                    {plotNumber:'C 4-6',level:'Level 4',block:'C',number:'120',beds:'2 Bed',area:65,availability:true},
                    {plotNumber:'C 4-7',level:'Level 4',block:'C',number:'121',beds:'3 Bed',area:78.7,availability:true}
                  ],            
      filteredApartments: [],
      bed1:false,
      bed2:false,
      bed3:false,
      ground:false,    
      first:false,             
      second:false,             
      third:false,             
      fourth:false,   
      show:false,            
    }
    this.filterApartments = this.filterApartments.bind(this);
    this.handleCheck1Beds = this.handleCheck1Beds.bind(this);
    this.handleCheck2Beds = this.handleCheck2Beds.bind(this); 
    this.handleCheck3Beds = this.handleCheck3Beds.bind(this); 
    this.handleCheckGround = this.handleCheckGround.bind(this);
    this.handleCheckFirst = this.handleCheckFirst.bind(this);
    this.handleCheckSecond = this.handleCheckSecond.bind(this);
    this.handleCheckThird = this.handleCheckThird.bind(this);
    this.handleCheckFourth = this.handleCheckFourth.bind(this);
    this.handleClickShowAll = this.handleClickShowAll.bind(this);
    this.handleClickShowNone = this.handleClickShowNone.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleAvailabilityCheck = this.handleAvailabilityCheck.bind(this);
    // this.availabilityCheckboxes = this.availabilityCheckboxes.bind(this);
  }

  filterApartments() {
    // setup for beds filter
    // keys to checked array
    const checkedBedsKeys = ['1 Bed', '2 Bed', '3 Bed'];
    // array to copy beds state checked values to
    let checkedBeds = [];
    // push beds state values to local array
    checkedBeds.push(this.state.bed1, this.state.bed2, this.state.bed3);
    // Array for keywords to search apartments beds param for
    let valuesToSearchForBeds = [];
    // filter which pushes beds keywords if corresponding checked boolean is true
    checkedBedsKeys.forEach((element, index) => {if (checkedBeds[index]) {valuesToSearchForBeds.push(element)}}); 
    
    // floors setup
    // keys to checked array
    const checkedFloorKeys = ['Level 0', 'Level 1', 'Level 2', 'Level 3','Level 4'];  
    // array to copy level state checked values to
    let checkedLevels = [];
    // push level state values to local array
    checkedLevels.push(this.state.ground, this.state.first, this.state.second, this.state.third, this.state.fourth);
    // Array for keywords to search apartments floors param for
    let valuesToSearchForLevels = [];
    // filter which pushes levels keywords if corresponding checked boolean is true
    checkedFloorKeys.forEach((element, index) => {if (checkedLevels[index]) {valuesToSearchForLevels.push(element)}}); 

    // filter of apartments, checking for beds and floor matches 
    // const output = this.state.apartments.filter((apartment) => {return valuesToSearchForBeds.includes(apartment.beds)});
    const output = this.state.apartments.filter((apartment) => {return valuesToSearchForBeds.includes(apartment.beds) && 
                                                                       valuesToSearchForLevels.includes(apartment.level) && 
                                                                       apartment.availability
                                                                       });

    console.log('checked-' + checkedBeds, 'valuesToSearchForBeds-' + valuesToSearchForBeds, 'output-' + output);
    this.setState({
      filteredApartments: output
    });
  }

    handleCheck1Beds() {
      this.setState({bed1: !this.state.bed1}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 

    handleCheck2Beds() {
      this.setState({bed2: !this.state.bed2}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 

    handleCheck3Beds() {
      this.setState({bed3: !this.state.bed3}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 
    handleCheckGround() {
      this.setState({ground: !this.state.ground}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 
    handleCheckFirst() {
      this.setState({first: !this.state.first}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 
    handleCheckSecond() {
      this.setState({second: !this.state.second}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })};
    handleCheckThird() {
      this.setState({third: !this.state.third}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 
    handleCheckFourth() {
      this.setState({fourth: !this.state.fourth}, () => {
        // this is within the callback function of setState meaning setState is forced to execute prior to calling the function
        this.filterApartments()
      })}; 

    handleClickShowAll() {
      this.setState({
        bed1:true,
        bed2:true,
        bed3:true,
        ground:true,    
        first:true,             
        second:true,             
        third:true,             
        fourth:true, 
      }, () => {this.filterApartments()
    })};

    handleClickShowNone() {
      this.setState({
        bed1:false,
        bed2:false,
        bed3:false,
        ground:false,    
        first:false,             
        second:false,             
        third:false,             
        fourth:false, 
      }, () => {this.filterApartments()
    })};

    handleClose() {
      this.setState({
        show:false
      })
    };

    handleShow() {
      this.setState({
        show:true
      })
    };

    handleAvailabilityCheck(e) {
      let apartmentsCopy = [...this.state.apartments];
      const indexOfApartmentToChange = apartmentsCopy.findIndex((apartment => apartment.number === e.target.name));
      apartmentsCopy[indexOfApartmentToChange].availability = !apartmentsCopy[indexOfApartmentToChange].availability;
      this.setState({
        apartments: apartmentsCopy
      }, () => {this.filterApartments()
      })};

    availabilityCheckboxes(apartments) {   
      const checkboxes = 
        [...apartments].map((apartment) =>                    
          <Col key={apartment.name} >
            <input type='checkbox' 
                   key={apartment.number} 
                   id={apartment.number} 
                   name={apartment.number}
                   checked={apartment.availability} 
                   onChange={this.handleAvailabilityCheck}
                  // changed to onChange  
                  // onClick={handleAvailabilityCheck} 
                   />
            <label>{apartment.number}</label>
          </Col>
        );
      let output = [];
      let keys = 0;
      while(checkboxes.length > 0) {
        if(checkboxes.length >= 5) {
          output.push(<Row key={keys} className='row-pad'>{checkboxes.splice(0, 5)}</Row>);
          keys++;
          // console.log(keys);
        } else {
          keys++;
          output.push(<Row key={keys} className='row-pad'>{checkboxes.splice(0, checkboxes.length)}<Col></Col><Col></Col></Row>);
          // console.log(keys);
        }
      }
      return output;
    }





    
    render() {

    // const handleAvailabilityCheck = function (e) {
    //     console.log('value of checkbox : ', e.target.name);
    //     console.log(this.state.apartments.filter((apartment) => apartment === e.target.name))
    //   };

    // const availabilityCheckboxes = function (apartments) {   
    //   const checkboxes = 
    //     [...apartments].map((apartment) =>                    
    //       <Col key={apartment.name} >
    //         <input type='checkbox' 
    //                key={apartment.number} 
    //                id={apartment.number} 
    //                name={apartment.number}
    //                checked={apartment.availability} 
    //                onChange={this.handleAvailabilityCheck()}
    //               // changed to onChange  
    //               // onClick={handleAvailabilityCheck} 
    //                />
    //         <label>{apartment.number}</label>
    //       </Col>
    //     );
    //   let output = [];
    //   let keys = 0;
    //   while(checkboxes.length > 0) {
    //     if(checkboxes.length >= 5) {
    //       output.push(<Row key={keys} className='row-pad'>{checkboxes.splice(0, 5)}</Row>);
    //       keys++;
    //       // console.log(keys);
    //     } else {
    //       keys++;
    //       output.push(<Row key={keys} className='row-pad'>{checkboxes.splice(0, checkboxes.length)}<Col></Col><Col></Col></Row>);
    //       // console.log(keys);
    //     }
    //   }
    //   return output;
    // }
      
      return(
        <div className='main'>
        <Container fluid>
          <Row className='title-banner'>
              <Col md={3}>
                <img className='latimer-logo' alt='Latimer by Clarion Housing Group logo' src={logo} />
                {/* <img className='latimer-logo' alt='Latimer by Clarion Housing Group logo' src={logo} width="202" height="77" /> */}
              </Col>
              <Col md={6}>
                <h1 className='title' >Brunswick House</h1>
              </Col>
          </Row>
          <Row >
            <Col fluid className='filter-background' md={2}>
              <Container className='container-border'>
                <br/>
                <Container >
                  <Row>
                      <h4>Preferences</h4>
                  </Row>
                </Container>
                  <hr className='line'/>
                <Container>
                  <Row>
                    <h5>Bedrooms</h5>
                  </Row>         
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheck1Beds}
                            checked={this.state.bed1}
                      />
                    <label>1 Bed</label>
                  </div>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheck2Beds}
                            checked={this.state.bed2}
                      />
                    <label>2 Bed</label>
                  </div>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheck3Beds}
                            checked={this.state.bed3}
                      />
                    <label>3 Bed</label>
                  </div>
                  
                  <br/>
                </Container>
                <Container>
                  <Row>
                    <h5>Floor</h5>
                  </Row>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheckGround}
                            checked={this.state.ground}
                      />
                    <label>Ground</label>
                  </div>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheckFirst}
                            checked={this.state.first}
                      />
                    <label>First</label>
                  </div>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheckSecond}
                            checked={this.state.second}
                      />
                    <label>Second</label>
                  <div>
                  </div>
                    <input  type="checkbox" 
                            onChange={this.handleCheckThird}
                            checked={this.state.third}
                      />
                    <label>Third</label>
                  </div>
                  <div>
                    <input  type="checkbox" 
                            onChange={this.handleCheckFourth}
                            checked={this.state.fourth}
                      />
                    <label>Fourth</label>
                  </div>
                <hr className='line'/>                 

                </Container>
                  <Row >
                      <button className="button-filter" onClick={this.handleClickShowAll}>Show all</button>
                      {/* <button className="" onClick={this.handleClickShowAll}>Show all</button> */}
                  </Row>
                  <Row className='row-pad'>
                      <button className="button-filter" onClick={this.handleClickShowNone}>Show none</button>
                      {/* <button className="" onClick={this.handleClickShowNone}>Clear</button> */}
                  </Row>
                  <Row className='row-pad'>
                    <button className="button-filter" >Light selection</button>
                  </Row>   
                  <Row className='row-pad'>
                    <>
                      <button className='button-filter' onClick={this.handleShow}>Settings</button>
                      <Offcanvas className='offcanvas' show={this.state.show} onHide={this.handleClose}>
                        <OffcanvasHeader closeButton>
                          <OffcanvasTitle>Availability settings, unchecked apartments are removed from the app.</OffcanvasTitle>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                          <Container md={5}>
                            {this.availabilityCheckboxes(this.state.apartments)}


                            {/* {this.availabilityCheckboxes()} */}
                          </Container>
                        </OffcanvasBody>
                      </Offcanvas>
                    </>
                  </Row>             
              </Container>
            </Col>            
            <Col className='light-background' md={10}>
              <Buttons apartments={this.state.filteredApartments}/>
            </Col>
          </ Row>
        </Container>
        </div>
      )
    }
};

class Buttons extends React.Component {
  render() {
    const handleLightClick = function(event) {
      event.preventDefault();
      $.ajax(
        encodeURI("http://192.168.8.104:8080/api/v1.0/set_name_mask"), 
        {
        data:JSON.stringify({"name_mask": [event.target.id], "fade": 0.2, "auto_off": 10}),
        method: "POST",
        contentType: "application/json"
      });
    }; 

    const generateButtons = function(apartments) {

      let buttons = [...apartments].filter((apartment) => apartment.availability === true)
                                   .map((apartment) => 
        <Col md={1}><button id={apartment.number} className="button" onClick={handleLightClick}>{apartment.number}</button></Col>
      )
      let output = [];
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
        {generateButtons(this.props.apartments)}
      </Container>
    )
  }
}

export default App;