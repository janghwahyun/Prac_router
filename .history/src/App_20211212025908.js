import './App.css';
import { BrowserRouter, Routes, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes path="/home">
        <Home />
      </Routes>
      <Routes path="/profile">
        <Profile />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
