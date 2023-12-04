// Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo
Proceso Ejercicio_17
	Definir horas, minutos, segundos Como Entero;
	
	Escribir "Ingrese las horas:";
	Leer horas;
	Escribir "Ingrese los minutos:";
	Leer minutos;
	Escribir "Ingrese los segundos:";
	Leer segundos;
	
	segundos = segundos + 1;
	Si segundos > 59 Entonces
		segundos = 0;
		minutos = minutos + 1;
		Si minutos > 59 Entonces
			minutos = 0;
			horas = horas + 1;
			Si horas > 23 Entonces
				horas = 0;
			FinSi
		FinSi
	FinSi
	
	Escribir "La hora un segundo después será: ", horas, ":", minutos, ":", segundos;

FinProceso
