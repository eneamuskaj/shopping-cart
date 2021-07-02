import React from 'react'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/Cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
