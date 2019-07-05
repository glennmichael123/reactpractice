import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Body/Index"

const App = ()  => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Index} />
      </Router>
    </div>
  );
}

export default App;
