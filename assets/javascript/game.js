//array of different songs for the options
let songArray = ["stairway to heaven", 'back in black', 'panama', 'iron man',
  'money'];
//first thing we need to do is find a random song and populate
//a div with blank spaces
document.onkeyup = () => {
    //create random number between 0 and 4
    let ranNum = Math.floor(Math.random() * 5);
    let currentSong = songArray[ranNum];
    console.log('current song is ' + currentSong)
    //create an array to display spaces for letters, may not be needed
    let spaceDisplay = []
    //get div for empty Word
    let wordSpaces = document.getElementById('currentWord')
    let underlineSpaces = ""

    //populate spaces under div if there is a letter and not a space
    for(let i = 0; i < currentSong.length; i++){
    //  console.log(currentSong.charAt(i));
      spaceDisplay.push(currentSong.charAt(i));
    //  console.log(spaceDisplay)
      //else if statement for placing letter or space in div
      if(spaceDisplay[i] != " "){
        //concatenate a string of underlines
        underlineSpaces += "__ "
      }else{
        underlineSpaces += "&nbsp&nbsp&nbsp"
      }
    }
    wordSpaces.innerHTML = "<h3>" + underlineSpaces + "</h3>"




}
