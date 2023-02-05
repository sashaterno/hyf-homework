CREATE DATABASE IF NOT EXISTS mealsharing;

USE mealsharing;

CREATE TABLE
    meal (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        `description` TEXT,
        location VARCHAR(30) NOT NULL,
        `when` DATETIME NOT NULL,
        max_reservations INT UNSIGNED NOT NULL,
        price DECIMAL(6, 2) NOT NULL,
        created_date DATE NOT NULL
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE
    reservation (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        number_of_guests INT(3) UNSIGNED NOT NULL,
        meal_id INT(10) UNSIGNED NOT NULL,
        created_date DATE NOT NULL,
        contact_phonenumber VARCHAR(15) NOT NULL,
        contact_name VARCHAR(30) NOT NULL,
        contact_email VARCHAR(30) NOT NULL,
        CONSTRAINT `reservation` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE
    review (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        `description` TEXT,
        meal_id INT(10) UNSIGNED NOT NULL,
        stars INT(1) UNSIGNED NOT NULL,
        created_date DATE NOT NULL,
        CONSTRAINT `review` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = INNODB DEFAULT CHARSET = UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- meal

INSERT INTO
    meal (
        title,
        `description`,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Sushi',
        '2 person',
        'Copenhagen',
        '2023-02-07 15:30:00',
        2,
        400,
        '2023-02-05 18:43:04'
    );

INSERT INTO
    meal (
        title,
        `description`,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Pasta',
        '1 person',
        'Aarhus',
        '2023-02-11 18:00:00',
        1,
        225,
        '2023-02-11 14:18:00'
    );

INSERT INTO
    meal (
        title,
        `description`,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Pizza',
        '3 person',
        'Copenhagen',
        '2023-02-04 20:30:00',
        3,
        1100,
        '2023-02-01 10:02:43'
    );

INSERT INTO
    meal (
        title,
        `description`,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Burger',
        '1 person',
        'Odense',
        '2023-02-15 13:45:00',
        1,
        150,
        '2023-02-14 17:04:22'
    );

-- reservation

INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        2,
        1,
        '2023-02-01 15:13:11',
        '1111111',
        'John',
        'john@mail.dk'
    );

INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        1,
        3,
        '2023-02-5 18:21:55',
        '22222222',
        'David',
        'david@mail.com'
    );

INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        3,
        1,
        '2023-02-20 11:44:26',
        '33333333',
        'Kris',
        'kris@mail.com'
    );

-- review

INSERT INTO
    review (
        title,
        `description`,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Super',
        'Everything was great',
        2,
        5,
        '2023-02-04 19:13:58'
    );

INSERT INTO
    review (
        title,
        `description`,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Good place',
        'Everything was worthy',
        1,
        4,
        '2023-02-01 16:29:06'
    );

INSERT INTO
    review (
        title,
        `description`,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Dubious impressions',
        'Quite a few flaws',
        3,
        3,
        '2023-02-08 18:18:33'
    );

-- Queries

-- Meal

-- Get all meals

SELECT meal.title AS 'all meals' FROM meal;

-- Add a new meal

INSERT INTO
    meal (
        title,
        `description`,
        location,
        `when`,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Salad',
        '1 person',
        'Copenhagen',
        '2023-02-06 17:30:00',
        1,
        125,
        '2023-02-06 14:50:41'
    );

-- Get a meal with any id

SELECT * FROM meal WHERE id = 2;

-- Update a meal with any id. Update any attribute fx the title or multiple attributes

UPDATE meal
SET
    title = 'Sushi set',
    price = 450
WHERE id = 1;

-- Delete a meal with any id

DELETE FROM meal WHERE id = 3;

-- Queries

-- Reservation

-- Get all reservations

SELECT * FROM reservation;

-- Add a new reservation

INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        4,
        5,
        '2023-02-04 18:43:13',
        '44444444',
        'Rick',
        'rick@mail.dk'
    );

-- Get a reservation with any id

SELECT * FROM reservation WHERE id = 1;

-- Update a reservation with any id. Update any attribute fx the title or multiple attributes

UPDATE reservation
SET
    number_of_guests = 5,
    contact_phonenumber = '55555555'
WHERE id = 4;

-- Delete a reservation with any id

DELETE FROM reservation WHERE id = 4;

-- Queries

-- Review

-- Get all reviews

SELECT * FROM review;

-- Add a new review

INSERT INTO
    review (
        title,
        `description`,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Not bad',
        'Slow service, but cheap prices',
        5,
        4,
        '2023-02-06 12:16:39'
    );

-- Get a review with any id

SELECT * FROM review WHERE id = 3;

-- Update a review with any id. Update any attribute fx the title or multiple attributes

UPDATE review SET title = 'Delicious', meal_id = 2 WHERE id = 4;

-- Delete a review with any id

DELETE FROM review WHERE id = 2;

-- Additional queries

-- Get meals that has a price smaller than a specific price

SELECT
    meal.id,
    meal.title,
    meal.price
FROM meal
WHERE price < 700;

-- Get meals that still has available reservations

SELECT
    meal.title,
    meal.max_reservations,
    reservation.number_of_guests, (
        meal.max_reservations - reservation.number_of_guests
    ) AS avialable
FROM meal
    INNER JOIN reservation ON meal.id = reservation.meal_id
WHERE
    meal.max_reservations > reservation.number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT meal.id, meal.title FROM meal WHERE title like '%set%';

-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE
    created_date BETWEEN '2023-02-01' AND '2023-02-10';

-- Get only specific number of meals fx return only 5 meals

SELECT * FROM meal WHERE max_reservations < 3 LIMIT 3;

-- Get the meals that have good reviews

SELECT
    meal.title,
    review.stars
FROM meal
    INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation
    INNER JOIN meal ON reservation.meal_id = meal.id
WHERE meal.title = '%set%'
ORDER BY meal.created_date;

-- Sort all meals by average number of stars in the reviews

SELECT
    meal.title,
    ROUND(AVG(review.stars)) as AVG
FROM meal
    JOIN review ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY AVG DESC;