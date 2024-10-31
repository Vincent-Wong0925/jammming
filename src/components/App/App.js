import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <Searchbar />
        <div className='container'>
          <SearchResults results={tracks} />
          <Playlist playlist={tracks} />
        </div>
      </main>
    </div>
  );
}

export default App;
