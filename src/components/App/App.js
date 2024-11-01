import React from 'react';
import { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const mockTracks = [{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC'
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK'
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC'
  }
];

function App() {
  const [results, setResults] = useState(mockTracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const handleNameChange = (newName) => {
    setPlaylistName(newName);
  }

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <Searchbar />
        <div className='container'>
          <SearchResults results={results} />
          <Playlist 
            playlist={playlist}
            playlistName={playlistName}
            onNameChange={handleNameChange} />
        </div>
      </main>
    </div>
  );
}

export default App;
