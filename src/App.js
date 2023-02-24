import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import FactOne from './components/FactOne';
import FactTwo from './components/FactTwo';
import FactThree from './components/FactThree';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/funFacts' component={Home}/>
        <Route path='/FactOne' component={FactOne}/>
        <Route path='/FactTwo' component={FactTwo}/>
        <Route path='/FactThree' component={FactThree} />
      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
