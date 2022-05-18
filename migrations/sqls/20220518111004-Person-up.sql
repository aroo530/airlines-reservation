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