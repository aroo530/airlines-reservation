CREATE TABLE IF NOT EXISTS Airplane (
    Airplane_id integer NOT NULL,
    Airplane_Model text COLLATE pg_catalog.default NOT NULL,
    Last_maintenece date NOT NULL,
    Next_maintenece date NOT NULL,
    Maximum_capacity integer NOT NULL,
    Maximum_dist integer NOT NULL,
    CONSTRAINT Airplane_pkey PRIMARY KEY (Airplane_id)
);