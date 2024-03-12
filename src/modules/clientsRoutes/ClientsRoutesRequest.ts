import { Pool } from 'pg';

//Interface for creating a new client.
export interface ICreateClient {
  name: string;
  email: string;
  phoneNumber: string;
  coordinateX: number;
  coordinateY: number;
}

//Interface for representing a client.
export interface IClient {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  coordinateX: number;
  coordinateY: number;
}

//Class responsible for creating clients and fetching client data.
export class ClientsRoutesRequest {

  // Função para calcular a distância entre dois pontos
  calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  // Greedy algorithm to find the shortest route
  async findShortestRoute(clients: IClient[]): Promise<IClient[]> {
    let route: IClient[] = [{ ...clients[0] }]; // Começa do ponto 0,0 (localização da empresa)
    let unvisited = clients.slice(1); // Faz uma cópia dos clientes para poder modificar

    while (unvisited.length > 0) {
      let nearest = unvisited.reduce((prev, curr) => {
        let prevDist = this.calculateDistance(route[route.length - 1].coordinateX, route[route.length - 1].coordinateY, prev.coordinateX, prev.coordinateY);
        let currDist = this.calculateDistance(route[route.length - 1].coordinateX, route[route.length - 1].coordinateY, curr.coordinateX, curr.coordinateY);
        return (prevDist < currDist) ? prev : curr;
      });

      route.push({ ...nearest }); // Adiciona esse cliente à rota
      unvisited = unvisited.filter(c => c !== nearest); // Remove da lista de não visitados
    }
    console.log('Route', route)
    return route;
  }
}

