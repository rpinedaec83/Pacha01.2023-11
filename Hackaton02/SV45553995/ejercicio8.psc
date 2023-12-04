//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso NotaAlumno
	definir a,b,c como entero;
	definir d como real;
	escribir "ingrese nota 1 del alumno :";
	leer a ;
	escribir "ingrese nota 2 del alumno :";
	leer b ;
	escribir "ingrese nota 3 del alumno :";
	leer c ;
	e<-(a+b+c) /3;
	Escribir "el promedio es : ",e;
	si e>=12 Entonces
		escribir "usted aprobo";
	SiNo
		escribir "usted reprobo";
	FinSi
FinProceso

