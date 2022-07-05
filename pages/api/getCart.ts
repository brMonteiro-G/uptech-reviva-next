import { NextApiRequest, NextApiResponse } from "next";
import cart from '../../data/cart.json';

export default function handler (request:NextApiRequest,response:NextApiResponse){
    response.status(200).json(cart.products)
}