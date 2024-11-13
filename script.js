// @ Variables

// 1 sequence [] : to store sequence of squares (each square is presented by an index(0 - 8))
let sequence = []
// 2 playerInput [] : to store players input sequence
let playerInput = []

// 3 gameOver : true or false to indicate if game is over or not
let gameOver = false

// 4 currentLevel : to track current level (starting from 1)
let currentLevel = 1

// 5 squareColors [] : to store colors of each square (9 colors)
const squareColors = [
  'red',
  'blue',
  'yellow',
  'blueviolet',
  'green',
  'purple',
  'orange',
  'brown',
  'teal'
]

// 6 playerScore : to track player score (each level is 1 point)
let playerScore = 0

// 7 gridSize : a number for grid (3 X 3) 3 rows and 3 columns
const numSquares = 9

// 8 numSquares : to track numbers of squares (9 in this case)

//@ functions

// startNewGame : this function will reset the game score and squares and will inform the player to start by printing a massage that states that.
const startNewGame = () => {
  sequence = []
  playerInput = []
  currentLevel = 1
  playerScore = 0
  generateRandomSquare()
  displaySequence()
  console.log('Game started. Level:', currentLevel)
}

// generateRandomSquare : this function will generate a random square from the array.
const generateRandomSquare = () => {
  let randomSquare = Math.random * numSquares
  sequence.push(randomSquare)
}
console.log('sequence: ', sequence)
// addSquare : this function will add a random square

// displaySequence : this function will show the sequence to the player (flashing)
const displaySequence = () => {
  let index = 0
}

// getPlayerInput : this function will receive the player input
const getPlayerInput = () => {
  getPlayerInput = []
  const squares = document.querySelectorAll('.square')
  squares.forEach(function (square, index) {
    square.addEventListener('click', function () {
      if (!gameOver) {
        playerInput.push(index)
      }
    })
  })
}

// checkPlayerInput : this function will check if the player input matches the flashing sequence by looping through the players input and see if it matches, if it dosent match it will go to game over
const checkPlayerInput = () => {}

// checkGameOver : this function will handle if the game is over by checking if the player has chosen the correct squares in the order specified and will display a game over message.

//
