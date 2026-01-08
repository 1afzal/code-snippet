-- ALTER TABLE <table_name> <action>
ALTER TABLE cars ADD color VARCHAR NOT NULL(50);

ALTER TABLE users ADD COLUMN role VARCHAR(10) UNIQUE;

--Dropping columns--
ALTER TABLE cards DROP COLUMN color;

ALTER TABLE users DROP role;

--Renaming columns-
ALTER TABLE cars
RENAME COLUMN
colors TO colours

--Changing NOT NULL constrain--
ALTER TABLE cars
ALTER COLUMN colours
DROP NOT NULL;

--Renaming Table--
ALTER TABLE cars
RENAME TO SUPERCARS

