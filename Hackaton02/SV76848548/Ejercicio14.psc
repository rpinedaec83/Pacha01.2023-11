//14 Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

Proceso Ejercicio14
	
	numero = 0
	Escribir "Ingrese un numero del 1 a 9: "
	Leer numero
	
	si	numero > 0 y numero < 10 Entonces
		contador = 1
		residuo = 0;
		
		Mientras contador <= numero Hacer
			Si(numero%contador == 0) Entonces
				residuo = residuo + 1
			FinSi
			contador = contador + 1
		FinMientras
		
		Si residuo = 2 Entonces
			Escribir "El numero ingresado es un numero primo";
		SiNo
			Escribir "El numero ingresado no es un numero primo";
		FinSi  
	SiNo
		Escribir "El numero ingresado no esta dentro del rango de 1 a 9"
	FinSi
FinProceso
