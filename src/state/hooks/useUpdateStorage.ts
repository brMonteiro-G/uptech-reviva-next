import { Items } from 'components/WindowShopper/Products';
import { useContext } from 'react';
import { CartProducts } from 'state/contexts/CartContext';
import { ProductscontextProps, StorageContext } from 'state/contexts/StorageContext';
import { updateValues } from 'utils/updateValue';

export const useUpdateStorage = () => {
  const { products, setProducts } = useContext(StorageContext);

  return (item: Items) => {
    
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
