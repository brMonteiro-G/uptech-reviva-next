import { Items } from 'components/WindowShopper/Products';
import { CartProducts } from 'state/contexts/CartContext';
import { ProductscontextProps } from 'state/contexts/StorageContext';
import { updateValues } from 'utils/updateValue';

export const useUpdateStorage = () => {
  return (item: Items, {products, setProducts}: ProductscontextProps) => {
    
    return setProducts && setProducts((beforeStateStorage :Items[]) => {
      const index = beforeStateStorage.findIndex(
        (product) => product.id === item.id
      );
      return [
        ...beforeStateStorage.slice(0, index),
        updateValues(item as CartProducts, 'increase'),
        ...beforeStateStorage.slice(index + 1),
      ];
    });
  };
};
