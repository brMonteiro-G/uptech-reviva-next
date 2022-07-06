import { Banner } from 'components/Banner/Banner';
import Products, { Items } from 'components/WindowShopper/Products';
import { GridProducts } from 'components/WindowShopper/ProductsStyle';
import { Subtitle, ArticleSection, Main } from 'home/HomeStyle';
import { Posts } from 'home/Posts/Posts';
import { InferGetStaticPropsType } from 'next';
import { PostProvider } from 'state/contexts/PostsContext';
import { StorageProvider } from 'state/contexts/StorageContext';

export default function Home( { handledProductsResponse }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
     <StorageProvider handledProductsResponse={handledProductsResponse}>
    <PostProvider>
    <Main>
      <Subtitle id='first'>Últimos lançamentos</Subtitle>

      <GridProducts>
        <Products texto='section1'  />
      </GridProducts>

      <Banner />

      <Subtitle id='second'>Coleção de vintage 2022</Subtitle>
      <GridProducts>
        <Products texto='section2'  />
      </GridProducts>

      <Subtitle id='third'>
        Na dúvida sobre combinar suas roupas e ficar incrível?
      </Subtitle>
      <Subtitle id='fourth'> Confira nossas dicas em nosso blog.</Subtitle>

      <ArticleSection>
        <Posts />
      </ArticleSection>
    </Main>
    </PostProvider>
    </StorageProvider> 
    </>
  );
}

export const getStaticProps = async () => {
  const response: Items[] = await fetch(
    'http://localhost:3000/api/getAllProducts',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((serverResponse) => {
    return serverResponse.json();
  });
  const handledProductsResponse = Object.values(response);
  return {
    props: {
      handledProductsResponse,
    },
  };
};
