import { CartContext, CartProducts } from 'state/contexts/CartContext';
import { useContext } from 'react';
import {
  InfoReviewContent,
  InfoReviewTemplate,
  InfoReviewTitle,
} from './InfoReviewStyle';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { ReviewTitle } from './ReviewTitle/ReviewTitle';
interface Props  {
  cart: CartProducts[];
  setCart: (product:any)=>void
  }
  
export function InfoReview({cart, setCart}:Props) {
 
 
  return (
    <InfoReviewTemplate>
      <>
        <InfoReviewTitle>
          <ReviewTitle />
        </InfoReviewTitle>
        {cart && cart.map((product, productCartindex) => {
          return (
            <InfoReviewContent key={product.id}>
              <ReviewItem
                //melhorar esse codigo

                item={cart.find(
                  (_, indice) => indice === productCartindex
                )} 
                productsInCart = {cart}
              />
            </InfoReviewContent>
          );
        })}
      </>
    </InfoReviewTemplate>
  );
}
