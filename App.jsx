import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddPlayer from './components/AddPlayer';

import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import ShowPlayer from './components/ShowPlayer';
function App() {
  
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Header/>} />
       <Route path="/add" element={<AddPlayer/>} />
      <Route path="/show" element={<ShowPlayer/> } />
      </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;