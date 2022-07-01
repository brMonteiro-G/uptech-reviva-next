
export enum PositionPost {
  LEFT = 'left',
  RIGHT = 'right',
}
export enum OrientationPost {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

interface ArticleProps {
  position: PositionPost;
  orientation?: OrientationPost;
  title: string;
  url_image: string;
  description: string;
}
export function Article(props: ArticleProps) {
  return (
    <>
      <img
        key={props.url_image}
        src={ props.url_image}
        alt={props.description}
      />
      <p key={props.title}>{props.title}</p>
    </>
  );
}
