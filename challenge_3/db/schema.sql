DROP DATABASE IF EXISTS order_db;
CREATE DATABASE order_db;

USE order_db;

CREATE TABLE order_table (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name1 VARCHAR(100),
  email VARCHAR(100),
  password1 VARCHAR(100),
  address1 VARCHAR(100),
  address2 VARCHAR(100),
  city VARCHAR(100),
  zipcode VARCHAR(100),
  phonenumber VARCHAR(100),
  creditcard VARCHAR(100),
  expirydate VARCHAR(100),
  cvv VARCHAR(100),
  billingzipcode VARCHAR(100)
);