import { useContext, useEffect, useState } from "react";
import { AppContexts } from "./Context/AppContext";
import Product from "./Product";

const Products = () => {
    const { products, setProducts,addCartHandler,isAdded } = useContext(AppContexts);
    const [items,setItems] = useState([])
    useEffect(() => {
        const filteredProducts = products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing");
        setItems(filteredProducts);   
    },[products])
  return (
    <div className="w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-[3em] ">
          {items.map(item => (
              <Product key={item.id} item={ item} addCartHandler={addCartHandler} isAdded={isAdded}/>
      ))}
    </div>
  )
}

export default Products
