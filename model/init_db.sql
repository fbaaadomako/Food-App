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
    city VARCHAR(255),
    dairy_free BOOLEAN,
    gluten_free BOOLEAN,
    vegetarian BOOLEAN,
    vegan BOOLEAN
);

DROP TABLE if exists restaurants; 
CREATE TABLE restaurants(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, restaurant_id VARCHAR(255), city VARCHAR(255), dairy_free BOOLEAN, gluten_free BOOLEAN, vegetarian BOOLEAN, vegan BOOLEAN);


INSERT INTO restaurants (restaurant_id, city, dairy_free, gluten_free, vegetarian, vegan) VALUES 
("ChIJw2SzTVsbdkgRFLrwhdiLmCw", "London", 0, 1, 0, 0),
("ChIJq5XIW8oEdkgRg4k6dRh5T-k", "London", 0, 1, 0, 0),
("ChIJVY9VqmgEdkgRErzWkaaxaws", "London", 1, 1, 1, 1),
("ChIJxY0Q1AMddkgRMoLSyX74E94", "London", 1, 0, 1, 1),
("ChIJDeY2TCkbdkgRk8lAI3e57H0", "London", 1, 0, 1, 1),
("ChIJzYe4xGoFdkgRz1releWSMkk", "London", 0, 1, 0, 0),
("ChIJXciYx30cdkgRsPTUZbVcICA", "London", 1, 0, 1, 1),
("ChIJbatx-eAadkgR_WDnjsJLiQk", "London", 1, 0, 1, 1),
("ChIJtYW7TgsFdkgRGapdipRQmzw", "London", 0, 1, 1, 1),
("ChIJ14izcNQEdkgR_KRFhObbsNk", "London", 0, 1, 0, 0),
("ChIJdfu97iXGxokRm788hygMp1w", "Pennsylvania", 1, 0, 1, 1),
("ChIJPTN6vOrHxokRXmd3aUV3Gbk", "Pennsylvania", 1, 1, 1, 1),
("ChIJ-zJ7Of-3xokRFxuQ1w7lXRg", "Pennsylvania", 1, 1, 1, 1),
("ChIJvVEYlSXGxokR-T68hnrA0oI", "Pennsylvania", 0, 1, 1, 0),
("ChIJZ-CmISTGxokRW4OR7AHk6CU", "Pennsylvania", 0, 0, 1, 0),
("ChIJUyfTme3GxokRKEMronTyQKw", "Pennsylvania", 1, 0, 1, 0),
("ChIJwfA48eLFxokRloeqyIl3jLU", "Pennsylvania", 0, 1, 1, 0),
("ChIJq7hqXS_GxokRbm5ud0CYz2Q", "Pennsylvania", 1, 0, 1, 0),
("ChIJTWDZayTHxokReMNouSIghWM", "Pennsylvania", 1, 1, 1, 1),
("ChIJVZukQ0_HxokREovFIVmZ5ms", "Pennsylvania", 0, 1, 1, 0),
("ChIJ9zjcHVFJzDERNjpJRykBT2w", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJ3VdiY0pJzDERzQLjYyQVqrg", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJC36ez9A3zDERyaXzf2G2pJo", "Kuala Lumpur", 0, 1, 0, 0),
("ChIJaewDdZhJzDEReZKBF9_riJ4", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJR8dsSfJIzDERa73fXOdQv88", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJt0wX7cBJzDER4N1CYmzQrKs", "Kuala Lumpur", 0, 1, 0, 0),
("ChIJZ05BeSZJzDERlVmxJahQ1i", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJ-RVey15SzDERbYl4IyJFEZE", "Kuala Lumpur", 1, 0, 1, 1),
("ChIJKTxLJNVJzDERs_iwRo6PCgc", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJEz4yYRM3zDERPeJBXCloKio", "Kuala Lumpur", 0, 1, 0, 0);






