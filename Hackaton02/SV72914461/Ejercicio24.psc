//24 Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso Ejercicio24
	numero = 1000
	num = 0;
	suma = 0;
	Mientras num <= numero Hacer
		si num%2 = 0 Entonces
			suma = suma + num
		FinSi
		num = num + 1
	FinMientras
	Escribir suma;
FinProceso
