import { useEffect, useState } from 'react'
import AddToCart from './AddToCart'
import BuyNow from './BuyNow'
import ProdColors from './ProdColors'
import ProdDesc from './ProdDesc'
import ProdPrice from './ProdPrice'
import ProdSize from './ProdSize'
import ProductTitle from './ProductTitle'

function ProductDetailsPage ({ product }) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(null)
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(null)

  // Only enable AddToCart if both color and size are selected
  const isAddToCartDisabled =  selectedSizeIdx === null
  const [sizeAndColor,setSizeAndColor] = useState(false)

  useEffect(()=>{

    console.log(isAddToCartDisabled)
    if(isAddToCartDisabled != null){
        setSizeAndColor(true)
    }
   
  },[selectedColorIdx,selectedSizeIdx])


  return (
    <>
      <div className='row-span-1 flex flex-col px-10 justify-evenly min-h-screen'>
        <div>
          <ProductTitle title={product.title} />
        </div>
        <div>
          <ProdPrice price={product.price} />
        </div>
        <div>
          <ProdDesc description={product.productDescription} />
        </div>
        <div>
          <ProdColors
            colors={product.colors}
            selectedColorIdx={selectedColorIdx}
            setSelectedColorIdx={setSelectedColorIdx}
          />
          {selectedColorIdx != null ? (
            <ProdSize
              sizes={product.sizes}
              selectedSizeIdx={selectedSizeIdx}
              setSelectedSizeIdx={setSelectedSizeIdx}
            />
          ) : (
                    <span className="text-gray-500 text-sm">Select color size will appear</span>

          )}
        </div>
        <div className='md:flex-col flex flex-row gap-4 p-10 justify-around'>
          <AddToCart
            product={{
              ...product,
              selectedColor: product.colors[selectedColorIdx],
              selectedSize: product.sizes?.[selectedSizeIdx]
            }}
            disabled={isAddToCartDisabled}
          />
          <BuyNow productId={product.id} />
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage