import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HighlightsPage from './pages/HighlightsPage';
import { AnimatePresence } from 'framer-motion';
import RoutesWithAnimation from './components/RoutesWithAnimation';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#99a3f5] to-[#f4cffa]">
      <BrowserRouter>

          <NavMenu/>
          <RoutesWithAnimation/>

      </BrowserRouter>
    </div>
  );
}

export default App;
