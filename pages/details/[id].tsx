/* eslint-disable react/prop-types */
import {
  DetailsGrid,
  DetailsInfo,
  DetailsVisualize,
  DetailsSection,
  DetailsImage,
  RecomendationsSection,
  RecomendationsVisualize,
  RecomendationsProducts,
} from './DetailsStyle';

import { useContext, useEffect, useState } from 'react';
import { StorageContext } from 'state/contexts/StorageContext';
import { useRouter } from 'next/router';
import { useFindProduct } from 'state/hooks/useFindProduct';

function DetailsProduct({...props}) {
 
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
    }
  }, [router])

  const product = useFindProduct(id!);



  return (
   
    
    <>
      <DetailsSection>
        <div>
          <DetailsImage
            src={product!.images[0].url}
            alt={product!.images[0].description}
          />
        </div>
        <DetailsInfo>
          <h1>
            {product!.name} R$ {product!.price.toFixed(2)!}
          </h1>
          <p>{product!.description}</p>

          <DetailsGrid>
            <>
              {product!.images.map((image) => {
                return (
                  <DetailsVisualize
                    key={product!.id}
                    src={image.url}
                    alt={image.description}
                  />
                );
              })}
              <SelectSizeButton />
              <DivButtonsDetails>
                <CartButtonDetails>POR NA SACOLA</CartButtonDetails>
              </DivButtonsDetails>
            </>
          </DetailsGrid>
        </DetailsInfo>
      </DetailsSection>

      <Banner />

      <RecomendationsSection>
        <h2>Recomendações</h2>
        <RecomendationsVisualize>
          <Recomendations/>
        </RecomendationsVisualize>
      </RecomendationsSection>
    </>
  );
}

export default DetailsProduct;

