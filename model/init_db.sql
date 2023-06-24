-- Create restaurants table

DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users_restaurants;

CREATE TABLE restaurants (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restaurant_id VARCHAR(255),
    city VARCHAR(255),
    dairy_free BOOLEAN,
    gluten_free BOOLEAN,
    vegetarian BOOLEAN,
    vegan BOOLEAN
);

-- SELECT * FROM users_restaurants JOIN restaurants ON restaurants.id = users_restaurants.restaurantsId WHERE users_restaurants.usersId = ${req.user_id};

CREATE TABLE users (
    users_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE users_restaurants (
usersId INT NOT NULL, 
restaurantsId INT NOT NULL, 
PRIMARY KEY (usersId, restaurantsId),
FOREIGN KEY (usersId) REFERENCES users(users_id) ON DELETE CASCADE, 
FOREIGN KEY (restaurantsId) REFERENCES restaurants(id) ON DELETE CASCADE
);


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
("ChIJdfu97iXGxokRm788hygMp1w", "Philadelphia", 1, 0, 1, 1),
("ChIJPTN6vOrHxokRXmd3aUV3Gbk", "Philadelphia", 1, 1, 1, 1),
("ChIJ-zJ7Of-3xokRFxuQ1w7lXRg", "Philadelphia", 1, 1, 1, 1),
("ChIJvVEYlSXGxokR-T68hnrA0oI", "Philadelphia", 0, 1, 1, 0),
("ChIJZ-CmISTGxokRW4OR7AHk6CU", "Philadelphia", 0, 0, 1, 0),
("ChIJUyfTme3GxokRKEMronTyQKw", "Philadelphia", 1, 0, 1, 0),
("ChIJwfA48eLFxokRloeqyIl3jLU", "Philadelphia", 0, 1, 1, 0),
("ChIJq7hqXS_GxokRbm5ud0CYz2Q", "Philadelphia", 1, 0, 1, 0),
("ChIJTWDZayTHxokReMNouSIghWM", "Philadelphia", 1, 1, 1, 1),
("ChIJVZukQ0_HxokREovFIVmZ5ms", "Philadelphia", 0, 1, 1, 0),
("ChIJ9zjcHVFJzDERNjpJRykBT2w", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJ3VdiY0pJzDERzQLjYyQVqrg", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJC36ez9A3zDERyaXzf2G2pJo", "Kuala Lumpur", 0, 1, 0, 0),
("ChIJaewDdZhJzDEReZKBF9_riJ4", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJR8dsSfJIzDERa73fXOdQv88", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJt0wX7cBJzDER4N1CYmzQrKs", "Kuala Lumpur", 0, 1, 0, 0),
("ChIJZ05BeSZJzDERlVmxJahQ1iM", "Kuala Lumpur", 1, 0, 1, 1),
("ChIJ-RVey15SzDERbYl4IyJFEZE", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJKTxLJNVJzDERs_iwRo6PCgc", "Kuala Lumpur", 0, 1, 0, 0),
("ChIJEz4yYRM3zDERPeJBXCloKio", "Kuala Lumpur", 1, 1, 1, 1),
("ChIJVc1NH3sJAWAR9SMlbODV9NQ", "Kyoto", 1, 0, 0, 0),
("ChIJjWdpVQ0JAWAR-myTPZSlpnY", "Kyoto", 0, 1, 0, 0),
("ChIJq6pu55kIAWAR310_2PwqPzE", "Kyoto", 0, 0, 1, 1),
("ChIJGRq7H5QIAWARJ7y_2Ecdhnw", "Kyoto", 0, 1, 0, 0),
("ChIJ90FzJc4IAWARupqhmWZSg0E", "Kyoto", 1, 0, 0, 0),
("ChIJx-PaOJQIAWARakay2oi7ZGY", "Kyoto", 1, 0, 0, 0),
("ChIJ93yyvbQJAWARGdkjcdcUYUE", "Kyoto", 0, 1, 0, 0),
("ChIJx1leax0IAWARNRROX0s67RE", "Kyoto", 0, 0, 1, 1),
("ChIJWwNkMLoJAWAR7chswFIMOEI", "Kyoto", 0, 1, 0, 0),
("ChIJEyjldY0IAWARnH7Fzl8bcfo", "Kyoto", 1, 0, 0, 0),
("ChIJf1T-PJlZwokR0i4jGbXJW6s", "New York", 1, 0, 0, 0),
("ChIJDy4b5q1ZwokR7Ayp1Ap3-c0", "New York", 1, 0, 0, 0),
("ChIJ2YRjN4dZwokRbL5DuScXEyo", "New York", 1, 0, 1, 0),
("ChIJQwJ0Z1dYwokRSnJUdNRJz1w", "New York", 1, 1, 0, 0),
("ChIJ0wsieaZZwokR72DD7FhYqnw", "New York", 1, 0, 1, 0),
("ChIJlUTKy1VYwokREq7LLltPsGU", "New York", 1, 0, 1, 0),
("ChIJj7W3TuFYwokRTjTOk8xipL4", "New York", 1, 0, 1, 0),
("ChIJfVFqGrxZwokRqva56HtwbRs", "New York", 1, 1, 1, 0),
("ChIJNa5r9j1awokR7V0YcDbff0o", "New York", 1, 1, 1, 0),
("ChIJiYsEnohZwokR8oZK_TgmSjY", "New York", 1, 1, 1, 0),
("ChIJlW3QcOe5yhQReubAn3p0VUs", "Istanbul", 0, 1, 0, 0),
("ChIJt1-z8F-5yhQRtxLtYtwRpjY", "Istanbul", 0, 1, 0, 0),
("ChIJa3romHq3yhQRQcfTUwmvMm0", "Istanbul", 0, 1, 1, 0),
("ChIJUQ31a5u5yhQRb3NRj0euDJI", "Istanbul", 0, 0, 1, 0),
("ChIJI-4ZD8C5yhQRAwWo7uBN1DI", "Istanbul", 0, 1, 1, 0);

INSERT INTO users (name, email, username, password) VALUES
('Chandler', 'chandler@gmail.com', 'chandler', '$2b$10$4KtBuFVVNVneNPaKacFLRO0RbP9s56KVSdS5CLxflC9soMRK67LN.'),
('Rachel', 'rachel@gmail.com', 'rachel', '$2b$10$XfJx2vgUtukVYnFP52JYxOgazD5KwXuy7UMXvaZRhcAxGRReS4lD6');