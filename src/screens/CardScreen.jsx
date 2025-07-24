import { useState } from 'react'
import { cards } from '../util/cards'
import { useNavigate } from 'react-router-dom'
// Mock data for demonstration


// Mock RatingStars component
const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Mock Navbar component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ShopLux
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">Products</a>
            <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// CardScreen component displays a grid of product cards
function CardScreen() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const navigate = useNavigate()

  // Function to handle product selection
  function handleProductNavigate(id) {
    setSelectedProduct(id)
    // In real app, this would navigate to product details
    console.log(`Navigating to product ${id}`)
        navigate(`/product/${id}`)
  }

  return (
    <>
     
      
      {/* Hero gradient background with animated particles effect */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse"></div>
        
        {/* Main content container */}
        <div className="relative z-10 pt-20 pb-20">
          {/* Section header with glassmorphism effect */}
          <div className="text-center mb-16 px-6">
            <div className="inline-block p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
                Premium Collection
              </h1>
              <p className="text-xl text-gray-300 font-light tracking-wide">
                Discover extraordinary products crafted for excellence
              </p>
            </div>
          </div>

          {/* Product cards grid */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => handleProductNavigate(card.id)}
                  className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-4 hover:rotate-1 ${
                    selectedProduct === card.id ? 'scale-105 -translate-y-2' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Card with glassmorphism and advanced hover effects */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 hover:shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-white/30">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                    
                    {/* Image section with advanced effects */}
                    <div className="relative overflow-hidden rounded-t-3xl h-64">
                      {/* Image glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                      
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        src={card.image}
                        alt={card.title}
                      />
                      
                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                          NEW
                        </div>
                      </div>
                      
                      {/* Quick view overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="relative z-10 p-6 space-y-4">
                      {/* Title with gradient text */}
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300 line-clamp-2">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {card.description}
                      </p>

                      {/* Rating section */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <RatingStars rating={card.rating} />
                          <span className="text-xs text-gray-400">({card.rating})</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Price section with animation */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            ₹{card.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ₹{Math.round(card.price * 1.3)}
                          </span>
                        </div>
                        
                        {/* Add to cart button */}
                        <button className="group/btn bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-purple-500/50">
                          <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardScreen