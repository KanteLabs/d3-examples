import React from 'react';

const SelectPlayer = (props) => {
    
    
    const renderNames = () => {
        const { playerNames } = props;
        
        return(
            <div className="player-names">
                <label htmlFor="payler-list">Player: </label>
                <select className="player-list" name="player-name" onChange={(e)=>props.handleChange(e)}>
                    {Object.values(playerNames).map((item, i)=>{
                        return(
                            <option value={item} key={i}>{item}</option>
                        )
                    })}
                </select>
            </div>
        )
    }

    return(
        props.playerNames ? renderNames() : null
    )
}

export default SelectPlayer;