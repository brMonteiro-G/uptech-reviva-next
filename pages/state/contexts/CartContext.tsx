import { Items } from 'components/WindowShopper/Products';
import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import { useCartState, useSetCartState } from '../CartState';

export interface CartProducts extends Items {
  units_in_cart: number;
}
interface ProductsProviderProps {
  children: ReactNode;
}
export interface ProductscontextProps {
  cart?: CartProducts[];
  setCart?:Dispatch<SetStateAction<CartProducts[]>>;
}

export const CartContext = createContext<ProductscontextProps>({
  cart: []
});
CartContext.displayName = 'Cart';

export const CartProvider = ({ children }: ProductsProviderProps) => {
  const cart = useCartState();
  const setCart = useSetCartState();

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
