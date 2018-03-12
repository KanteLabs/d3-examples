import React, { Component } from 'react';
import playerNames from '../data/player-names';

class SelectPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerList: {}
        }
    }

    componentDidMount() {
        this.setState({
            playerList: playerNames
        })
    }

    renderNames = () => {
        return(
            <select className="player-list" name="player-name" onChange={(e)=>console.log(e.target.value)}>
                {Object.values(playerNames).map((item, i)=>{
                    return(
                        <option value={item.player} key={i}>{item.player}</option>
                    )
                })}
            </select>
        )
    }
    render(){
        return(
            <div className="player-names">
                {this.renderNames()}
            </div>
        )
    }
}

export default SelectPlayer;