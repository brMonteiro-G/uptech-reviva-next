import data from '../../../data/data.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler (request:NextApiRequest, response: NextApiResponse){
    const {query:{id}} = request

    response.status(200).json({
    ...data.products.find((product => product.id === id)),    
    })
}