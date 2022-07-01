import { Button } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';
import { v4 as uuidv4 } from 'uuid';
import Inventory from 'inventory';

import userEvent from '@testing-library/user-event';
import { Sizes } from 'sizes';

describe('<Button/>', () => {
  // it('Should display "add in cart" alert', () => {
  //   const { queryByRole, getByText, debug } = render(<Button id={'0'} />);

  //   window.alert = jest.fn();

  //   const button = getByText('POR NA SACOLA');
  //   debug();
  //   userEvent.click(button);

  //   debug();

  //   expect(window.alert).toBeCalledWith('Produto adicionado ao carrinho');
  // });

  it('Should display "add in cart" alert', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    const element = {
      name: 'Vestido Midi Feminino AK by Riachuelo',
      id: '0',
      url: '#',
      price: 129.9,
      description:
        'Crie um look jovem e estiloso com o Vestido Longo Feminino Evasê Uma Maria Liso Bege AK by Riachuelo! Confeccionado em malha, o vestido pode ser combinado com tênis casual, deixando seus looks muito descolados!',
      available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
      available_amount: 12,
      images: [
        {
          url: '/images/imagem_1.1.jpg',
          description: 'Vestido Midi Feminino Evasê',
        },
        {
          url: '/images/imagem_1.2.jpg',
          description: 'Vestido Midi Feminino Evasê',
        },
        {
          url: '/images/imagem_1.3.jpg',
          description: 'Vestido Midi Feminino Evasê',
        },
        {
          url: '/images/imagem_1.4.jpg',
          description: 'Vestido Midi Feminino Evasê',
        },
      ],
    };
    const { getByText } = render(<Button id={'0'} />);
    fireEvent.click(getByText('POR NA SACOLA'), {
      // verifyQuantity(element)
    });
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
