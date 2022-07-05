import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { CartProvider } from 'state/contexts/CartContext';
import { ProductReview } from '../src/cart/ProductReview/ProductReview';

function Cart({
  serverResponseCart,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(serverResponseCart);

  return (
    <>
      <CartProvider serverResponseCart={serverResponseCart}>
        <main>
          <h1>Minha sacola</h1>
          <ProductReview />
        </main>
      </CartProvider>
    </>
  );
}

export const getServerSideProps = async () => {
  const serverResponseCart = await fetch(
    'http://localhost:3000/api/getCart'
  ).then((serverResponse) => serverResponse.json());

  return {
    props: {
      serverResponseCart,
    },
  };
};

export default Cart;
