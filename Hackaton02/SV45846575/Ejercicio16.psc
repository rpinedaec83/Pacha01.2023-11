//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	
	Definir dia Como Entero
	Escribir sin saltar " Ingresea dia [1-7]:";
	Leer dia;
	segun (dia) Hacer
		1: escribir "Lunes";
		2: escribir "Martes";
		3:escribir "Miercoles";
		4: escribir "Jueves";
		5:escribir "Viernes";
		6:escribir "Sabado";
		7:escribir "Domingo";
		de otro modo:
			escribir "Dia Invalido";
	FinSegun
	
FinProceso
