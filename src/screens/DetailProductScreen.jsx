import Navbar from "../components/Navbar"
import ProductDetailsPage from "../components/ProductDetails/ProductDetailsPage"
import { cards } from "../util/cards"
import { useParams } from "react-router-dom"

// DetailProductScreen displays details for a single product based on the URL id
function DetailProductScreen(){

    // Get the product id from the URL parameters
    const {id} = useParams()

    // Find the product in the cards array that matches the id
    // Note: id from useParams is a string, product.id may be a number
    const card = cards.filter((product)=> product.id == Number(id))
    
    // Render the product details layout
    return(
        <>
        <Navbar/>
        {/* Two-column grid: left for image, right for details */}
        <div className="md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 justify-between row-span-2 bg-red-300">
            {/* Product image section */}
            <div className="flex-1 flex-col justify-center ">

                <div className="p-1 h-[70%] mx-auto justify-center items-center overflow-hidden">
                    <img className="md:p-10 mx-auto  sm:w-[100%] h-[100%]" src={card[0].image} alt={card[0].title}/>
                </div>

                <div className="hidden lg:flex overflow-hidden  m-10">
                    <div className="p-1 h-[100%] border-2 rounded-lg overflow-hidden">
                    <img className=" md:p-1 mx-auto hover:scale-105 rounded-sm sm:w-[100%] h-[100%]" src={card[0].image} alt={card[0].title}/>
                </div>
                 
                 <div className="p-1 h-[40%] mx-auto border-2  rounded-lg justify-center items-center overflow-hidden">
                    <img className="md:p-1 mx-auto  sm:w-[100%] hover:scale-105 rounded-sm  h-[100%]" src={card[0].image} alt={card[0].title}/>
                </div>
                
                 <div className="p-1  h-[40%] mx-auto border-2 rounded-lg justify-center items-center overflow-hidden">
                    <img className="md:p-1 mx-auto hover:scale-105 rounded-sm   sm:w-[100%] h-[100%]" src={card[0].image} alt={card[0].title}/>
                </div>

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