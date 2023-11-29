//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso ejercicio24
	Definir  n, suma Como Entero
	suma = 0;
	para n = 1 Hasta 1000 Hacer
		si n mod 2 = 0 
			Entonces
			suma = suma + n;
		FinSi
	FinPara
	Escribir "suma de numeros pares es: " suma
FinProceso