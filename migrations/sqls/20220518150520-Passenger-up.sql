CREATE TABLE IF NOT EXISTS Passenger (
    SSN text COLLATE pg_catalog.default NOT NULL,
    Username text COLLATE pg_catalog.default NOT NULL,
    password text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Passenger_pkey PRIMARY KEY (SSN),
    CONSTRAINT pa1 FOREIGN KEY (SSN) REFERENCES Person (SSN)
);
