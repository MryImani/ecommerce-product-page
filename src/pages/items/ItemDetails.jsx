import { Image } from "react-bootstrap";
import './item-details.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../state";
import { useState } from "react";
export default function ItemDetails(props) {
    const { item} = props
    const [count,setCount] = useState(1);
    const dispatch = useDispatch();
  return (
    <div className="row item-details  mt-5 px-lg-5 mb-5">
      <div className="col-12 col-lg-7 d-flex flex-wrap">
        <div className=" flex-fill m-3">
          <Image
            className="  img-fluid rounded-4"
            width={550}
            height={100}
            src="/images/image-product-1.jpg"
          />
        </div>

        <div className="m-4 ">
          <Image
            className=" img-fluid rounded-4"
            width={100}
            height={100}
            src="/images/image-product-1-thumbnail.jpg"
          />
        </div>
        <div className="my-4 mx-4 ">
          <Image
            className="  img-fluid rounded-4"
            width={100}
            height={100}
            src="/images/image-product-2-thumbnail.jpg"
          />
        </div>
        <div className="my-4 mx-4 ">
          <Image
            className="  img-fluid rounded-4"
            width={100}
            height={100}
            src="/images/image-product-3-thumbnail.jpg"
          />
        </div>
        <div className="my-4 ms-4 ">
          <Image
            className="  img-fluid rounded-4"
            width={100}
            height={100}
            src="/images/image-product-4-thumbnail.jpg"
          />
        </div>
      </div>
      <div className="col-12 col-lg-5 mt-3 pt-5">
        <p className="title text-uppercase fw-bold ">Sneaker Company</p>
        <p className="item-name h1 fw-bolder mb-5">{item.name}</p>
        <p className="item-detail text-secondary fw-medium ">{item.detail}</p>
        <div className="d-flex flex-lg-column justify-content-between  ">
          <p className="d-flex align-items-center ">
            <span className="item-current-price fw-bold h4">${item.price}</span>
            <span className="item-off fw-bold mx-4 px-1 rounded  ">
              {" "}
              {item.off}{" "}
            </span>
          </p>
          <p className="item-old-price text-body-tertiary fw-bold text-decoration-line-through  ">
            ${item.oldPrice}
          </p>
        </div>
        <div className=" d-flex flex-column flex-lg-row align-items-center w-100">
          <div className="me-2 d-flex justify-content-around p-3 w-100 w-lg-25  bg-body-tertiary rounded-3 mb-3 mb-lg-0">
            <span onClick={() => setCount(Math.max(count - 1, 1))}>
              <i class="bi bi-dash h4"></i>
            </span>
            <span className="fw-bold">{count}</span>
            <span className="fw-bold" onClick={() => setCount(count + 1)}>
              <i class="bi bi-plus h4"></i>
            </span>
          </div>
          <div className="w-100 w-lg-75 ">
            <button
              className="add-to-cart-btn d-flex align-items-center py-3 px-5 border-0 rounded-3 text-white fw-bold w-100 justify-content-center"
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}
            >
              <i className="bi bi-cart3  me-3"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
