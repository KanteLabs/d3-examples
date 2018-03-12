import React, {Component} from 'react';
import SelectPlayer from './SelectPlayer';
import stats from '../data/top-100-players-pergame-2016-17';

import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';

const data = [
    {category: 'Points', player_one: 26.4, player_two: 30, cap: 30},
    {category: 'Steals', player_one: 1.2, player_two: 30, cap: 30},
    {category: 'Rebounds', player_one: 8.6, player_two: 30, cap: 30},
    {category: 'Assists', player_one:8.7, player_two: 30, cap: 30},
    {category: 'Free Throws', player_one: 4.8, player_two: 30, cap: 30},
    {category: 'Threes', player_one: 1.7, player_two: 30, cap: 30},
];

class  TwoLevelPieChart extends Component {
render () {
 return (
    <div>
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 35]} />
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