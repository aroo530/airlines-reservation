CREATE TABLE IF NOT EXISTS Person (
    SSN text COLLATE pg_catalog.default NOT NULL,
    Name text COLLATE pg_catalog.default NOT NULL,
    Address text COLLATE pg_catalog.default,
    password text COLLATE pg_catalog.default NOT NULL,
    Country text COLLATE pg_catalog.default,
    Email text COLLATE pg_catalog.default NOT NULL,
    Phone text COLLATE pg_catalog.default NOT NULL,
    CONSTRAINT Person_pkey PRIMARY KEY (SSN)
);
