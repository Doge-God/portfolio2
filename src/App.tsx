import React from 'react';
import TitlePanel from './components/TitlePanel';
import AboutPanel from './components/AboutPanel';
import AboutPage from './pages/AboutPage';
import NavButton from './components/NavButton';

function App() {
  return (
    <div className="App">
      <NavButton></NavButton>
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
