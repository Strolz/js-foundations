Build an Music Player
---------------------------------

In this workshop you will create a music player app capable of playing, pausing, and skipping songs from a playlist.

The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.
---------------------------------

Step 1
======
Start by accessing the #playlist-songs, #play, and #pause elements and assign them to the variables playlistSongs, playButton and pauseButton, respectively.
---------------------------------

Step 2
======
Access the #next and #previous elements from the HTML file.

Assign them to variables named nextButton, and previousButton, respectively.
---------------------------------

Step 3
======
Next, create an empty array named allSongs to store all the songs.
---------------------------------

Step 4
======
Inside the allSongs array, create an object with the following properties and values:

id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
---------------------------------

Step 5
======
Add a second object with the following keys and values:

id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
---------------------------------

Step 6
======
Add a third object with the following properties and values:

id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
---------------------------------

Step 7
======
The rest of the songs has been added to the allSongs array for you.

In previous lessons, you learned about the Web Audio API and how to use it to play songs. All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.

Create a variable named audio and set it equal to new Audio(). This will create a new HTML5 audio element.
---------------------------------

Step 8
======
Your music player should keep track of the songs, the current song playing, and the time of the current song. To do this, you will need to create an object to store this information.

Start by declaring a new variable called userData and assign it an empty object.
---------------------------------

Step 9
======
In your userData object, create a songs property and set its value to the allSongs array.

Then, to handle the current song's information and track its playback time, create a currentSong and songCurrentTime properties. Set the values to null and 0, respectively.
---------------------------------

Step 10
=======
It's time to begin implementing the functionality for playing the displayed songs.

Define a playSong function that takes an single parameter which will represent the unique identifier of the song you want to play.
---------------------------------

Step 11
=======
Within your playSong function, use the find() method on the userData.songs array to search for a song which has an id strictly equal to the id passed into the playSong function. Assign the find call to a variable named song.
---------------------------------

Step 12
=======
Still inside the playSong function, set the audio.src property equal to song.src. This tells the audio element where to find the audio data for the selected song.

Also, set the audio.title property equal to song.title. This tells the audio element what to display as the title of the song.
---------------------------------

Step 13
=======
Before playing the song, you need to make sure it starts from the beginning. This can be achieved by the use of the currentTime property on the audio object.

Add an if statement to check if no current song is playing by verifying that userData.currentSong is falsy. Inside if block, set the currentTime property of the audio object to 0
---------------------------------

Step 14
=======
Add an else block to handle the song's current playback time. This allows you to resume the current song at the point where it was paused.

Within the else block, set the currentTime property of the audio object to the value stored in userData.songCurrentTime.
---------------------------------

Step 15
=======
Next, use the classList property and the add() method to add the playing class to the playButton element. This will look for the class playing in the CSS file and add it to the playButton element.

Then, set userData.currentSong to song, and to finally play the song, use the play() method on the audio variable. play() is a method from the web audio API for playing an mp3 file.
---------------------------------

Step 16
=======

---------------------------------

Step 17
=======

---------------------------------

Step 18
=======

---------------------------------

Step 19
=======

---------------------------------

Step 20
=======

---------------------------------

Step 21
=======

---------------------------------

Step 22
=======

---------------------------------

Step 23
=======

---------------------------------

Step 24
=======

---------------------------------

Step 25
=======

---------------------------------

Step 26
=======

---------------------------------

Step 27
=======

---------------------------------

Step 28
=======

---------------------------------

Step 29
=======

---------------------------------

Step 30
=======

---------------------------------

Step 31
=======

---------------------------------

Step 32
=======

---------------------------------

Step 33
=======

---------------------------------

Step 34
=======

---------------------------------

Step 35
=======

---------------------------------

Step 36
=======

---------------------------------

Step 37
=======

---------------------------------

Step 38
=======

---------------------------------

Step 39
=======

---------------------------------

Step 40
=======

---------------------------------

Step 41
=======

---------------------------------

Step 42
=======

---------------------------------

Step 43
=======

---------------------------------

Step 44
=======

---------------------------------

Step 45
=======

---------------------------------

Step 46
=======

---------------------------------
