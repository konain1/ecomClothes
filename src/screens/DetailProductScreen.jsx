import ProductDetailsPage from "../components/ProductDetails/ProductDetailsPage"
import { cards } from "../util/cards"
import { useParams } from "react-router-dom"

// DetailProductScreen displays details for a single product based on the URL id
function DetailProductScreen(){

    // Get the product id from the URL parameters
    const {id} = useParams()

    // Find the product in the cards array that matches the id
    // Note: id from useParams is a string, product.id may be a number
    const card = cards.filter((product)=> product.id == id)
    
    // Render the product details layout
    return(
        <>
        {/* Two-column grid: left for image, right for details */}
        <div className="grid grid-cols-2 justify-between row-span-2">
            {/* Product image section */}
            <div className="flex-1">
                <div className="p-1 h-[70%] mx-auto justify-center items-center overflow-hidden">
                    <img className="p-10 mx-auto h-[100%]" src={card[0].image} alt={card[0].title}/>
                </div>
            </div>
            {/* Product details section */}
            <div className="flex-1">
                {/* Pass the product object to ProductDetailsPage */}
                <ProductDetailsPage product={card[0]} />
            </div>
        </div>
        </>
    )
}

export default DetailProductScreen