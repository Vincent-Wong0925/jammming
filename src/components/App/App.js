import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const mockTracks = [{
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
  const [results, setResults] = useState(mockTracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <Searchbar />
        <div className='container'>
          <SearchResults results={results} />
          <Playlist playlist={playlist} playlistName={playlistName} />
        </div>
      </main>
    </div>
  );
}

export default App;
