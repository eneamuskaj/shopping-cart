import React, { useState, useEffect } from 'react'

const Item = (match) => {
  useEffect(() => {
    fetchItem()
  }, [])

  const [item, setItem] = useState({
    sprites: { front_default: '' },
  })

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://pokeapi.co/api/v2/pokemon/${match.match.params.id}`
    )
    const item = await fetchItem.json()
    console.log(item)
    setItem(item)
  }
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.sprites.front_default} alt="def" />
    </div>
  )
}

export default Item
