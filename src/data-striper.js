let tempStats = ;

let playerObject = []
tempStats.resultSet.rowSet.map((item, i)=>{
  playerObject.push({
    player: `${item[2]}`,
    rank: parseFloat(`${item[1]}`),
    team: `${item[3]}`,
    GP: parseFloat(`${item[4]}`),
    MIN: parseFloat(`${item[5]}`),
    FGM: parseFloat(`${item[6]}`),
    PTS3M: parseFloat(`${item[9]}`),
    FTM: parseFloat(`${item[12]}`),
    REB: parseFloat(`${item[17]}`),
    AST: parseFloat(`${item[18]}`),
    STL: parseFloat(`${item[19]}`),
    TOV: parseFloat(`${item[21]}`),
    PTS: parseFloat(`${item[22]}`),
  })
})
let newPlayerObject = playerObject.splice(0, 100);

  Object.values(PlayerNames).sort((a,b)=>{
    var nameA = a.player.toUpperCase(); // ignore upper and lowercase
    var nameB = b.player.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })

  PlayerNames = {}
temp5.map((player,i)=>{
	PlayerNames[player.player] = player;
})