import { createContext, FunctionComponent, ReactNode, useState } from "react";
interface Product {
  image: string;
  name: string;
  price: number;
  amount: number;
}
interface CartContextType {
  cart: Product[];
  cep?: string;
  address?: string;
  city?: string;
  neighbor?: string;
  uf?: string;
  complement?: string;
  number?: number;
  paymentMethod?: string;
  addItemToCart: (product: Product) => void;
}
interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export const CartContextProvider: FunctionComponent<
  CartContextProviderProps
> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  function addItemToCart(productToAdd: Product) {
    console.log("adicionando item", productToAdd);
    let productIndex: number = cart.findIndex((product) => {

        return product.name === productToAdd.name;
    });
    console.log(productIndex);
    
    if (productIndex >= 0 ) {
        let updatatedAmount = (cart[productIndex].amount + productToAdd.amount) 
        setCart((state)=>[...state.slice(0,productIndex),{...productToAdd, amount: updatatedAmount},...state.slice(productIndex+1)])
    } else {
      setCart((state) => {
        return [...state, productToAdd];
      });
    }
    
  }

  console.log('cart', cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
