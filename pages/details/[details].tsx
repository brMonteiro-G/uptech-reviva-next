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
import { Banner } from 'components/Banner/Banner';
import {
  DivButtonsDetails,
  CartButtonDetails,
} from 'components/Button/ButtonStyle';
import { SelectSizeButton } from 'components/SelectSizeButton/SelectSizeButton';
import { useRouter } from 'next/router';
import { Items } from 'components/WindowShopper/Products';

function Details() {
  
  
  const { products, setProducts } = useContext(StorageContext);
  const [displayProduct, setDisplayProduct] = useState<Items>()
  const router = useRouter();
   const { id } = router.query;

  
  
   useEffect(() => {
    if (router.isReady) {
      console.log(router);
      
      setDisplayProduct && setDisplayProduct(products!.find((product) => product.id === id))
     }
   }, [router.isReady]);
// console.log(router);

  return (
    <>
    <div>aqui está o id digitado: {id}</div>
    </>
    
    // <>
    //   <DetailsSection>
    //     <div>
    //       <DetailsImage
    //         src={displayProduct!.images[0].url}
    //         alt={displayProduct!.images[0].description}
    //       />
    //     </div>
    //     <DetailsInfo>
    //       <h1>
    //         {displayProduct!.name} R$ {displayProduct!.price.toFixed(2)!}
    //       </h1>
    //       <p>{displayProduct!.description}</p>

    //       <DetailsGrid>
    //         <>
    //           {displayProduct!.images.map((image) => {
    //             return (
    //               <DetailsVisualize
    //                 key={displayProduct!.id}
    //                 src={image.url}
    //                 alt={image.description}
    //               />
    //             );
    //           })}
    //           <SelectSizeButton />
    //           <DivButtonsDetails>
    //             <CartButtonDetails>POR NA SACOLA</CartButtonDetails>
    //           </DivButtonsDetails>
    //         </>
    //       </DetailsGrid>
    //     </DetailsInfo>
    //   </DetailsSection>

    //   <Banner />

    //   <RecomendationsSection>
    //     <h2>Recomendações</h2>
    //     <RecomendationsVisualize>
    //       {products!.slice(0, 4).map((product) => {
    //         return (
    //           <RecomendationsProducts key={product.id}>
    //             <img src={displayProduct!.images[0].url} alt={product.description} />
    //           </RecomendationsProducts>
    //         );
    //       })}
    //     </RecomendationsVisualize>
    //   </RecomendationsSection>
    // </>
  );
}

export default Details;

