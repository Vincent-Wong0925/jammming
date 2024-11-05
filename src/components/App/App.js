import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

const mockTracks = [{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 0
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 1
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 2
  },{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 3
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 4
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 5
  },{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 6
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 7
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 8
  },{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 9
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 10
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 11
  },{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 12
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 13
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 14
  },{
    song: 'I am blue',
    artist: 'IDK',
    album: 'IDC',
    id: 15
  },
  {
    song: 'Never gonna give you up',
    artist: 'Rick Asley',
    album: 'IDK',
    id: 16
  },
  {
    song: 'Stupid ticktok song',
    artist: 'IDK',
    album: 'IDC',
    id: 17
  }
];

function App() {
  const [results, setResults] = useState(mockTracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const handleNameChange = (newName) => {
    setPlaylistName(newName);
  };

  const addTrack = useCallback((trackToAdd) => {
    if (playlist.some((track) => trackToAdd.id === track.id)) {
      return;
    }
    setPlaylist((prev) => [...prev, trackToAdd]);
  },[playlist]);

  const removeTrack = useCallback((idToRemove) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== idToRemove));
  },[]);

  const search = (term) => {
    Spotify.search(term);
  }

  return (
    <div className="App">
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>
      <main>
        <Searchbar search={search}/>
        <div className='container'>
          <SearchResults 
            results={results} 
            addTrack={addTrack} />
          <Playlist 
            playlist={playlist}
            playlistName={playlistName}
            onNameChange={handleNameChange}
            removeTrack={removeTrack} />
        </div>
      </main>
    </div>
  );
}

export default App;
