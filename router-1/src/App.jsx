import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

/*
<div class="page">
  <!-- Home -->
  <div class="page__content">
    <h1>🏠</h1>
    <a href="/products">To products</a>
  </div>
  <!-- Products -->
  <div class="page__content">
    <h1>Products</h1>
    <p>We will add some products. Later... 😇</p>
    <a href="/contacts">Contacts</a>
  </div>
  <!-- Contacts -->
  <div class="page__content">
    <h1>Contacts</h1>
    <p>We are here 🗺</p>
    <a href="/">Go home</a>
  </div>
  <!-- PageNotFound -->
  <div class="page__content">
    <h1>😢</h1>
    <a href="/">Go home</a>
  </div>
</div> */
