import { fireEvent, render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Sizes } from 'sizes';

describe('<BillingReview/>', () => {
  it('Should display the value', () => {
    const products = [
      {
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
      },
      {
        name: 'Jaqueta Plus Size Masculina by Riachuelo',
        id: '1',
        url: '#',
        price: 69.9,
        description:
          'A Jaqueta Plus Size Masculina Biker PU Preto ALLMAN by Riachuelo é versátil e confortável, perfeito para dias mais frios. Produzida em poliéster, a peça possui fechamento na vista com zíper. Básico e autêntico, esse modelo é superconfortável e garante muita flexibilidade. ',
        available_size: [Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE],
        available_amount: 12,
        images: [
          {
            url: '/images/imagem_2.1.jpg',
            description: 'Jaqueta Plus Size Masculina',
          },
          {
            url: '/images/imagem_2.2.jpg',
            description: 'Jaqueta Plus Size Masculina',
          },
          {
            url: '/images/imagem_2.3.jpg',
            description: 'Jaqueta Plus Size Masculina',
          },
          {
            url: '/images/imagem_2.4.jpg',
            description: 'Jaqueta Plus Size Masculina',
          },
        ],
      },
    ];

    const total = products.reduce(
      (acc, currentValue) =>
        (acc += currentValue.price),
      0
    );



    expect(total).toEqual(199.8);


  });



});
