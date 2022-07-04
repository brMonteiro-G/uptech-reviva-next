import { ReactElement, useContext, useEffect } from 'react';
import {useRouter} from 'next/router';
import { Button } from '../Button/Button';
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

export default function Products(props: Props) {
  const { products, setProducts } = useContext(StorageContext);
 
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

          <Button id={element.id} />
        </ProductContent>
      </BoxModel>
    );
  }
  return (
    <>
      {products && products.map((element, index) => {
      
        
        if (props.texto.includes('1')) {
          if (index <= 3) {
            return template(element, index);
          }
        }
        if (props.texto.includes('2')) {
          if (index >= 4) {
            return template(element, index);
          }
        }
      })}
    </>
  );
}
