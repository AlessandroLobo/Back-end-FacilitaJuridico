import express, { type Request, type Response } from 'express'
import { CreateClientUseCase } from './modules/clients/useCases/createClient/CreateClientUseCase'
import { ClientsRoutesRequest } from './modules/clientsRoutes/ClientsRoutesRequest'

const routes = express.Router()
const createClientUseCase = new CreateClientUseCase()
const clientsRoutesRequest = new ClientsRoutesRequest()

// Rota para criar um novo cliente
routes.post('/clients', async (req: Request, res: Response): Promise<void> => {
  const { name, email, phoneNumber, coordinateX, coordinateY } = req.body

  try {
    const client = await createClientUseCase.execute({ name, email, phoneNumber, coordinateX, coordinateY })
    res.status(201).json({ client })
  } catch (error) {
    console.error('Erro ao criar cliente:', error)
    res.status(500).json({ error: 'Erro ao criar cliente' })
  }
})

// Rota para buscar todos os clientes
routes.get('/clients', async (req: Request, res: Response): Promise<void> => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const clients = await createClientUseCase.getClients(searchTerm);

    res.status(200).json({ clients });
  } catch (error) {
    // console.error('Erro ao buscar clientes:', error);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

routes.get('/clients/ClientsRoutesRequest', async (req: Request, res: Response): Promise<void> => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const clients = await createClientUseCase.getClients(searchTerm);

    const calculatedRoute = await clientsRoutesRequest.findShortestRoute(clients); // Adicione o await aqui

    res.status(200).json({ calculatedRoute }); // Retorne os clientes e a rota calculada
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
})

export { routes }
