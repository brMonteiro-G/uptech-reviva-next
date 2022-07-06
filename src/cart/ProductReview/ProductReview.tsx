import { CartContext, CartProducts } from 'state/contexts/CartContext';
import { useContext } from 'react';
import { BillingReview } from '../BillingReview/BillingReview';
import { InfoReview } from '../InfoReview/InfoReview';
import { ReviewTemplate, PaymentReview } from './ProductReviewStyle';

export function ProductReview() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <ReviewTemplate>
      <InfoReview cart={cart!} setCart={setCart!} />
      <PaymentReview>
        <BillingReview cart={cart!} setCart={setCart!} />
      </PaymentReview>
    </ReviewTemplate>
  );
}
