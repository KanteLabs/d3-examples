import React, {Component} from 'react';
import SelectPlayer from './SelectPlayer';
import stats from '../data/top-100-players-pergame-2016-17';
import players from '../data/player-names';

import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, Tooltip, Label} from 'recharts';

    
    
class  TwoLevelPieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPlayer: "Stephen Curry",
            data: [
                {category: 'Steals', player_one: 1.2, player_two: players["Stephen Curry"].STL, cap: 30},
                {category: 'Rebounds', player_one: 8.6, player_two: players["Stephen Curry"].REB, cap: 30},
                {category: 'Assists', player_one:8.7, player_two: players["Stephen Curry"].AST, cap: 30},
                {category: 'Free Throws', player_one: 4.8, player_two: players["Stephen Curry"].FTM, cap: 30},
                {category: 'Turnovers', player_one: 4.1, player_two: players["Stephen Curry"].TOV, cap: 30},
                {category: 'Field Goals', player_one: 9.9, player_two: players["Stephen Curry"].FGM, cap: 30},
            ]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.currentPlayer !== this.state.currentPlayer){
            // this.forceUpdate()
            // console.log(true)
            return true;
        }else{
            return false;
        }
    }

    plotPlayer = (name) => {
        let data = this.state.data;
        let playerStats = players[name];

        data[0].player_two = playerStats.STL;
        data[1].player_two = playerStats.REB;
        data[2].player_two = playerStats.AST;
        data[3].player_two = playerStats.FTM;
        data[4].player_two = playerStats.TOV;
        data[5].player_two = playerStats.FGM;

        this.setState({
            currentPlayer: name,
            data: data
        })
    }

    render () {
        const { data } = this.state;
        
        return (
            <div>
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis angle={30} domain={[0, 13]} />
                <Radar name="LeBron James" dataKey="player_one" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} dot/>
                <Radar name={this.state.currentPlayer.toString()} dataKey="player_two" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} dot/>
                <Legend />
                <Tooltip />
            </RadarChart>
            <SelectPlayer passPlayersName={(name)=>this.plotPlayer(name)}/>
            </div>
        );
    }
}

export default TwoLevelPieChart