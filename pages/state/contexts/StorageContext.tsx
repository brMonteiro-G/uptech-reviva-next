import { Items } from 'components/WindowShopper/Products';
import Inventory from 'data/Storage';
import { createContext, ReactNode } from 'react';
import { useCartState, useSetCartState } from '../CartState';
import { useSetStorage, useStorage } from '../StorageState';
import { CartProducts } from './CartContext';

interface ProductsProviderProps {
  children: ReactNode;
}
export interface ProductscontextProps {
  products?: Items[];
  setProducts?: (products: any) => void;
}
export const StorageContext = createContext<ProductscontextProps>({
  products:Inventory.available_products_in_inventory,
  
});

StorageContext.displayName = 'Storage';
export const StorageProvider = ({ children }: ProductsProviderProps) => {
  const products = useStorage();
  const setProducts = useSetStorage();

  return (
    <StorageContext.Provider value={{ products, setProducts }}>
      {children}
    </StorageContext.Provider>
  );
};
