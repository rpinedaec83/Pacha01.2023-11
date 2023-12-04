//23 Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n

Proceso Ejercicio23
	numero = 0
	Escribir "Ingrese un numero";
	Leer numero;
	num = 0;
	suma = 0;
	Mientras num <= numero Hacer
		si num%2 <> 0 Entonces
			suma = suma + num
		FinSi
		num = num + 1
	FinMientras
	Escribir suma;
FinProceso
