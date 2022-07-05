import { ReactElement, useContext, useState } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import Link from 'next/link';
import {
  BoxModel,
  DivImageButtons,
  ImageProducts,
  ProductContent,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './ProductsStyle';
import { StorageContext } from 'state/contexts/StorageContext';
import { CartProducts } from 'state/contexts/CartContext';
import { useAddCart } from 'state/hooks/useAddCart';
import { useUpdateStorage } from 'state/hooks/useUpdateStorage';

export interface Items {
  name: string;
  id: string;
  url: string;
  price: number;
  description: string;
  available_size: string[];
  available_amount: number;
  images: Array<Images>;
}
export interface Images {
  url: string;
  description: string;
}
export interface Props {
  texto: string;
}

export default function Products({ texto }: Props) {
  const { products, setProducts } = useContext(StorageContext);

  const updateStorage = useUpdateStorage();
  const addProductInCart = useAddCart();

  function verifyQuantity(element : Items): void {
    if (element.available_amount - 1 < 0) {
      return alert('Produto esgotado');
    }
    
    const updateProduct: CartProducts = {
      ...element,
      units_in_cart: 0,
    };
    console.log(updateProduct);

    addProductInCart(updateProduct);
    updateStorage(updateProduct);

    alert('Produto adicionado ao carrinho');
  }

  function template(element: Items, index: number): ReactElement {
    return (
      <BoxModel key={element.name} data-id={index}>
        <Link href={`/details/${element.id}`}>
          <DivImageButtons as='a'>
            <ImageProducts
              src={element.images[0].url}
              alt={element.images[0].description}
            />
          </DivImageButtons>
        </Link>
        <ProductContent>
          <ProductInfo>
            <ProductName>{element.name} </ProductName>
            <ProductPrice>R$ {element.price.toFixed(2)} </ProductPrice>
          </ProductInfo>

          <Button element={element} onClick={() => verifyQuantity(element)} />
        </ProductContent>
      </BoxModel>
    );
  }
  return (
    <>
      {products &&
        products.map((element: Items, index: number) => {
          if (texto.includes('1')) {
            if (index <= 3) {
              return template(element, index);
            }
          }
          if (texto.includes('2')) {
            if (index >= 4) {
              return template(element, index);
            }
          }
        })}
    </>
  );
}
