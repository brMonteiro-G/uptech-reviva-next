import { useContext } from 'react';
import { CartContext, CartProducts } from 'state/contexts/CartContext';

export const useAddCart = () => {
  const { cart, setCart } = useContext(CartContext);

  return async (newItem: CartProducts) => {

    const data = await fetch('http://localhost:3000/api/postCart', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json()); 
    setCart && setCart(data);
  };
};
