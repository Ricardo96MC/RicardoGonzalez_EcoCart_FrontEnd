import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ArtistPage } from './pages/ArtistPage';


import './App.css';
import './stylesheets/Responsive.css'
import './stylesheets/SignUpForm.css'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<any | null>({});
  const [loginIsShown, setLoginIsShow] = useState(false);

  function handleLoginClick() {
    setLoginIsShow((loginIsShown) => !loginIsShown)
    console.log("handling click: ", loginIsShown)
  }

  return (
    <div className="App">
      <NavBar searchInput={searchInput} setSearchInput={setSearchInput} setSearchResult={setSearchResult} handleLoginClick={handleLoginClick} />
      <div className="AppBody">
        <Routes>
          <Route path='/' element={<Home loginIsShown={loginIsShown} handleLoginClick={handleLoginClick} />} />
          <Route path='/searchResult' element={<ArtistPage
            artistSearchResult={searchResult} loginIsShown={loginIsShown} handleLoginClick={handleLoginClick}
          />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;