import { Items } from 'components/WindowShopper/Products';
import Inventory from 'data/Storage';
import { createContext, ReactNode } from 'react';
import { useSetStorage, useStorage } from '../StorageState';

interface ProductsProviderProps {
  children: ReactNode,
  handledProductsResponse:Items[] 
}
export interface ProductscontextProps {
  products?: Items[];
  setProducts?: (products: any) => void;
}
export const StorageContext = createContext<ProductscontextProps>({
  products:Inventory.available_products_in_inventory,
  
});

StorageContext.displayName = 'Storage';
export const StorageProvider = ({ children, handledProductsResponse }: ProductsProviderProps) => {
  const products = useStorage(handledProductsResponse);
  const setProducts = useSetStorage();

  return (
    <StorageContext.Provider value={{ products, setProducts }}>
      {children}
    </StorageContext.Provider>
  );
};
