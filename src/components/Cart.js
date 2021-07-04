const Cart = (props) => {
  return (
    <div>
      <p>Total price: $ {props.cartPrice.reduce((a, b) => a + b, 0)} </p>
      <p>Total items in cart: </p>
      {props.cartItemsTotal.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  )
}

export default Cart
