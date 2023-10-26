import { useContext } from "react"
import { ProductsContext } from "./MainPage"
const Page4 = () => {
    const products = useContext(ProductsContext)
  return (
      <div className="bg-yellow-400 text-black  ">
          <h1 >data here are rendered using ApiContext hook </h1>
          <p className="bg-red-400">{products.map((product) => (
              <span key={product.id}> {product.name}</span>
          ))}</p>

    </div>
  )
}

export default Page4