import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { About } from './scenes/About';
import { Home } from './scenes/Home/index';


function App() {
  return (
    <div className="App">
      <nav>
         <ul id="navigation">
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/about">About</Link>
             </li>
         </ul>
     </nav>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/ >
      </Routes>
    </div>
  );
}

export default App;
