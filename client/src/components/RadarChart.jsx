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
            regularData: [
                {category: 'Steals', player_one: 1.2, player_two: RegularStats["Stephen Curry"].STL, cap: 30},
                {category: 'Rebounds', player_one: 8.6, player_two: RegularStats["Stephen Curry"].REB, cap: 30},
                {category: 'Assists', player_one:8.7, player_two: RegularStats["Stephen Curry"].AST, cap: 30},
                {category: 'Free Throws', player_one: 4.8, player_two: RegularStats["Stephen Curry"].FTM, cap: 30},
                {category: 'Turnovers', player_one: 4.1, player_two: RegularStats["Stephen Curry"].TOV, cap: 30},
                {category: 'Field Goals', player_one: 9.9, player_two: RegularStats["Stephen Curry"].FGM, cap: 30},
            ],
            playoffData: [
                {category: 'Steals', player_one: PlayoffStats["LeBron James"].STL, player_two: PlayoffStats["Stephen Curry"].STL, cap: 30},
                {category: 'Rebounds', player_one: PlayoffStats["LeBron James"].REB, player_two: PlayoffStats["Stephen Curry"].REB, cap: 30},
                {category: 'Assists', player_one: PlayoffStats["LeBron James"].AST, player_two: PlayoffStats["Stephen Curry"].AST, cap: 30},
                {category: 'Free Throws', player_one: PlayoffStats["LeBron James"].FTM, player_two: PlayoffStats["Stephen Curry"].FTM, cap: 30},
                {category: 'Turnovers', player_one: PlayoffStats["LeBron James"].TOV, player_two: PlayoffStats["Stephen Curry"].TOV, cap: 30},
                {category: 'Field Goals', player_one: PlayoffStats["LeBron James"].FGM, player_two: PlayoffStats["Stephen Curry"].FGM, cap: 30},
            ]
        }
    }

    componentDidMount() {
        const { season } = this.state;
        switch (season) {
            case 'regular':
                this.setState({ playerNames: RegularNames })
                break;
            case 'playoffs':
                this.setState({ playerNames: PlayoffNames })
                break;
            default:
                break;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if((nextState.currentPlayer !== this.state.currentPlayer) || (nextState.season !== this.state.season)){
            return true;
        }else{
            return false;
        }
    }

    plotPlayer = (e) => {
        let { season, regularData, playoffData} = this.state;
        let name = e.target.value;
        let playerStats = season === 'regular' ? RegularStats[name] : PlayoffStats[name];
        
        switch (season) {
            case 'regular':
                regularData[0].player_two = playerStats.STL;
                regularData[1].player_two = playerStats.REB;
                regularData[2].player_two = playerStats.AST;
                regularData[3].player_two = playerStats.FTM;
                regularData[4].player_two = playerStats.TOV;
                regularData[5].player_two = playerStats.FGM;

                this.setState({regularData: regularData, currentPlayer: name})
                break;
            case 'playoffs':
                playoffData[0].player_two = playerStats.STL;
                playoffData[1].player_two = playerStats.REB;
                playoffData[2].player_two = playerStats.AST;
                playoffData[3].player_two = playerStats.FTM;
                playoffData[4].player_two = playerStats.TOV;
                playoffData[5].player_two = playerStats.FGM;

                this.setState({playoffData: playoffData, currentPlayer: name})
                break;
        
            default:
                break;
        }
    }

    handleFilter = (e) => {
        let { playerNames } = this.state;
        let filter = e.target.value;
        if(filter === 'playoffs') {
            this.setState({
                season: filter,
                playerNames: PlayoffNames
            })
        } else {
            this.setState({
                season: filter,
                playerNames: RegularNames
            })
        }
    }

    render () {
        const { regularData, season, playoffData, playerNames } = this.state;
        
        return (
            <div>
                <ResponsiveContainer width='100%' height={300}>
                    <RadarChart cx='50%' cy='50%' outerRadius='80%' data={ season === 'regular' ? regularData : playoffData}>
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
                    <SelectPlayer handleChange={(e)=>this.plotPlayer(e)} playerNames={playerNames} season={season} />
                </div>
            </div>
        );
    }
}

export default TwoLevelPieChart