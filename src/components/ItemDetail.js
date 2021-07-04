import React, { useState, useEffect } from 'react'

function Item(props) {
  useEffect(() => {
    props.fetchItem(props.location.pathname)
    console.log(props.location.pathname)
  }, [])

  return (
    <div>
      <h1>{props.item.name}</h1>
      <img src={props.item.sprites.front_default} alt="def" />
      <h2>Price: $ {props.item.base_experience}</h2>
      <form>
        <input
          value={props.cartItems}
          type="text"
          placeholder="Input the number of items"
          onChange={props.handleChange}
        />
        <button onClick={props.handleClick} type="button">
          Add to Cart
        </button>
      </form>
      <p>
        You currently have {props.cartItems} items * ${' '}
        {props.item.base_experience} each = ${' '}
        {props.cartItems * props.item.base_experience} total.
      </p>
    </div>
  )
}

export default Item
