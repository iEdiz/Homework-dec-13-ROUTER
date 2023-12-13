import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Songs } from './Songs';
import { About } from './About';
import { CreateSong } from './CreateSong';
import './App.css'
import { SongDetail } from './SongDetails';

const App = () => {
  return (
    <div>
      <nav className='navigation-wrapper'>
        <Link to="/" className='navigation__home'>Home</Link>
        <Link to="/songs" className='navigation__home'>Songs</Link>
        <Link to="/create-post" className='navigation__home'>Add Song</Link>
        <Link to="/about" className='navigation__home'>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path='/songs/:id' element={<SongDetail />} />
        <Route path="/create-post" element={<CreateSong />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;