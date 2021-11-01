import React from 'react';
import Nav from "./pages/nav";
import About from './pages/about';
import Shop from './pages/shop';
import ItemDetail from './pages/itemDetail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    
    
    <Router>

      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>     
     </div>
    </Router>
  );
}

export default App;
