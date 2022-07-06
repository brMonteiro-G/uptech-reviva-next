import { Dispatch, SetStateAction, useState } from 'react';
import { CartProducts } from './contexts/CartContext';

export const useCartState = (serverResponseCart:CartProducts[]) => {
  const [cart, _] = useState<CartProducts[]>(serverResponseCart);
  return cart;
};

export const useSetCartState = (newFunctionOrElement?:SetStateAction<CartProducts[]>) => { 
  let [_, setCart] = useState<CartProducts[]>([]);
  setCart(newFunctionOrElement!);
  return setCart;
};
