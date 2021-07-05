import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  useEffect(() => {
    props.fetchItems()
  })

  return (
    <div>
      <div className="container">
        {props.items.map((item) => (
          <h2 className="containerChild" key={props.items.indexOf(item)}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </h2>
        ))}
      </div>
    </div>
  )
}

export default Homepage
