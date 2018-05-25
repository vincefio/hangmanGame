//array of different songs for the options
let songArray = ["stairway to heaven", 'back in black', 'panama', 'iron man',
  'money'];
//first thing we need to do is find a random song and populate
//a div with blank spaces

//declare variables
let ranNum;
let currentSong;
//get div for empty Word
let wordSpaces
let underlineSpaces = ""
let spaceDisplay = []
//create a new array for letters already guessed
let guessedLetters = []
let guessedLetterString = ""
let guessedDOM
let correctGuesses = []

let guesses = 13
let guessDOM
let wins = 0
let winDOM

let restartPrompt

let correctGuessCount
let songEndCheck = []
let spaceCount

function initialSettings(){
  winDOM = document.getElementById("wins")
  winDOM.innerHTML = "<h3>" + wins + "</h3>"

  guessDOM = document.getElementById("guesses")
  guessDOM.innerHTML = "<h3>" + guesses + "</h3>"
}

function pickSong(){
  //create random number between 0 and 4
  ranNum = Math.floor(Math.random() * 5);
  currentSong = songArray[ranNum];
  console.log('current song is ' + currentSong)
}

function displayOriginalSpaces(){

  //populate spaces under div if there is a letter and not a space
  for(let i = 0; i < currentSong.length; i++){
    //if the letter in current song is present in guessedLetters
    if(guessedLetters.indexOf(currentSong[i]) !== -1){
      underlineSpaces += currentSong[i]
    }//if the letter is a spaces
    else if(currentSong[i] == " "){
      underlineSpaces += "&nbsp&nbsp&nbsp"
    }//if the letter in current song is not present in guessletters
    else{
      underlineSpaces += "__ "
    }
  }
  wordSpaces = document.getElementById('currentWord')
  wordSpaces.innerHTML = "<h3>" + underlineSpaces + "</h3>"
}

function displayLettersGuessed(){
  //only do this if the letter has been guessed before
  //do this if the letter has not been guessed before
  if(guessedLetters.indexOf(event.key) == -1){
    guessedLetters.push(event.key)
    //console.log('guessed letters ' + guessedLetters)
    console.log('this letter has not been guessed before')
    guesses--
    //console.log(event.key + ' is not in  the word')
    guessedLetterString += event.key
    guessedLetterString += " "

    guessedDOM = document.getElementById("lettersGuessed")
    guessedDOM.innerHTML = "<h3>" + guessedLetterString + "</h3>"
}//else if the letter has been guessed before
else if (guessedLetters.indexOf(event.key) !== -1){
  console.log('this letter has been guessed before')
}
  initialSettings()
}

//this doesnt work well
function endCheck(){
  songEndCheck = []
  spaceCount = 0
  correctGuessCount = 0
  //find out how many characters are in current song without spaces
  for(let i = 0; i < currentSong.length; i++){
    if(currentSong[i] == " "){
      spaceCount++
    }
    //check to see if current letter has been guessed
    if(guessedLetters.indexOf(currentSong[i]) !== -1){
      correctGuessCount ++;
    }
  }
  //console.log('space count ' + spaceCount)
  //console.log('correct guess count '+ correctGuessCount)

  //criteria to check if game is over
  if(currentSong.length - spaceCount == correctGuessCount){
    wins ++
    winDOM = document.getElementById("wins")
    winDOM.innerHTML = "<h3>" + wins + "</h3>"
    alert('you win!')
    restartQuestion = confirm('Would You Like to Play Again?')
    if(restartQuestion == true){
      startOver()
    }
  }else if (guesses == 0){
    alert('Sorry, You Lost This Round')
    restartQuestion = confirm('Would You Like to Play Again?')
    if(restartQuestion == true){
      startOver()
    }
  }
}


function pressKey(){
  document.onkeyup = (event) => {

    underlineSpaces = ""

    displayLettersGuessed()
    displayOriginalSpaces()
    endCheck()
  }
}

function startOver(){
  pickSong()
  //console.log(currentSong)
  guessedLetters = []
  guessedLetterString = ""
  underlineSpaces = ""
  guesses = 13
  displayOriginalSpaces()
  guessedDOM = document.getElementById("lettersGuessed")
  guessedDOM.innerHTML = "<h3>" + guessedLetterString + "</h3>"
  initialSettings()
}
  //alert('Press Any Key To Start')

document.onkeyup = () => {

  initialSettings()

  pickSong()

  displayOriginalSpaces();

  pressKey()

}
