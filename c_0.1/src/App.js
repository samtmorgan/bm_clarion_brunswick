import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import '@fontsource/roboto';
import React from 'react';
import ReactDOM from 'react-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     textAlign: 'center',
//     color: '#d2ebcd',
//   }
// }));

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
      // background colour 
      currentRootColor: '#00191e'

    }
  }
    render() {
      //setting background colour
      document.body.style.backgroundColor = this.state.currentRootColor;
      return(
        <div>
          <Grid container className='root' >
            <Grid item>
              <Banner />
            </Grid>
          </Grid>
        </div>
      )
    }
}

const Banner = function() {
  return(
    <h1 className='title' >Brunswick House</h1>
  )
}



export default App;
