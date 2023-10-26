import Page1 from "./Page1"
import { createContext } from "react"
export const ProductsContext = createContext()
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
const MainPage = () => {
  return (
      <div className="bg-zinc-500 text-white p-2 mx-auto w-full text-center">
          <h1> test of Context Api </h1>
          <ProductsContext.Provider value={products}>
          <Page1 />
          </ProductsContext.Provider>
      </div>
  )
}

export default MainPage