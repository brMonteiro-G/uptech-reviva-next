
import { Banner } from 'components/Banner/Banner';
import Products from 'components/WindowShopper/Products';
import { GridProducts } from 'components/WindowShopper/ProductsStyle';
import { NextPageWithLayout } from '_app';
import { ReactElement } from 'react';
import { Subtitle, ArticleSection, Main } from 'home/HomeStyle';
import { Posts } from 'home/Posts/Posts';

export default function Home() {  

 
 
  return (
    
    <Main>
      <Subtitle id='first'>Últimos lançamentos</Subtitle>
        
      <GridProducts>
        <Products texto='section1' />
      </GridProducts>

      <Banner />

      <Subtitle id='second'>Coleção de vintage 2022</Subtitle>
      <GridProducts>
        <Products texto='section2' />
      </GridProducts>

      <Subtitle id='third'>
        Na dúvida sobre combinar suas roupas e ficar incrível?
      </Subtitle>
      <Subtitle id='fourth'> Confira nossas dicas em nosso blog.</Subtitle>

      <ArticleSection>
        <Posts />
      </ArticleSection>
    </Main>
  );
  
}
