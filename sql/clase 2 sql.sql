SELECT * FROM `estudiantes`;
/* titulo del comentario
lineas de comentario
lineas de comentario
lineas de comentario
-- comentario 1
# comentario 2 
*/
/* comentarios en linea */
# instrucion insert
INSERT INTO `estudiantes`
	(nombre, apellido, curso)
VALUES
	("Zeus","Young","Lacus Mauris Non Corporation"),("Solomon","William","Cubilia Curae; Phasellus Associates"),("Vladimir","Klein","Aliquam Corp."),("Tyrone","Fowler","Elit Foundation"),("Benedict","Mcgee","Mauris Id LLP"),("Arsenio","Kirkland","Ut Tincidunt Associates"),("Graiden","Campbell","Tristique Aliquet Associates"),("Rogan","Madden","Quis Urna Consulting"),("Samson","Bolton","Justo Proin Non Ltd"),("Cedric","Mccray","Sed Et Ltd"),
    ("Audrey","Chan","Luctus Vulputate Nisi LLP"),("Avye","Buck","Imperdiet Foundation"),("Pearl","Carney","Euismod Ac Associates"),("Indigo","Colon","Sed Company"),("Taylor","Howell","Mauris Elit Company"),("Nola","Stewart","Phasellus Consulting"),("Tana","Santana","Sit Ltd"),("Myra","Barry","Erat Volutpat Nulla Associates"),("Anastasia","Holder","Tristique PC"),("Kyla","Waters","Eget Dictum Associates");
    
INSERT INTO `estudiantes`
(nombre, apellido, curso, comision)
VALUES
("Joy","Hinton","Augue Eu Associates", 2000),("Kameko","Beck","Sapien Imperdiet Ornare Corp.", 2000),("Bree","Wiggins","Fermentum Risus Institute",2000),("Jillian","Becker","Sed Pede LLC",2000),("Unity","Nieves","Libero Associates",2000);
# instruccion delete
DELETE FROM `estudiantes` 
WHERE
    id_estudiantes = 3
    AND /* operedor y */
    (nombre = "Solomon"
    OR /* operador o*/
    nombre = "Zeus");
    
#instruccion update
UPDATE `estudiantes`
SET 
	comision = 9000
WHERE
	curso = "Java Full Stack";
    
UPDATE `estudiantes`
SET 
	regular = 0
WHERE
	id_estudiantes = 8;
    
#instruccion select
SELECT 
    nombre AS name, apellido AS lastname
FROM
    `estudiantes`
WHERE
    apellido LIKE '%';
    
SELECT 
    *
FROM
    `estudiantes`
ORDER BY apellido DESC
LIMIT 5
;
SELECT 
 COUNT(*) AS cant_estudiantes, regular
 FROM
 `estudiantes`
GROUP BY regular;

SELECT * FROM `estudiantes`
ORDER BY projects;
	
    
    