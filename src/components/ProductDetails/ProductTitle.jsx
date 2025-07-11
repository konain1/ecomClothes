import ProdPrice from "./ProdPrice"

function ProductTitle ({title}) {
  return (
    <>
      <div>
        <div className=" grid     items-center gap-5 ">
          <p className="text-2xl"> {title}</p>
        </div>
       
      </div>
    </>
  )
}

export default ProductTitle
