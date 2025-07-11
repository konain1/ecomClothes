import Logo from "./navUI/Logo"
import NavCart from "./navUI/NavCart"
import SearchBar from "./navUI/SearchBar"
import SingIn from "./navUI/SingIn"


function Navbar(){
    return<>
       <div className="text-orange-400 text-2xl  p-6 rounded mx-4 flex justify-around " >
       <Logo/>
       <SearchBar />
       <NavCart/>
       <SingIn />
       </div>
    </>
}

export default Navbar