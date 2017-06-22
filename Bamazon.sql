CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE favorite_products (
	id VARCHAR(100) NOT NULL,
    artist VARCHAR(50),
    score INTEGER(10) 
);

INSERT INTO favorite_products(
product,
department,
price,
quantity,
);

SELECT * FROM  topProducts; 