import React, {Component} from 'react';
import stats from '../data/top-100-players-pergame-2016-17';

import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
{ subject: 'Math', A: 120, B: 110, fullMark: 150 },
{ subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
{ subject: 'English', A: 86, B: 130, fullMark: 150 },
{ subject: 'Geography', A: 99, B: 100, fullMark: 150 },
{ subject: 'Physics', A: 85, B: 90, fullMark: 150 },
{ subject: 'History', A: 65, B: 85, fullMark: 150 },
];

class  TwoLevelPieChart extends Component {
render () {
 return (
   <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={stats.splice(0,10)}>
     <PolarGrid />
     <PolarAngleAxis dataKey="player" />
     <PolarRadiusAxis/>
     <Radar name="Mike" dataKey="GP" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
   </RadarChart>
);
}
}

export default TwoLevelPieChart