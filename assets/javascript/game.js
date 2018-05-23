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
let correctGuesses = []

function pickSong(){
  //create random number between 0 and 4
  ranNum = Math.floor(Math.random() * 5);
  currentSong = songArray[ranNum];
  console.log('current song is ' + currentSong)
}

function displayOriginalSpaces(){
  //populate spaces under div if there is a letter and not a space
  for(let i = 0; i < currentSong.length; i++){
  //  console.log(currentSong.charAt(i));
    //spaceDisplay.push(currentSong.charAt(i));
  //  console.log(spaceDisplay)
    //else if statement for placing letter or space in div
    if(currentSong.charAt(i) != " "){
      //spaceDisplay[i]
      //currentSong.charAt(i)
      //concatenate a string of underlines
      underlineSpaces += "__ "
    }else{
      underlineSpaces += "&nbsp&nbsp&nbsp"
    }
  }
  wordSpaces = document.getElementById('currentWord')
  wordSpaces.innerHTML = "<h3>" + underlineSpaces + "</h3>"
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
    //console.log('event key ' + event.key)
    guessedLetters.push(event.key)
    //console.log(spaceDisplay)
    console.log('guessed letters ' + guessedLetters)
    //console.log('space display is ' + spaceDisplay + ' ' + typeof spaceDisplay);
    //reset underlineSpaces


    for(let i = 0; i < currentSong.length; i++){
      spaceDisplay.push(currentSong.charAt(i));
        //currentSong.indexOf(guessedLetters[i]) == -1
    }

    if(currentSong.indexOf(event.key) == -1){
      console.log(event.key + ' is not in this word')
    }else //otherwise rerender underlineSpaces
    {
      console.log('guess is correct')
      /*for(let i = 0; i < correctGuesses.length; i++){
        //if guess letter is not in the string
        if(currentSong.indexOf(guessedLetters[i]) == -1){

        }//otherwise
        else{}
      }*/
      for(let i = 0; i < currentSong.length; i++){
        //if the letter in current song is present in guessedLetters
        if(guessedLetters.indexOf(currentSong[i]) !== -1){
          underlineSpaces += currentSong[i]
        }//if the letter is a spaces
        else if(currentSong == " "){
          underlineSpaces += "&nbsp&nbsp&nbsp"
        }//if the letter in current song is not present in guessletters
        else{
          underlineSpaces += "__ "
        }
      }
    //  console.log(event.key + ' is in the word')
    }


  //  console.log(spaceDisplay + ' space display')
    //for(let i = 0; i < .length; i++){
      //create another for loop to loop through guessedLetters and make new string
      /*for(let j = 0; j < guessedLetters.length; j++){
        if(guessedLetters[j] == currentSong[i]){
          //populate underlineSpaces
          underlineSpaces += guessedLetters[j].toString()
        }//else if add space
        else if(currentSong[i] == " "){
          underlineSpaces += "&nbsp&nbsp&nbsp"
        }//else the guessed letter is not there and add empty space
        else{
          underlineSpaces += "__ "
        }
      }*/

    //  }
    /*  if(event.key == currentSong.charAt(i)){
        //newUnderlineSpaces.push(event.key)
        underlineSpaces.indexOf(i) = event.key
      }
      else{
        //newUnderlineSpaces.push(" ")
        newUnderlineSpaces[i] = " "
        //create another loop to check if any of guessedLetters fits in
       for(let j = 0; j < guessedLetters.length; j++){
          //if statement to see if spacedisplay[i] is equal to any guessed guessed
          console.log('guessed letters ' + guessedLetters)
          if(spaceDisplay[i] == guessedLetters[j]){
            newUnderlineSpaces[i] = guessedLetters[j]
          }
          //console.log(j)
        }
      }*/


    //}
    console.log('underlineSpaces ' + underlineSpaces)
  //  wordSpaces.innerHTML = "<h3>" + newUnderlineSpaces + "</h3>"
    //console.log('newUnderlineSpaces ' + newUnderlineSpaces)
  }
}

document.onkeyup = () => {

  pickSong()

  //create an array to display spaces for letters, may not be needed
  let spaceDisplay = []

  displayOriginalSpaces();

  let newUnderlineSpaces = []

  pressKey()


}
