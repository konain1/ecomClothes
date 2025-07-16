import Btn from "./Btn"

function BuyNow ({ productId }) {

    function BuyNowHandler(){
        console.log('buy Now')
    }
  return (
    <>
      <div className=' flex justify-center'>
     
       <Btn title={"Buy Now"} onPress={BuyNowHandler} style={' px-4 rounded-lg md:w-[80%] md:py-2 border bg-transparent bg-green-300 active:scale-95  md:rounded-full hover:bg-green-500 hover:text-white'} />
      </div>
    </>
  )
}

export default BuyNow
