import { NextApiRequest, NextApiResponse } from 'next';
import cart from '../../data/cart.json';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
    console.log(request);
    
  const newItemInCart = {
    ...(request.body),
  };
  cart.products.push(newItemInCart)
  response.status(201).json(newItemInCart);
}
 