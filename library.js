function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name){
  this.name = name;
  this._tracks = [];

  Object.defineProperty(this, "tracks", {
    get: () => {
    return this._tracks
    },
    set: (value) => {
      this._tracks = value;
    }
  })

 
  this.overallRating = () => {
    let sum = 0;
    for (let i of this.tracks){
      sum += i.rating
    }
    return sum/this.tracks.length
  }
  this.totalDuration = ()=> {
    let sum = 0;
    for (let i of this.tracks){
      sum += i.length
    }
    return sum
  }
}




function Track(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}


let library1 = new Library('Library1', 'Alice')

// console.log(library1);

let playlist1 = new Playlist('Playlist1')


let track1 = new Track('track1', 3, 70)
let track2 = new Track('track2', 4, 60)
let track3 = new Track('track3', 2, 50)
let track4 = new Track('track4', 3, 60)

library1.playlists = [playlist1]
playlist1.tracks = [track1, track2, track3, track4]


// console.log('library1:', library1)
// console.log('playlist1:', playlist1)
// console.log('overall rating:', playlist1.overallRating())
// console.log('total duration', playlist1.totalDuration())
