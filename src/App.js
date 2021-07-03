import React from 'react'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ItemDetail from './components/ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/:id" exact component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
