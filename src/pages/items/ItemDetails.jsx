import { Image } from "react-bootstrap";
import './item-details.css'
export default function ItemDetails(props) {
  return (
    <div className="row item-details  mt-5 px-lg-5 ">
      <div className="col-7 d-flex flex-wrap">
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
      <div className="col-5 mt-3 pt-5">
        <p className="title text-uppercase fw-bold ">Sneaker Company</p>
        <p className="item-name h1 fw-bolder mb-5">Fall Limited Edition Sneakers</p>
        <p className="item-detail text-secondary fw-medium ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="d-flex align-items-center ">
          <span className="item-current-price fw-bold h4">$125.00</span>
          <span className="item-off fw-bold mx-4 px-1 rounded  "> 50% </span>
        </p>
        <p className="item-old-price text-body-tertiary fw-bold text-decoration-line-through  ">
          $250.00
        </p>
        <div className=" d-flex align-items-center w-100">
          <div className="me-2 d-flex justify-content-around p-3 w-25 bg-body-tertiary rounded-3 ">
            <span>
              <i class="bi bi-dash h4"></i>
            </span>
            <span className="fw-bold">{0}</span>
            <span className="fw-bold">
              <i class="bi bi-plus h4"></i>
            </span>
          </div>
          <div className=" flex-grow-1 ">
            <button className="add-to-cart-btn d-flex align-items-center py-3 px-5 border-0 rounded-3 text-white fw-bold w-100 justify-content-center">
              <i className="bi bi-cart3  me-3"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
