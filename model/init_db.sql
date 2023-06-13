--
-- Drop Tables
--
-- This looks like it's leftover from the sample repo: you don't have  tables called customers or purchases, and you don't use foreign keys, so you don't need this part.
-- SET foreign_key_checks = 0;
-- DROP TABLE IF EXISTS customers;
-- DROP TABLE IF EXISTS purchases;
-- SET foreign_key_checks = 1;

--
-- Create Tables
--

DROP TABLE IF EXISTS restaurants;
     
CREATE TABLE restaurants (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    res_id VARCHAR(200),
    city VARCHAR(200),
    name VARCHAR(200),
    allergens VARCHAR(200),
);



INSERT INTO restaurants (id, res_id, city, name, allergens) VALUES 
(),
(),
(),
();




