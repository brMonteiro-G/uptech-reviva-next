import {cartReviewTitle as titles} from 'utils/assets/cartReviewTitle';


export function ReviewTitle() {

  return (
    <>
      {titles.map((title, index) => {
        return (
          <div key={index}>
            <strong>{title}</strong>
          </div>
        );
      })}
      
    </>
  );
}
