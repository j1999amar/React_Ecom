function Cartitem(props) {
    return (
      <div>
        <li class="list-group-item d-flex justify-content-between align-items-start cart">
          <div class="ms-2 me-auto">
            <h5>{props.data.productName}</h5>
            <h6>Rs: {props.data.prize}</h6>
          </div>
          <button onClick={() => props.removeFromCart(props.data.id)}>❌</button>
        </li>
      </div>
    );
  }
  export default Cartitem;
  