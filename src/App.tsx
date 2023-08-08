import React from 'react';
import TitlePanel from './components/TitlePanel';
import AboutPanel from './components/AboutPanel';
import AboutPage from './pages/AboutPage';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#99a3f5] to-[#f4cffa]">
      <NavMenu/>
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
