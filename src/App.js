import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from './Main'
import BookInfo from './BookInfo';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}>
            <Main />
          </Route>
          <Route path="/book/:id" component={BookInfo}>
            <BookInfo />
          </Route>
       </Switch>
      </div>
    </Router>
  );
}



export default App;
