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

let guesses = 10
let guessDOM
let wins = 0
let winDOM

let restartPrompt

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
  if(guessedLetters.indexOf(event.key) == -1){
    guesses--
}else{
  //for(let i = 0; i < guessedLetters.length; i++){
    guessedLetterString += event.key
    guessedLetterString += " "
  //}
  //console.log('displayLettersGuessed ' + guessedLetterString)
  guesses --

  guessedDOM = document.getElementById("lettersGuessed")
  guessedDOM.innerHTML = "<h3>" + guessedLetterString + "</h3>"
}
  initialSettings()
}

//this doesnt work well
function endCheck(){
  if(correctGuesses.length == currentSong.length){
    alert('you win! Nice!')
    restartQuestion()
  }
  else if(guesses == 0 && correctGuesses.length + 1 == currentSong.length){
    alert('no more guesses, you win')
    restartQuestion()
  }else if (guesses == 0 && correctGuesses.length < currentSong.length){
    alert('no more guesses, you lose')
    restartQuestion()
  }
}

function restartQuestion(){
  restartQuestion = confirm('Would You Like to Play Again?')
  if(restartQuestion == true){
    alert('start over')
  }
}

function pressKey(){
  document.onkeyup = (event) => {
    //create another keyup process of searching for pressed letters in the spaceDisplay
    //array, repopulating the underlineSpaces string, and having a new string for guessed letters
    //search to see if event.key is equal to any of the letters in currentSong
    //loop through spaceDisplay and if event.key matches any update the songArray
    //console.log('event key ' + event.key)
    underlineSpaces = ""
    //console.log('underlineSpaces ' + underlineSpaces)

    guessedLetters.push(event.key)

    if(currentSong.indexOf(event.key) == -1){
      console.log(event.key + ' is not in this word')
    }else //otherwise rerender underlineSpaces
    {
      console.log('guess is correct')
      if(correctGuesses.indexOf(event.key) == -1){
        correctGuesses.push(event.key)
        console.log('correct guesses ' + correctGuesses + ' ' + correctGuesses.length)
        console.log(currentSong.length)
      }
      displayOriginalSpaces()
    }

    displayLettersGuessed()
    endCheck()
  }
}

function startOver(){

}
  alert('Press Any Key To Start')

document.onkeyup = () => {

  initialSettings()

  pickSong()

  displayOriginalSpaces();

  pressKey()

}
