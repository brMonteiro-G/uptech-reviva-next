
import { PostContext } from 'state/contexts/PostsContext';
import { useContext } from 'react';
import { Article, OrientationPost, PositionPost } from './Article/Article';
import { LeftPost, RightPost, RightArticle } from './PostsStyle';

export function Posts() {

  const {posts, setPosts} = useContext(PostContext);

  return (
    <>
      <LeftPost>
        {posts.map((post) => {

          if (post.category === 1) {
            return (<Article
              position={PositionPost.LEFT}
              title={post.title} 
              url_image={post.url_image}
              description={post.description}
            />
            );
          }
        }
        )
        }

      </LeftPost>
      <RightPost>
        <RightArticle>

          {posts.map((post) => {

            if (post.category === 2) {
              return (<Article
                position={PositionPost.LEFT}
                title={post.title}
                url_image={post.url_image}
                description={post.description}
              />
              );

            }
          }
          )
          }

        </RightArticle>

      </RightPost >

    </>
  );
}