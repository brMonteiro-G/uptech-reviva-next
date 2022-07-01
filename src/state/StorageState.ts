import { Items } from 'components/WindowShopper/Products';
import Inventory from 'data/Storage';
import { useState } from 'react';


export const useStorage = () => {
  const [products, _] = useState<Items[]>(
    Inventory.available_products_in_inventory
  );
  return products;
};

export const useSetStorage = () => {
  const [_, setProducts] = useState<Items[]>(
    Inventory.available_products_in_inventory
  );
  return setProducts;
};
