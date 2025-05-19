create schema children_vaccination
create table children_vaccination.child_details(
child_id SERIAL primary key,
first_name VARCHAR(120) not null,
last_name VARCHAR(120) not null,
date_of_birth VARCHAR(120) not null,
birth_certificate_no VARCHAR(120) not null,
gender VARCHAR(120) CHECK(gender in('male','female')),
blood_group VARCHAR(120) not null
);

insert into children_vaccination.child_details(first_name,last_name,date_of_birth,birth_certificate_no,gender,blood_group)
values
('Jane','wamboi','2020-03-10','167839909','female','AB-'),
('Janet','wumboi','2019-07-18','765899909','female','O-'),
('Erick','wanjala','2021-10-14','467939909','male','A+'),
('Eliana','Joy','2022-12-14','4679326909','female','AB+'),
('Winny','Wally','2023-09-24','68939909','female','A+'),
('Erica','Line','2023-08-23','387939909','female','AB-'),
('John','wilson','2022-11-7','897639909','male','O+'),
('Liny','Fany','2023-10-10','327839909','female','A+'),
('James','Tomy','2021-01-13','37284909','male','O+'),
('Jimmy','Turbo','2022-10-14','329909','male','O-'),
('Lina','Wayz','2022-02-14','98766909','female','O-'),
('Eric','Mayn','2023-09-1','467939909','male','A+'),
('Jay','Boso','2023-7-4','9378910909','male','AB+'),
('Bei','Lana','2022-10-14','667939909','female','A+'),
('Limo','Takur','2021-10-14','467939909','male','AB-');

select * from children_vaccination.child_details

CREATE TABLE children_vaccination.child_vaccinated(
table_id SERIAL primary key,
date_of_issued VARCHAR(120) not null,
date_of_expirely VARCHAR(120) not null,
dosage VARCHAR(120) not null
);

insert into children_vaccination.child_vaccinated(date_of_issued,date_of_expirely,dosage)
values
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','2 drop'),
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','3 drop'),
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','2 drop'),
('2025-04-27','2025-05-20','2 drop'),
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','3 drop'),
('2025-04-27','2025-05-20','2 drop'),
('2025-04-27','2025-05-20','3 drop'),
('2025-04-27','2025-05-20','2 drop'),
('2025-04-27','2025-05-20','1 drop'),
('2025-04-27','2025-05-20','1 drop');


select * from children_vaccination.child_vaccinated





















