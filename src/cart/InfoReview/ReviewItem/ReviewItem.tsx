
import { Addbutton } from './AddButton/AddButton';
import {
  ReviewItemTemplate,
  ImageProduct,
  ImageProductTemplate,
} from './ReviewItemStyle';

import { SelectSizeButton } from 'components/SelectSizeButton/SelectSizeButton';
import { CartProducts } from 'state/contexts/CartContext';
import { ItemContent, DisplaySelectSizeButton, ContentItemText } from 'cart/ProductReview/ProductReviewStyle';
export interface ProductsInCartProps {
  item: CartProducts | undefined;
  productsInCart?:CartProducts[]
}

export function ReviewItem({ item }: ProductsInCartProps, productsInCart:ProductsInCartProps) {
  return (
    <>{
      
    }
      <ImageProductTemplate>
        <ImageProduct src={item!.images[0].url} alt={item!.description} />
        <small>{item!.name}</small>
      </ImageProductTemplate>
      <ItemContent>
        <DisplaySelectSizeButton>
          <SelectSizeButton />
        </DisplaySelectSizeButton>

        <ContentItemText key='value'> 
          R$ {item!.price.toFixed(2)}
        </ContentItemText>
        <ReviewItemTemplate>
          <div>
            {/* <button
              id='plus'
              onClick={() => {
                const product = updateValues(item, 'increase');
                const teste = quantity.find();
                //setButton(product)
              }}
            >
              +
            </button> */}
            <Addbutton item={item} operation='minus' />
          </div>
          <div>
            <input
              id='amount'
              type='text'
              value={item!.units_in_cart}
              readOnly={true}
            />
          </div>
          <div>
            {/* <button id="minus" onClick={() => {
                            const product = updateValues(item, "decrease")
                            setButton(product)
                        }}

                        >-</button> */}
            <Addbutton item={item} operation='plus' />
          </div>
        </ReviewItemTemplate>
        <ContentItemText key='subtotal'>
          R$ {(item!.price * item!.units_in_cart).toFixed(2)}
        </ContentItemText>
      </ItemContent>
    </>
  );
}
