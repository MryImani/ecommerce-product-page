import ItemDetails from "../items/ItemDetails";

export default function Home(){
    const item = {
      id: "1", 
      name: "Fall Limited Edition Sneakers",
      detail:
        "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: "125.00",
      off: "50%",
      oldPrice: "250.00",
      image:'/images/image-product-1.jpg'
    };
    return(
        <div className="home container ">
            <ItemDetails item={item}/>
        </div>
    )
}