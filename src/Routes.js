import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Homepage from './components/Homepage'
import Cart from './components/Cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
