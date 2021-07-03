import React, { useState, useEffect } from 'react'

const Item = (match) => {
  useEffect(() => {
    fetchItem()
  }, [])

  const [item, setItem] = useState({
    sprites: { front_default: '' },
    base_experiece: 0,
  })
  const [cartItems, setCartItems] = useState(0)

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://pokeapi.co/api/v2/pokemon/${match.match.params.id}`
    )
    const item = await fetchItem.json()
    console.log(item)
    setItem(item)
  }

  const handleClick = () => {
    console.log('clicked')
  }
  const handleChange = (event) => {
    setCartItems(event.target.value)
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.sprites.front_default} alt="def" />
      <h2>Price: $ {item.base_experience}</h2>
      <form>
        <input
          value={cartItems}
          type="text"
          placeholder="Input the number of items"
          onChange={handleChange}
        />
        <button onClick={handleClick} type="button">
          Add to Cart
        </button>
      </form>
      <p>You currently have {cartItems} in cart</p>
    </div>
  )
}

export default Item
