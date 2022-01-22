import React, { useEffect, useState } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Messages from './components/Messages';
import Selects from './components/Selects';
import Home from './components/Home';

import './App.css';

function App() {
  const [object, setObject] = useState([]);

  useEffect(() => {
    fetch('/db.json')
    .then(res => res.json())
    .then(res => setObject(res.messages));
    
  }, []);
  return(
    <Router>
    <>
      <nav>
        <ul>
          <li>
            <Link to="/messages">messages</Link>
          </li>
          <li>
            <Link to="/selects">selects</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route 
          path="/messages"
          element={<Messages messagesObj = {object} 
          />} />
        <Route 
         path="/selects"
         element={<Selects changeColor = {(color, type)=> {
              setObject(object.map(item => {
                if( type === 'name'){
                  return (
                    {
                      ...item,
                      nameColor:color
                    }
                  )
                }else{
                  return (
                    {
                      ...item,
                      textColor:color
                    }
                  )
                }
              }))
         }} />} />
         <Route
         path="/"
         element={<Home />}
         />
      </Routes>
    </>
  </Router>
  )
}

export default App;
