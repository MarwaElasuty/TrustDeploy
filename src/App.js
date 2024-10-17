import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import SafeSend from './SafeSend';
import Home from './Home';


function App() {
  return (
  
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/safesend' element={<SafeSend />}></Route>

    </Routes>
    </Router>

  );
}


export default App;