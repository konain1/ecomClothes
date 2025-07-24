import Navbar from './components/Navbar'
import DetailProductScreen from './screens/DetailProductScreen'
import HeroScreen from './screens/HeroScreen'
import CardScreen from './screens/CardScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartStackScreen from './screens/CartStackScreen'

export default function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroScreen />} />
          <Route path='/products' element={<CardScreen />} />
          <Route path='/product/:id' element={<DetailProductScreen />} />
          <Route path='/cartStack' element={<CartStackScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
