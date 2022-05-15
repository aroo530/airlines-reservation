CREATE TABLE IF NOT EXISTS flights (
    id SERIAL PRIMARY KEY,
    from_airport VARCHAR(255) NOT NULL,
    to_airport VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    price INTEGER NOT NULL
);