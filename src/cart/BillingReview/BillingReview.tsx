import { CartProducts } from 'state/contexts/CartContext';
import { ProductscontextProps } from 'state/contexts/CartContext';
import { ButtonPayment, ReviewPayment, ReviewPaymentConfig } from './BillingReviewStyle';

interface Props  {
cart: CartProducts[];
setCart: (product:any)=>void
}

export function BillingReview({cart, setCart}:Props ) {

  const total = cart.reduce(
    (acc, currentValue) => (acc += (currentValue.price*currentValue.units_in_cart)), 
    0
  );

  return (
    <ReviewPayment>
      <ReviewPaymentConfig> 
        {cart.map((productsInCart) => {
          return (
            <>
              <p key={productsInCart.id}>
                {productsInCart.units_in_cart}x
                {(productsInCart.price).toFixed(2)}{' '}
                = R$ {(productsInCart.price*productsInCart.units_in_cart).toFixed(2)}
              </p>
            </>
          );
        })} 
        <p>Total: R${total.toFixed(2)}</p>
        <ButtonPayment as='button'>Ir para pagamento</ButtonPayment>
      </ReviewPaymentConfig>
    </ReviewPayment>
  );
}
