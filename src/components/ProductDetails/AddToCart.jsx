import Btn from "./Btn"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeToCart } from "../../store/Features/CartSlice"

function AddToCart({product}){

    const cartItems = useSelector(state=>state.cartStore.items)
    const dispatch = useDispatch()
   

    function AddToCartHandler(productId){
         dispatch(addToCart(product))
    }

    return<>
        <div className=" flex justify-center ">
        <Btn title={"Add to Cart"}  onPress={AddToCartHandler} style={' px-4 rounded-lg md:w-[80%] md:py-2 border bg-transparent bg-amber-300 active:scale-95  md:rounded-full hover:bg-amber-500 hover:text-white'} />
        </div>
    </>
}

export default AddToCart