import { ProductsContext } from "./MainPage";
import Page4 from "./Page4";

const Page3 = () => {
  return (
<div>
      <div>
        <h1>data here are displayed using the consumer </h1>
        <ProductsContext.Consumer>
          {(Products) => Products.map((item) => <p key={item.id} className="bg-green-400 m-1">{item.name}</p>)}
        </ProductsContext.Consumer>
          <p></p>
      </div>
      <Page4/>
</div>
  );
};

export default Page3;
