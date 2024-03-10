# Backend Server with Node.js and Express

This repository contains the code for a backend server built with Node.js Express and PostgreSQL , intended to be run using Docker Compose.

## Autor
# Alessandro Lobo

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
   npm install
   
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
#### eslint: version 8.57.0
#### nodemon: version 3.1.0
#### typescript: version 5.4.2


Thank you for the opportunity to work on this test. I have learned a great deal, as I always do with new projects, and it has been a very interesting experience.