import { CartProducts } from 'state/contexts/CartContext';
import { ProductscontextProps } from 'state/contexts/CartContext';
import { updateValues } from 'utils/updateValue';


export const useAddCart = () => {
 


  return (newItem: CartProducts,{cart, setCart}:ProductscontextProps) => {
    return setCart(elementsInCart => {

      const checkCart = elementsInCart.find((product) => newItem.id === product.id);
      if (typeof checkCart !== 'undefined') {
        const index = elementsInCart.indexOf(checkCart);
        return [
          ...elementsInCart.slice(0, index),
          updateValues(checkCart, 'increase'),
          ...elementsInCart.slice(index + 1),
        ];
      }

      return [...elementsInCart, updateValues(newItem, 'increase')];
    });
  };
};
