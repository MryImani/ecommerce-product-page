import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navbar.css'
import Cart from "../cart/Cart";
export default function Navbar(props){
    return (
      <header className="container  d-flex align-items-center border-0 border-bottom border-light-subtle py-lg-0 py-3 ">
        <div className="d-lg-none me-3" onClick={props.openMenu}>
          <i class="bi bi-list h1 text-secondary fw-bold "></i>
        </div>
        <Image src="/images/logo.svg" />
        <nav className="navbar p-0 d-flex justify-content-end justify-content-lg-between  flex-grow-1 align-items-center">
          <ul className="d-none d-lg-flex list-unstyled m-0 mx-lg-5 ">
            <li className="me-3 py-4">
              <Link
                className=" text-decoration-none text-secondary fw-semibold"
                to="/"
              >
                Collections
              </Link>
            </li>
            <li className="mx-3 py-4">
              <Link
                className="text-decoration-none text-secondary fw-semibold"
                to="/"
              >
                Men
              </Link>
            </li>
            <li className="mx-3 py-4">
              <Link
                className="text-decoration-none text-secondary fw-semibold"
                to="/"
              >
                Women
              </Link>
            </li>
            <li className="mx-3 py-4">
              <Link
                className="text-decoration-none text-secondary fw-semibold"
                to="/"
              >
                About
              </Link>
            </li>
            <li className="mx-3 py-4">
              <Link
                className="text-decoration-none text-secondary fw-semibold "
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className=" d-flex align-items-center ">
            <div className="mx-5 position-relative ">
              <i className="bi bi-cart3 h3 text-secondary fw-bold"></i>
              <span class="badge rounded-pill badge-notification position-absolute">
                {props.cartLength !== 0 ? props.cartLength : null}
              </span>
              <div className="cart">
                <p className="fw-bold border-0 border-bottom border-light-subtle px-3 pb-3">
                  Cart
                </p>
                <div className="">
                  {props.cartLength !== 0 ? (
                    <Cart />
                  ) : (
                    <div className="d-flex align-items-center  justify-content-center ">
                      <p className="fw-bold text-secondary py-5 ">
                        Your cart is empty
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Image
                className="user-image rounded-circle "
                src="/images/image-avatar.png"
                alt="user-image"
                width={50}
                height={50}
              />
            </div>
          </div>
        </nav>
      </header>
    );
}