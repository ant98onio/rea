
function playGame() {
  const playerName = 'MasterReact'; 
  const players = ['Nico', 'Davide', 'Marco', 'Gabriele'];

  if (true) {
    console.log(playGame);
  }

  return {
    getName() {
      console.log(playerName);
    }, 
    getPlayers() {
      for (let i = 0; i < players.length; i++) {
          console.log(players[i])
      }
    }
  }
}


const game = playGame(); 

game.getName(); 
game.getPlayers(); 