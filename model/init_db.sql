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
    restaurant_id VARCHAR(255),
    dairy_free BOOLEAN,
    gluten_free BOOLEAN,
    vegetarian BOOLEAN,
    vegan BOOLEAN,
);

DROP TABLE if exists restaurants; 
CREATE TABLE restaurants(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, restaurant_id VARCHAR(255), dairy_free BOOLEAN, gluten_free BOOLEAN, vegetarian BOOLEAN, vegan BOOLEAN);


INSERT INTO restaurants (restaurant_id, dairy_free, gluten_free, vegetarian, vegan) VALUES 
("ChIJw2SzTVsbdkgRFLrwhdiLmCw", 0, 1, 0, 0),
("ChIJq5XIW8oEdkgRg4k6dRh5T-k", 0, 1, 0, 0),
();






