var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var array = Object.values(playListPrintFormat());
  for (let i of array){
    console.log(i);
  }

};

// Writing a new function to store print format playlist in an object
// instead of printing
var playListPrintFormat = function (){
  var id = "";
  var name = "";
  var tracks = 0;
  var output = {};

  for (let list in library.playlists){
    for (let key in library.playlists[list]){

      if(key === "id"){
        id = library.playlists[list][key];
      }

      if(key === "name"){
        name = library.playlists[list][key];
      }

      if(key === "tracks"){
        tracks = library.playlists[list][key].length;
      }

    }
  output[id] = id + ": " + name + " - " + tracks + " tracks";
  }

return (output);
};

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var array = Object.values(tracksPrintFormat());
  for (let i of array){
    console.log(i);
  }

};

//writing a new function to store print format track lists in an object
//instead of printing
var tracksPrintFormat = function (){
  var id = "";
  var name = "";
  var artist = "";
  var album = "";
  var output = {};

  for (let list in library.tracks){
    for (let key in library.tracks[list]){

      if(key === "id"){
        id = library.tracks[list][key];
      }

      if(key === "name"){
        name = library.tracks[list][key];
      }

      if(key === "artist"){
        artist = library.tracks[list][key];
      }

      if(key === "album"){
        album = library.tracks[list][key];
      }
    }
  output[id] = id + ": " + name + " by " + artist + " (" + album + ")";
  // console.log(id + ":", name, "by", artist, "(" + album + ")");
  // console.log(Object.values(output));
  }
return output;
};


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  for (let list in library.playlists){
    if (list === playlistId){

    }


  }
};


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

}


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}


printTracks();
