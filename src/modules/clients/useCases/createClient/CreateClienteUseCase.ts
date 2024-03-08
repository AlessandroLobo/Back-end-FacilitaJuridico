import { Pool } from 'pg'

export interface ICreateClient {
  name: string
  email: string
  phoneNumber: string
  coordinateX: number
  coordinateY: number
}

interface IClient {
  id: number
  name: string
  email: string
  phoneNumber: string
  coordinateX: number
  coordinateY: number
}

export class CreateClientUseCase {
  private readonly pool: Pool

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'db', // Nome do serviço do banco de dados definido em docker-compose.yml
      database: 'facilitaJuridico-db',
      password: 'postgres',
      port: 5432
    })
  }

  async execute({ name, email, phoneNumber, coordinateX, coordinateY }: ICreateClient): Promise<ICreateClient> {
    const client = await this.pool.connect()
    console.log(name, email, phoneNumber, coordinateX, coordinateY)
    try {
      const query = 'INSERT INTO clients (name, email, phoneNumber,coordinateX, coordinateY) VALUES ($1, $2, $3, $4 , $5) RETURNING *'
      const values = [name, email, phoneNumber, coordinateX, coordinateY]

      const result = await client.query(query, values)

      if (result.rowCount === 1) {
        return result.rows[0]
      } else {
        throw new Error('Erro ao inserir cliente')
      }
    } finally {
      client.release()
    }
  }

  async getClients(): Promise<IClient[]> {
    console.log('teste get')
    let client
    try {
      client = await this.pool.connect()
      const query = 'SELECT * FROM clients'
      const result = await client.query(query)
      console.log(result)
      return result.rows
    } finally {
      if (client !== undefined) {
        client.release()
      }
    }
  }
}
