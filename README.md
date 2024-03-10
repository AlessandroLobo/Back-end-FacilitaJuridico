# Backend Server with Node.js and Express

This repository contains the code for a backend server built with Node.js Express and PostgreSQL , intended to be run using Docker Compose.

## Autor
## Alessandro Lobo

# Link to the explanatory video
## >> https://youtu.be/ma-kvS4QtsA <<

## Prerequisites
- Docker
- Docker Compose

## Getting Started
1. Clone this repository to your local machine.
```bash
git clone https://github.com/AlessandroLobo/Back-end-FacilitaJuridico.git
```
2. Navigate to the project directory.
3. Run the following command to build and start the server:
   ```bash
   docker-compose up

## DDL 
```bash
   CREATE DATABASE facilitaJuridico_db;

   CREATE TABLE IF NOT EXISTS clients (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     phoneNumber VARCHAR(20) NOT NULL,
     coordinateX FLOAT,
     coordinateY FLOAT
   );
```


## The project uses the following libraries:

#### cors: version 2.8.5
#### express: version 4.18.3
#### pg: version 8.11.3
#### @types/cors: version 2.8.17
#### @types/express: version 4.17.21
#### @types/node: version 20.11.25
#### @types/pg: version 8.11.2
#### @typescript-eslint/eslint-plugin: version 6.21.0
#### eslint: version 8.57.0
#### eslint-config-standard-with-typescript: version 43.0.1
#### eslint-plugin-import: version 2.29.1
#### eslint-plugin-n: version 16.6.2
#### eslint-plugin-promise: version 6.1.1
#### nodemon: version 3.1.0
#### ts-node-dev: version 2.0.0
#### typescript: version 5.4.2

Thank you for the opportunity to work on this test. I have learned a great deal, as I always do with new projects, and it has been a very interesting experience.