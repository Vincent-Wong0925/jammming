import './App.css';
import Searchbar from '../Searchbar/Searchbar'
import Track from '../Track/Track'

function App() {
  return (
    <div className="App">
      <Searchbar></Searchbar>
      <Track song='Complicated' artist='Avril Lavigne' album='Breakaway'></Track>
    </div>
  );
}

export default App;
