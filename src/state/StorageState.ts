import { Items } from 'components/WindowShopper/Products';
import Inventory from 'data/Storage';
import { useState } from 'react';


export const useStorage = (handledProductsResponse:Items[]) => {
  const [products, _] = useState<Items[]>(
    handledProductsResponse
  );
  return products;
};

export const useSetStorage = () => {
  const [_, setProducts] = useState<Items[]>(
   []
  );
  return setProducts;
};
