// Importe os tipos necessários
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma'; 

// Handler para a rota de API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') { 
    try {
      const hotels = await prisma.hotel.findMany(); 
      res.status(200).json(hotels); 
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar hotéis' });
    }
  } else {
    res.status(405).end(); 
  }
}