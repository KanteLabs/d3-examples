let tempStats = ;

let playerObject = []
tempStats.resultSet.rowSet.map((item, i)=>{
    playerObject.push({
      player: `${item[2]}`,
      rank: parseFloat(`${item[1]}`),
      team: `${item[3]}`,
      GP: parseFloat(`${item[4]}`),
      MIN: parseFloat(`${item[5]}`),
      PTS3M: parseFloat(`${item[9]}`),
      REB: parseFloat(`${item[17]}`),
      AST: parseFloat(`${item[18]}`),
      STL: parseFloat(`${item[19]}`),
      PTS: parseFloat(`${item[22]}`),
    })
  })
  console.log(JSON.stringify(playerObject.splice(0, 100)))