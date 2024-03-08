CREATE DATABASE facilitaJuridico_db;

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(20) NOT NULL,
  coordinateX FLOAT,
  coordinateY FLOAT
);