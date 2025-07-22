import Navbar from "../components/Navbar"
import Strip from "../components/Strip"
import CardScreen from "./CardScreen"
import CartStackScreen from "./CartStackScreen"


function HeroScreen(){

    return(
        <div className="my-10 mx-4">
        <Navbar />
        <Strip season={"summer"}/>
        <CardScreen/>
        <CartStackScreen />
        

        </div>
    )
}

export default HeroScreen