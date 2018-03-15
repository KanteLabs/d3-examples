import React, { Component } from 'react';
import Linechart from './components/Linechart';
import TwoLevelPieChart from './components/RadarChart';
import { ResponsiveContainer } from 'recharts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Linechart /> */}
        
          <TwoLevelPieChart/>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }
}

export default App;
