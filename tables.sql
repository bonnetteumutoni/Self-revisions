

create schema medical_records
CREATE TABLE medical_records.child_records(
medical_id serial  primary key,
height VARCHAR(15) not null,
weight VARCHAR(20) not null,
pre_existing_conditions VARCHAR(30)
)

--CREATE TABLE medical_records.child(
--child_id serial primary key,
-- name VARCHAR(15) not null,
--date_of_birth DATE not null,
-- blood_group VARCHAR(30),
-- gender VARCHAR(20)
--)


--insert into medical_records.child_records(height,weight,pre_existing_conditions)values
--('10032','29.21','none'),
--('30032','25.21','cold'),
--('10032','29.21','pneumonia');

--insert into medical_records.child(child_id,name,date_of_birth,blood_group,gender)values
--('10032','29.21','none'),
--('30032','25.21','cold'),
--('10032','29.21','pneumonia');

--select  * from medical_records.child_records;