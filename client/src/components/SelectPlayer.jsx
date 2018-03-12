import React, { Component } from 'react';
import playerNames from '../data/player-names';

class SelectPlayer extends Component {

    renderNames = () => {
        return(
            <select className="player-list" name="player-name">
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