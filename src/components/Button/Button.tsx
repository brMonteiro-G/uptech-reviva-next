import { useContext, useState } from 'react';
import { Items } from '../WindowShopper/Products';
import {
  DivBackgroundBag,
  CartButton,
  ShoppingCartButton,
} from './ButtonStyle';
import { useAddCart } from 'state/hooks/useAddCart';
import { useUpdateStorage } from 'state/hooks/useUpdateStorage';
import { StorageContext } from 'state/contexts/StorageContext';
import { CartContext, CartProducts } from 'state/contexts/CartContext';

export interface Id {
  id: string;
}

export function Button(props: Id) {
  const updateStorage = useUpdateStorage();
  const addProductInCart = useAddCart();
  const { products, setProducts } = useContext(StorageContext);
  const { cart, setCart } = useContext(CartContext);

  function verifyQuantity(element: Items): void {
    if (element.available_amount - 1 < 0) {
      return alert('Produto esgotado');
    }
    const updateProduct: CartProducts = {
      ...element,
      units_in_cart: 0,
    };

    addProductInCart(updateProduct, {cart,setCart});
    updateStorage(updateProduct, { products, setProducts });

    alert('Produto adicionado ao carrinho');
  }
  return (
    <DivBackgroundBag>
      <CartButton
        onClick={() => {
          const element = products && products.find((item) => {
            return item.id === props.id;
          });

          verifyQuantity(element!);
        }}
      >
        POR NA SACOLA
      </CartButton>
      <ShoppingCartButton id='cart-button' disabled></ShoppingCartButton>
    </DivBackgroundBag>
  );
}
