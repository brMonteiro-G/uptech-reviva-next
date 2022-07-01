import { updateValues } from 'utils/updateValue';
import { useContext } from 'react';
import { CartContext, CartProducts } from 'state/contexts/CartContext';

export const useAddButton = () => {
  const { cart, setCart } = useContext(CartContext);
  // const updateCart = useAddButton();


  return (produtoASerAdicionado: CartProducts, operation: string) => {
    produtoASerAdicionado = updateValues(
      produtoASerAdicionado,
      operation === 'plus' ? 'increase' : 'decrease'
    );

    return setCart((produtosNoCarrinho) => {
      const produto = produtosNoCarrinho.find((produto)=> produto.id === produtoASerAdicionado.id);
      const index = produtosNoCarrinho.indexOf(produto);

      const result: Array<CartProducts> = [];
      if (produtosNoCarrinho.length === 1) {
        result.push(produtoASerAdicionado);
      } else {
      
        result.push(
          ...produtosNoCarrinho.slice(0, index),
          ...produtosNoCarrinho.splice(index, 1, produtoASerAdicionado),
          ...produtosNoCarrinho.slice(index + 1)
        );
      }

      return result;
    });
  };
};
