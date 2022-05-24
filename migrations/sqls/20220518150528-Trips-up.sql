CREATE TABLE IF NOT EXISTS Trips (
    Trip_id integer NOT NULL,
    Airline_id integer NOT NULL,
    Departure_date date NOT NULL,
    Daparture_time time NOT NULL,
    Arrival_date date NOT NULL,
    Arrival_time time NOT NULL,
    Source text COLLATE pg_catalog.default NOT NULL,
    Destination text COLLATE pg_catalog.default NOT NULL,
    Departure_airport text COLLATE pg_catalog.default NOT NULL,
    Arrival_aiport text COLLATE pg_catalog.default NOT NULL,
    Price integer NOT NULL,
    CONSTRAINT Trips_pkey PRIMARY KEY (Trip_id),
    CONSTRAINT tr3 FOREIGN KEY (Airline_id) REFERENCES Airline (Airline_id)
);