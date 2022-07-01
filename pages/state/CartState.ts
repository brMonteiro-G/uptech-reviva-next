import { useState } from 'react';
import { CartProducts } from './contexts/CartContext';

export const useCartState = () => {
  const [cart, _] = useState<CartProducts[]>([]);
  return cart;
};

export const useSetCartState = () => {
  const [_, setCart] = useState<CartProducts[]>([]);
  return setCart;
};
