import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home /> / }>
        <Route path="/profile" element={   <Profile />}/ >

      </Switch>
    </BrowserRouter>
  );
}

export default App;
