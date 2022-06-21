function Cards(props) {
    return (
      <div className="col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.data.img} class="card-img-top" alt="..."></img>
  
          <div className="card-body">
            <h3 className="card-title">{props.data.productName}</h3>
            <h6>{props.data.prize}</h6>
  
            <p className="card-text detail">{props.data.detail}</p>
            <button
              className="btn btn-primary"
              disabled={props.cartItem.some((obj) => obj.id === props.data.id)}
              onClick={() => props.addToCart(props.data.id)}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Cards;
  