-- 
-- PROJETO INTEGRADOR EM ENGENHARIA DE SOFTWARE II
-- Nome: Douglas Coutinho Ramos
-- Instituição: Universidade Positivo
-- RGM: 28860179
-- Semestre: 7º / 2024
--

-- Script SQL para configuração do banco de dados da Cafeteria
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category VARCHAR(20)
);

INSERT INTO products (id, name, description, price, category) VALUES
(1, 'Espresso', 'Espresso rico e cremoso', 2.50, 'Bebida'),
(2, 'Cappuccino', 'Cappuccino suave e espumoso', 3.50, 'Bebida'),
(3, 'Croissant', 'Croissant amanteigado e crocante', 1.80, 'Pastelaria');
