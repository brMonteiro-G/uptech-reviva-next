import { Items } from '../WindowShopper/Products';
import {
  DivBackgroundBag,
  CartButton, 
  ShoppingCartButton,
} from './ButtonStyle';

export interface ButtonProps {
  element: Items, 
  onClick: (element:Items)=> void
}


export function Button({element, onClick}:ButtonProps) {

  return (
    <DivBackgroundBag>
      <CartButton
        onClick={()=>onClick(element!)}>
        POR NA SACOLA
      </CartButton>
      <ShoppingCartButton id='cart-button' disabled></ShoppingCartButton>
    </DivBackgroundBag>
  );
}

