// @ Variables

let sequence = [] // Stores the sequence of squares
let playerInput = [] // Stores the player's input
let gameOver = false // Tracks if the game is over
let currentLevel = 1 // Tracks the current level
let playerScore = 0 // Tracks the player's score
const numSquares = 9 // The number of squares in the grid
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

// Function to start a new game
const startNewGame = () => {
  sequence = []
  playerInput = []
  currentLevel = 1
  playerScore = 0
  gameOver = false

  console.log('Game started. Level:', currentLevel)
  generateRandomSquare()
  displaySequence()
}

// Function to generate a random square and add it to the sequence
const generateRandomSquare = () => {
  let randomSquare = Math.floor(Math.random() * numSquares)
  sequence.push(randomSquare)
}

// Function to display the sequence (flashing effect)
const displaySequence = () => {
  let index = 0

  let interval = setInterval(() => {
    const square = document.getElementById(`square${sequence[index] + 1}`)
    if (square) {
      square.style.opacity = 0

      setTimeout(() => {
        square.style.opacity = 1
      }, 500)
    }
    index++
    if (index >= sequence.length) {
      clearInterval(interval)
      getPlayerInput()
    }
  }, 1000)
}

// Function to handle player input by adding event listeners to the squares
const getPlayerInput = () => {
  playerInput = []
  const squares = document.querySelectorAll('.square')

  squares.forEach((square) => {
    square.removeEventListener('click', handleSquareClick)
  })

  squares.forEach((square) => {
    square.addEventListener('click', handleSquareClick)
  })
}

// This function will be triggered when the player clicks a square
const handleSquareClick = (event) => {
  if (!gameOver) {
    const index = parseInt(event.target.id.replace('square', '')) - 1
    playerInput.push(index)
    console.log('Player input:', playerInput)
    checkPlayerInput()
  }
}

// Function to check if the player input matches the sequence
const checkPlayerInput = () => {
  console.log('Player input:', playerInput)
  console.log('Sequence:', sequence)

  for (let i = 0; i < playerInput.length; i++) {
    if (playerInput[i] !== sequence[i]) {
      gameOver = true
      console.log('Game Over! Mismatch at index', i)
      return
    }
  }

  // If player input matches the sequence
  if (playerInput.length === sequence.length) {
    playerScore++
    currentLevel++
    console.log('Level up! Current level:', currentLevel)

    setTimeout(() => {
      generateRandomSquare()
      displaySequence()
    }, 1000)
  }
}

startNewGame()
