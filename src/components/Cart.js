const Cart = (props) => {
  return (
    <div>
      <p>Total price: $ {props.cartPrice.reduce((a, b) => a + b, 0)} </p>
      <p>Total items in cart: </p>
      <div className="cartItems">
        {props.cartItemsTotal.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Cart
