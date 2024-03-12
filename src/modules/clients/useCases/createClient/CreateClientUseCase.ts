import { Pool } from 'pg';

//Interface for creating a new client.
export interface ICreateClient {
  name: string;
  email: string;
  phoneNumber: string;
  coordinateX: number;
  coordinateY: number;
}

// Interface for representing a client.
interface IClient {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  coordinateX: number;
  coordinateY: number;
}

//Class responsible for creating clients and fetching client data.
export class CreateClientUseCase {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'db',
      database: 'facilitaJuridico-db',
      password: 'postgres',
      port: 5432,
      max: 200,
      idleTimeoutMillis: 30000,
    });
  }

  //Method to create a new client.
  async execute({ name, email, phoneNumber, coordinateX, coordinateY }: ICreateClient): Promise<ICreateClient> {
    const client = await this.pool.connect();
    try {
      const query = 'INSERT INTO clients (name, email, phoneNumber,coordinateX, coordinateY) VALUES ($1, $2, $3, $4 , $5) RETURNING *';
      const values = [name, email, phoneNumber, coordinateX, coordinateY];

      const result = await client.query(query, values);

      if (result.rowCount === 1) {
        return result.rows[0];
      } else {
        throw new Error('Erro ao inserir cliente');
      }
    } finally {
      client.release();
    }
  }

  //Method to fetch client data.
  async getClients(searchTerm: string): Promise<IClient[]> {
    console.log('Search term:', searchTerm);
    try {
      if (!searchTerm) {
        let client = await this.pool.connect();
        const query = `
        SELECT *
        FROM clients
      `;
        const result = await client.query(query);
        return result.rows;
      } else {
        let client = await this.pool.connect();
        const trimmedTerm = searchTerm.trim();
        const lowerTerm = trimmedTerm.toLowerCase();
        const query = `
        SELECT *
        FROM clients
        WHERE LOWER(name) LIKE $1
          OR LOWER(email) LIKE $1
          OR LOWER(phoneNumber) LIKE $1
      `;
        const result = await client.query(query, [`%${lowerTerm}%`]);
        return result.rows;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}