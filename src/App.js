import React, { useState } from 'react'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ItemDetail from './components/ItemDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom'

const App = () => {
  // state
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState(0)
  const [cartPrice, setCartPrice] = useState([])
  const [cartItemsTotal, setCartItemsTotal] = useState([])
  const [item, setItem] = useState({
    sprites: { front_default: '' },
    base_experiece: 0,
  })

  const fetchItems = async () => {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon/')
    const items = await data.json()
    setItems(items.results)
  }

  const fetchItem = async (id) => {
    const fetchItem = await fetch(`http://pokeapi.co/api/v2/pokemon${id}`)
    const item = await fetchItem.json()

    setItem(item)
  }

  const handleClick = () => {
    const cartItemsData = cartItemsTotal
    const price = cartPrice
    let i = 0
    while (i < cartItems) {
      cartItemsData.push(item.name)
      price.push(item.base_experience)
      i++
    }
    setCartItemsTotal(cartItemsData)
    setCartPrice(price)
  }

  const handleChange = (event) => {
    setCartItems(event.target.value)
  }

  return (
    <HashRouter basename="/">
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Homepage
                fetchItems={fetchItems}
                items={items}
                setItems={setItems}
              />
            </Route>
            <Route path="/Cart" exact>
              <Cart cartPrice={cartPrice} cartItemsTotal={cartItemsTotal} />
            </Route>
            <Route
              path="/:id"
              exact
              render={(props) => (
                <ItemDetail
                  {...props}
                  item={item}
                  setItem={setItem}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  fetchItem={fetchItem}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    </HashRouter>
  )
}

export default App
