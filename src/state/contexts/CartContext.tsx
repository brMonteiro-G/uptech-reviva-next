import { Items } from 'components/WindowShopper/Products';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface CartProducts extends Items {
  units_in_cart: number;
} 
interface ProductsProviderProps {
  children: ReactNode;
  serverResponseCart:CartProducts[]
}
export interface ProductscontextProps {
  cart?: CartProducts[];
  setCart?:Dispatch<SetStateAction<CartProducts[]>>;
}

export const CartContext = createContext<ProductscontextProps>({
  cart: [] 
});
CartContext.displayName = 'Cart';

export const CartProvider = ({ children, serverResponseCart }: ProductsProviderProps) => {
  const [cart, setCart] = useState(serverResponseCart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
//funções em js são objetos