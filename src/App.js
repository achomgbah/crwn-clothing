import React from 'react';
import './App.css';
import './pages/homepage.styles.scss'
import Homepage from "./pages/homepage.component";
import { Switch,Route } from 'react-router-dom';
const hats = () => (
    <div>
        <h1>Hats</h1>
    </div>
);
function App() {
  return (
    <div>
        <Switch>
      <Route exact path={'/'} component={Homepage}/>
      <Route exact path={'/hats'} component={hats}/>
        </Switch>
    </div>
  );
}

export default App;
