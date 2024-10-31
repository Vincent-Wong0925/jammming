import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import Tracklist from '../Tracklist/Tracklist'

const tracks = [{
  song: 'Complicated',
  artist: 'Avril Lavigne',
  album: 'Breakaway'
  },
  {
    song: 'Sk8ter Boi',
    artist: 'Avril Lavigne',
    album: 'Breakaway'
  },
  {
    song: 'Bite Me',
    artist: 'Avril Lavigne',
    album: 'Love Sux'
  }
];

function App() {
  return (
    <div className="App">
      <Searchbar></Searchbar>
      <Tracklist tracks={tracks} />
    </div>
  );
}

export default App;
