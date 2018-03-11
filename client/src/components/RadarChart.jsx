import React, {Component} from 'react';
import SelectPlayer from './SelectPlayer';
import stats from '../data/top-100-players-pergame-2016-17';

import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';

const data = [
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
];

class  TwoLevelPieChart extends Component {
render () {
 return (
    <div>
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="player" />
        <PolarRadiusAxis angle={30} domain={[0, 50]} />
        <PolarRadiusAxis/>
        <Radar name="LeBron" dataKey="player_one" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} dot/>
        <Radar dataKey="player_two" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} dot/>
        <Legend />
        <Tooltip />
    </RadarChart>
    <SelectPlayer />
    </div>
);
}
}

export default TwoLevelPieChart