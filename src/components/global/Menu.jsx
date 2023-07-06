import { Link } from "react-router-dom";
export default function Menu(props){
    return (
      <div
        className={
          props.open
            ? "d-block bg-dark bg-opacity-75 position-fixed z-index-100 w-100  h-100 left-0 top-0 overflow-auto "
            : "d-none"
        }
      >
        <div className="position-fixed left-0 bottom-0 w-50 h-100 bg-white ">
          <div className="p-3 overflow-auto h-100">
            <div className="cursor-pointer" onClick={props.closeMenu}>
              <i className="bi bi-x h1"></i>
            </div>
            <ul className="m-0 list-unstyled mt-5 ">
              <li className="mt-3  ">
                <Link
                  className="text-decoration-none text-black fw-bold fs-5   "
                  to="/"
                >
                  Collections
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="text-decoration-none text-black fw-bold fs-5"
                  to="/"
                >
                  Men
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="text-decoration-none text-black fw-bold fs-5"
                  to="/"
                >
                  Women
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="text-decoration-none text-black fw-bold fs-5"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  className="text-decoration-none text-black fw-bold fs-5"
                  to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
