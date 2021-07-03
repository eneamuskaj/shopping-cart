import React, { useState } from 'react'
import Homepage from './components/Homepage'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ItemDetail from './components/ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Item from './components/ItemDetail'

const App = () => {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon/')
    const items = await data.json()
    console.log(items.results)
    setItems(items.results)
  }

  const [item, setItem] = useState({
    sprites: { front_default: '' },
    base_experiece: 0,
  })
  const [cartItems, setCartItems] = useState(0)

  const fetchItem = async (id) => {
    const fetchItem = await fetch(`http://pokeapi.co/api/v2/pokemon${id}`)
    const item = await fetchItem.json()
    console.log(item)
    setItem(item)
    console.log(id)
  }

  // function fetchItem(id) {
  //   console.log(id)
  // }

  const handleClick = () => {
    console.log('clicked')
  }
  const handleChange = (event) => {
    setCartItems(event.target.value)
  }

  return (
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
            <Cart />
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
          {/* <ItemDetail
              item={item}
              setItem={setItem}
              cartItems={cartItems}
              setCartItems={setCartItems}
              // fetchItem={fetchItem}
              handleClick={handleClick}
              handleChange={handleChange}
            />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
