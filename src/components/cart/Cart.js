import { Image } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"
import { removeFromCart } from "../../state"
import './cart.css'
export default function Cart(props){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    return (
      <div className="cart-list">
        {cart.map((item) => (
          <div className="item  ">
            <div className="d-flex justify-content-evenly  pb-3 ">
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  className="img-fluid rounded-3"
                  src={item.image}
                  width={80}
                  alt={item.name}
                />
              </div>
              <div className="mx-2">
                <p className=" text-secondary fw-semibold">{item.name}</p>
                <p>
                  <span className=" text-secondary fw-semibold">
                    ${item.price} x {item.count}
                  </span>
                  <span className=" fw-bold"> ${item.price * item.count}</span>
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/icon-delete.svg"
                  alt="delete-svg"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="p-3">
          <button
            className="checkout d-flex align-items-center py-3 px-5 border-0 rounded-3 text-white fw-bold w-100 justify-content-center"
            onClick={() => {}}
          >
            Checkout
          </button>
        </div>
      </div>
    );
}