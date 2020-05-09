import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import Home from './components/home/Home';
import PokemonDetail from './components/pokemon_detail/PokemonDetail';
import Cont404 from './components/cont_404/Cont404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon_detail/:id" exact component={PokemonDetail} />
          <Route component={Cont404} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
