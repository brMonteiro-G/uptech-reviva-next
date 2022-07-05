import { Posts } from './Posts/Posts';
import { ArticleSection, Main, Subtitle } from './HomeStyle';
import { Banner } from 'components/Banner/Banner';
import Products from 'components/WindowShopper/Products';
import { GridProducts } from 'components/WindowShopper/ProductsStyle';

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
