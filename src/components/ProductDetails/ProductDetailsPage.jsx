import AddToCart from "./AddToCart"
import ProdColors from "./ProdColors"
import ProdDesc from "./ProdDesc"
import ProdPrice from "./ProdPrice"

import ProdSize from "./ProdSize"
import ProductTitle from "./ProductTitle"



function ProductDetailsPage({product}){

    return<>
        <div className="row-span-1 flex flex-col px-10  justify-evenly min-h-screen">
            <ProductTitle title={product.title} />
            <ProdPrice price={product.price} />
           
            <ProdDesc description={product.productDescription} />
            <ProdColors colors={product.colors} />
            <ProdSize sizes={product.sizes} />
            <AddToCart productId={product.id} />
        </div>
    </>
}

export default ProductDetailsPage