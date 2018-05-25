# hangmanGame

Had a great time coding this and feel very proud and accomplished of the end
result.  Took about 4 days, and learned a lot of things, most importantly to
keep a cool head at all times.  With patience and persistance any problem can
be solved.

Good review of string and array methods, especially indexOf.  Also happy with
the way i was able to separate the functions from the "action" code.  One little
bug i'd like to fix is that when the game is over the win/lose alert displays
before the guessed word is updated.  I believe this can be solved with a timeout,
more on that next week.  On to jQuery!

PSEUDOCODE:

array of different songs
image of album cover the song is on
. onkeyup event listener to start game
display amount of spaces in the current word
  -this will be an array
guess counter
  -checks whether or not the letter has been guessed already
letters already guessed
  -array that loops through and prints every key up


  after initial key press, every time a key is pressed:
  current word gets repopulated
  letters already guessed gets repopulated
  number of guesses goes down
