import { createContext, ReactNode, useState } from 'react';

interface PostContextProps {
  posts: Posts[];
  setPosts?: (posts: any) => void;
}
interface Posts {
  url_image: string;
  description: string;
  title: string;
  subtitle?: string;
  category: number;
}

interface PostsProviderProps {
  children: ReactNode;
}
export const PostContext = createContext<PostContextProps>({
  posts: [],
});
PostContext.displayName = "posts"
export const PostProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<Posts[]>([
    {
      url_image: '/images/14.jpg',
      description: 'Capa de coleção mulheres 2021',
      title: 'Coleção mulheres 2021',
      subtitle: `A coleção Women 2021 traz tudo que uma mulher precisa para mostrar exuberância e
            trazer um ar leve aos seus looks`,
      category: 1,
    },
    {
      url_image: '/images/Hero-CLP-MODA-CASA-ADS-10899-Ofertas60OFF.jpg',
      description: 'Capa de coleção clássica',
      title: 'Coleção Classic 80s',
      category: 2,
    },
    {
      url_image: '/images/Hero-HS-Geek-ADS-10643-Stranger-Things-V4.jpg',
      description: 'Capa de coleção street',
      title: 'Coleção Street 90s',
      category: 2,
    },
  ]);
  
  
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
