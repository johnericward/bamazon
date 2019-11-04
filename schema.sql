-- create database in mysql
DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

-- set up table
USE bamazon;
CREATE TABLE products (
 item_id  serial,
 product_name VARCHAR(200) NOT NULL,
 department_name VARCHAR(200) NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity int not null,
 PRIMARY KEY (item_id)
);
-- populate table

use bamazon;

insert into products (product_name, department_name, price, stock_quantity)
values ("pumpkin", "food", 5.00, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("apple", "food", 1.00, 200);

insert into products (product_name, department_name, price, stock_quantity)
values ("plate", "kitchen", 10.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("bowl", "kitchen", 7.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("cup", "kitchen", 7.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Starry Night", "art", 100.00, 15);

insert into products (product_name, department_name, price, stock_quantity)
values ("The Kiss", "art", 100.00, 25);

insert into products (product_name, department_name, price, stock_quantity)
values ("Nintendo", "tech", 299.99, 200);

insert into products (product_name, department_name, price, stock_quantity)
values ("PS4", "tech", 299.99, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("XBOX", "tech", 249.99, 150);
