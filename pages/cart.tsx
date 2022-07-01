import Head from 'next/head';
import { ProductReview } from './cart/ProductReview/ProductReview';

function Cart() {
  return (
    <main>
        <Head >
          <>
          <link rel="shortchut icon" href="/" />
          <title>Reviva Fashion</title>
          </>
          
        </Head>
      <h1>Minha sacola</h1>
      <ProductReview />
    </main>
  );
}

export default Cart;