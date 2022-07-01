import { useAddButton } from 'state/hooks/useAddButton';
import { useUpdateStorage } from 'state/hooks/useUpdateStorage';
import { updateValues } from 'utils/updateValue';
import { ProductsInCartProps } from '../ReviewItem';

interface ButtonProps extends ProductsInCartProps {
  operation: string;
}

export function Addbutton({ item, operation }: ButtonProps) {

  const addButtonFunction = useAddButton();
  const updateStorage = useUpdateStorage();
  return (
    <button
      id='plus'
      onClick={() => {
        addButtonFunction(item, operation);

      }}
    >
      {operation === 'plus' ? '+' : '-'}
    </button>
  );
}
