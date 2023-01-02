const team = {
  _players: [
    {
    firstName: 'Polo',
    lastName: 'Sanchez',
    age: 11
  },
     {
    firstName: 'Mario',
    lastName: 'Margin',
    age: 73
  },
     {
    firstName: 'Rahul',
    lastName: 'Pike',
    age: 28
  }
]
   ,
  _games: [
    {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
     {
    opponent: 'Giants',
    teamPoints: 20,
    opponentPoints: 3
  },
     {
    opponent: 'Heats',
    teamPoints: 14,
    opponentPoints: 12
  }
],
  
    get games(){
      return this._games;
  },
   get players(){
      return this._players;
  },
  
  addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);  
  }
};

/////////Adding These Players to _players/////////
team.addPlayer("Steph","Curry",28);
team.addPlayer("Lisa","Leslie",44);
team.addPlayer("Bugs","Bunny",76);
/////////Adding These games to _games/////////
team.addGame("GlobeTrotters",90,45);
team.addGame("Cowboys",14,6);
team.addGame("Aliens",2,7);

console.log(team._players);
console.log(team._games);
