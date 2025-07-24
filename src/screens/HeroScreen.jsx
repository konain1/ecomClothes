import Navbar from "../components/Navbar"
import Strip from "../components/Strip"
import CardScreen from "./CardScreen"


function HeroScreen(){

    return(
        <div className="my-10 mx-4">
        <Navbar />
        <Strip season={"summer"}/>
        <CardScreen/>
        
        

        </div>
    )
}

export default HeroScreen