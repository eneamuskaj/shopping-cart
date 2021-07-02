import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])
  const fetchItems = async () => {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon/')
    const items = await data.json()
    console.log(items.results)
    setItems(items.results)
  }
  return (
    <div>
      {items.map((item) => (
        <h1 key={items.indexOf(item)}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Homepage
