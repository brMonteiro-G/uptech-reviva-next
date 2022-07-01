import { CartProducts } from 'state/contexts/CartContext';

export function updateValues(item: CartProducts, type: string) {

  const newItem = {
    ...item
  }; 

  const updateItem: CartProducts = {
    
    ...newItem,
    available_amount:
      type === 'increase'
        ? newItem.available_amount = item.available_amount - 1
        : newItem.available_amount = item.available_amount + 1,
    units_in_cart:
      type === 'increase'
        ? newItem.units_in_cart = item.units_in_cart + 1
        : newItem.units_in_cart = item.units_in_cart - 1,
  };
   
 
  return updateItem;
}
