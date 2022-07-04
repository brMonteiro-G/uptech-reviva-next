/* eslint-disable react/prop-types */
import {
  DetailsGrid,
  DetailsInfo,
  DetailsVisualize,
  DetailsSection,
  DetailsImage,
  RecomendationsSection,
  RecomendationsVisualize,
} from './DetailsStyle';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFindProduct } from 'state/hooks/useFindProduct';
import { SelectSizeButton } from '@/components/SelectSizeButton/SelectSizeButton';
import { CartButtonDetails, DivButtonsDetails } from '@/components/Button/ButtonStyle';
import { Banner } from '@/components/Banner/Banner';
import Recomendations from '@/components/Recomendations';
import { ThemedStyledProps } from 'styled-components';

function DetailsProduct(props: any) {
console.log(props);

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

