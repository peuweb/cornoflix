import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/cadastro/video" component={CadastroVideo} exact/>
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    <Route path="/" component={Home} exact/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
