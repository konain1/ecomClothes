import AddToCart from './AddToCart'
import BuyNow from './BuyNow'
import ProdColors from './ProdColors'
import ProdDesc from './ProdDesc'
import ProdPrice from './ProdPrice'

import ProdSize from './ProdSize'
import ProductTitle from './ProductTitle'

function ProductDetailsPage ({ product }) {
  //
  return (
    <>
      <div className='row-span-1 flex flex-col px-10  justify-evenly min-h-screen'>
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
          <ProdColors colors={product.colors} />
          <ProdSize sizes={product.sizes} />
        </div>

        <div className='md:flex-col flex flex-row gap-4 p-10 justify-around'>
          <AddToCart  product={product} />
          <BuyNow productId={product.id} />
        </div>
      </div>
    </>
  )
}

export default ProductDetailsPage
