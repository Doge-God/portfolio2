import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HighlightsPage from './pages/HighlightsPage';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#99a3f5] to-[#f4cffa]">
      <BrowserRouter>
        <NavMenu/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/highlights' element={<HighlightsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
