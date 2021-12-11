import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
