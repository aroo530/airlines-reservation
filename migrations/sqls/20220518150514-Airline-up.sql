CREATE TABLE IF NOT EXISTS Airline (
    Airline_id integer NOT NULL,
    Airline_name text COLLATE pg_catalog.default NOT NULL,
    Airline_email text COLLATE pg_catalog.default NOT NULL,
    Airline_phone text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Airline_pkey PRIMARY KEY (Airline_id)
);
