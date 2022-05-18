# airlines reservation

database of airlines

person
airline
passenger
trip
airplane
flight

https://www.postman.com/science-geoscientist-29544415/workspace/airline-reservation

CREATE TABLE IF NOT EXISTS Airline (
    Airline_id integer NOT NULL,
    Airline_name text COLLATE pg_catalog.default NOT NULL,
    Airline_email text COLLATE pg_catalog.default NOT NULL,
    Airline_phone text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Airline_pkey PRIMARY KEY (Airline_id)
);
CREATE TABLE IF NOT EXISTS Person (
    SSN text COLLATE pg_catalog.default NOT NULL,
    Name text COLLATE pg_catalog.default NOT NULL,
    Address text COLLATE pg_catalog.default,
    City text COLLATE pg_catalog.default,
    Country text COLLATE pg_catalog.default,
    Email text COLLATE pg_catalog.default NOT NULL,
    Telephone text COLLATE pg_catalog.default NOT NULL,
    Phone text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Person _pkey PRIMARY KEY (SSN)
);
CREATE TABLE IF NOT EXISTS Trips (
    Trip_id integer NOT NULL,
    Airline_id integer NOT NULL,
    Departure_date date NOT NULL,
    Daparture_time time with time zone NOT NULL,
    Arrival_date date NOT NULL,
    Arrival_time time with time zone NOT NULL,
    Source text COLLATE pg_catalog.default NOT NULL,
    Destination text COLLATE pg_catalog.default NOT NULL,
    Departure_airport text COLLATE pg_catalog.default NOT NULL,
    Arrival_aiport text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Trips_pkey PRIMARY KEY (Trip_id) CONSTRAINT tr3 FOREIGN KEY (Airline_id) REFERENCES Airline (Airline_id)
);
CREATE TABLE IF NOT EXISTS Passenger (
    SSN text COLLATE pg_catalog.default NOT NULL,
    Username text COLLATE pg_catalog.default NOT NULL,
    password text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Passenger_pkey PRIMARY KEY (SSN),
    CONSTRAINT pa1 FOREIGN KEY (SSN) REFERENCES Person (SSN)
);