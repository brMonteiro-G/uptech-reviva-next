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
import {
  CartButtonDetails,
  DivButtonsDetails,
} from '@/components/Button/ButtonStyle';
import { Banner } from '@/components/Banner/Banner';
import Recomendations from '@/components/Recomendations';
import { Items } from '@/components/WindowShopper/Products';
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';

function DetailsProduct({ response }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [clickedProduct, setClickedProduct] = useState<Items>(response);  
  
  return (
    <>
      <DetailsSection>
        <div>
          <DetailsImage
            src={clickedProduct!.images[0].url}
            alt={clickedProduct!.images[0].description}
          />
        </div>
        <DetailsInfo>
          <h1>
            {clickedProduct!.name} R$ {clickedProduct!.price!}
          </h1>
          <p>{clickedProduct!.description}</p>

          <DetailsGrid>
            <>
              {clickedProduct!.images.map(
                (image: {
                  url: string | undefined;
                  description: string | undefined;
                }) => {
                  return (
                    <DetailsVisualize
                      key={clickedProduct!.id}
                      src={image.url}
                      alt={image.description}
                    />
                  );
                }
              )}
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
          <Recomendations />
        </RecomendationsVisualize>
      </RecomendationsSection>
    </>
  );
}

export const getServerSideProps = async (context: { params: { id: any; }; }) => {
  const {id} = context.params
  if (!id) {
    return;
  }
  const response: any = await 
    fetch(`http://localhost:3000/api/getProductById/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((respostaDoServidor)=>{
      return respostaDoServidor.json()
    }
    )
    
    console.log(response)

  return {
    
    props: {
      response,
    },
  };
}

export default DetailsProduct;
