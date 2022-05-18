CREATE TABLE IF NOT EXISTS Flight (
    Flight_id integer NOT NULL,
    Plane_id integer NOT NULL,
    Trip_id integer NOT NULL,
    CONSTRAINT Flight_pkey PRIMARY KEY (Flight_id),
    CONSTRAINT f2 FOREIGN KEY (Plane_id) REFERENCES Airplane (Airplane_id),
    CONSTRAINT f3 FOREIGN KEY (Trip_id) REFERENCES Trips (Trip_id)
);