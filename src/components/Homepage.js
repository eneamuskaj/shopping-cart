import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  useEffect(() => {
    props.fetchItems()
  }, [])

  return (
    <div>
      {props.items.map((item) => (
        <h1 key={props.items.indexOf(item)}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  )
}

export default Homepage
