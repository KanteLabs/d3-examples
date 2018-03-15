import React, {Component} from 'react';
import SelectPlayer from './SelectPlayer';
import FilterGameType from './FilterGameType';
import PlayoffNames from '../data/Names/Playoffs';
import RegularNames from '../data/Names/Regular';
import PlayoffStats from '../data/top-100-players-pergame-playoffs-2016-17';
import RegularStats from '../data/top-100-players-pergame-regular-2016-17';

import {Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis, Tooltip, Label, ResponsiveContainer} from 'recharts';

    
    
class  TwoLevelPieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPlayer: "Stephen Curry",
            season: 'regular',
            playerNames: RegularNames,
            data: [
                {category: 'Steals', player_one: 1.2, player_two: RegularNames["Stephen Curry"].STL, cap: 30},
                {category: 'Rebounds', player_one: 8.6, player_two: RegularNames["Stephen Curry"].REB, cap: 30},
                {category: 'Assists', player_one:8.7, player_two: RegularNames["Stephen Curry"].AST, cap: 30},
                {category: 'Free Throws', player_one: 4.8, player_two: RegularNames["Stephen Curry"].FTM, cap: 30},
                {category: 'Turnovers', player_one: 4.1, player_two: RegularNames["Stephen Curry"].TOV, cap: 30},
                {category: 'Field Goals', player_one: 9.9, player_two: RegularNames["Stephen Curry"].FGM, cap: 30},
            ]
        }
    }

    componentDidMount() {
        const { season } = this.state;
        switch (season) {
            case 'regular':
                this.setState({ playerNames: RegularNames })
            case 'playoffs':
                this.setState({ playerNames: PlayoffNames })
            default:
                break;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.currentPlayer !== this.state.currentPlayer){
            return true;
        }else{
            return false;
        }
    }

    plotPlayer = (e) => {
        let { season, data} = this.state;
        let name = e.target.value;
        let playerStats = season === 'regular' ? RegularStats[name] : PlayoffStats[name]

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

    handleFilter = (e) => {
        let filter = e.target.value;
        this.setState({
            season: filter
        })
    }

    render () {
        const { data, season, playoffsData, playerNames } = this.state;
        
        return (
            <div>
                <ResponsiveContainer width='100%' height={300}>
                    <RadarChart cx='50%' cy='50%' outerRadius='80%' data={ season === 'regular' ? data : playoffsData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="category" />
                        <PolarRadiusAxis angle={30} domain={[0, 15]} />
                        <Radar name="LeBron James" dataKey="player_one" stroke="#FFB81C" fill="#6F263D" fillOpacity={0.8} dot activeDot={{r: 6}} strokeWidth="2" />
                        <Radar name={this.state.currentPlayer.toString()} dataKey="player_two" stroke="#041E42" fill="#000000" fillOpacity={0.6} dot strokeWidth="2" />
                        <Legend />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
                <div className="radar-options">
                    <FilterGameType handleChange={(e)=>this.handleFilter(e)} />
                    <SelectPlayer handleChange={(e)=>this.plotPlayer(e)} playerNames={playerNames} />
                </div>
            </div>
        );
    }
}

export default TwoLevelPieChart