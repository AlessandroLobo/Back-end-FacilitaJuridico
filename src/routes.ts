import express, { type Request, type Response } from 'express'
import { CreateClientUseCase } from './modules/clients/useCases/createClient/CreateClienteUseCase'

const routes = express.Router()
const createClientUseCase = new CreateClientUseCase()

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
    const clients = await createClientUseCase.getClients()
    res.status(200).json({ clients })
  } catch (error) {
    console.error('Erro ao buscar clientes:', error)
    res.status(500).json({ error: 'Erro ao buscar clientes' })
  }
})

export { routes }
