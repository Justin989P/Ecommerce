import { createContext, useEffect, useState } from "react";

export const AppContexts = createContext({});
export default function AppContext({ children }) {
  const [numberOfCart, setNumberOfCart] = useState(0);
  const [myCarts, setMyCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [heroImgs, setHeroImgs] = useState([]);
  const [showMycarts, setShowMyCarts] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      
      setProducts(data);
    };
    fetchProduct();
  }, []);

  const showMycartsHandler = () => {
    setShowMyCarts((prev) => !prev);
  };

  const addCartHandler = (item) => {
    let isAdded = false;
    myCarts.map((carts) => {
      if (carts.id === item.id) {
        isAdded = true;
      }
    });
    if (isAdded) {
      alert("already added ");
    } else {
      const newItems = {
        quantity: 1,
        ...item,
      }
      setMyCarts([...myCarts, newItems]);
      setNumberOfCart((prev) => prev + 1);
    }
  };
  const deleteCartHandler = (id) => {
    setMyCarts((prevCarts) =>
      prevCarts.filter((prevCart) => prevCart.id !== id)
    );
  };
  const increaseQuantity = (id) => {
    const findItem = myCarts.find((cart) => {
      return cart.id === id;
    });

    setMyCarts(
      myCarts.map((carts) =>
        carts.id === id
          ? { ...findItem, quantity: findItem.quantity + 1 }
          : carts
      )
    );
  };
  const decreaseQuantity = (id) => {
    const findItem = myCarts.find((cart) => {
      return cart.id === id;
    });
    if (findItem.quantity > 1) {
      setMyCarts(
        myCarts.map((carts) =>
          carts.id === id
            ? { ...findItem, quantity: findItem.quantity - 1 }
            : carts
        )
      );
    }
  };
  const totalHandler = () => {
    let totalAmount = 0;
    myCarts.forEach(carts => {
      totalAmount += Number(carts.quantity) * Number(carts.price);
    })
    setTotal(Math.ceil(totalAmount))
  }
  useEffect(()=>totalHandler())
  return (
    <AppContexts.Provider
      value={{
        numberOfCart,
        setNumberOfCart,
        products,
        setProducts,
        addCartHandler,
        myCarts,
        setMyCarts,
        heroImgs,
        setHeroImgs,
        showMycarts,
        showMycartsHandler,
        isAdded,
        deleteCartHandler,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </AppContexts.Provider>
  );
}
