import { useNavigate } from 'react-router-dom'
import RatingStars from '../components/RatingStars'
import { cards } from '../util/cards'

// CardScreen component displays a grid of product cards
function CardScreen () {
  // useNavigate hook from react-router-dom for navigation
  const navigate = useNavigate()

  // Function to navigate to product details page using product id
  function handleProductNavigate(id) {
    // Navigates to /product/:id route
    navigate(`/product/${id}`)
  }

  return (
    // Outer container for centering the grid
    <div className='flex justify-evenly w-full'>
      {/* Responsive grid for displaying product cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 justify-evenly'>
        {/* Loop through cards array and render each product card */}
        {cards.map((card,index) => (
          // Card container with click handler for navigation
          <div key={index}
            onClick={() => handleProductNavigate(card.id)}
            className='max-w-sm text-center hover:shadow-orange-400 hover:scale-105 justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'
          >
            {/* Image section */}
            <div className='bg-red-500 overflow-hidden'>
              {/* Product image with hover effect */}
              <img
                className='rounded-t-lg h-[100%] w-full hover:scale-125 transition delay-200 duration-300 ease-in-out'
                src={card.image}
                alt=''
              />
            </div>

            {/* Card content section */}
            <div className='p-5 flex-col justify-evenly'>
              <div>
                {/* Product title */}
                <h5 className='mb-2 text-xs md:text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                  {card.title}
                </h5>
              </div>

              {/* Short product description */}
              <p className='mb-3 md:font-normal md:text-lg text-gray-700 dark:text-gray-400'>
                {card.description}
              </p>

              {/* Price and rating section */}
              <div className='text-white flex justify-around items-center'>
                {/* Price button with hover effect */}
                <button className='text-md px-3 text-blue-500 transition delay-200 duration-300 ease-in-out hover:scale-125 hover:text-green-500'>
                  <span>&#8377;</span> {card.price}
                </button>
                {/* RatingStars component displays product rating */}
                <RatingStars  rating={card.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardScreen