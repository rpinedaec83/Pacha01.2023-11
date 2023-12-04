//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso ejercicio23
	definir n , pares , impares Como Entero
	Escribir  "ingresa el totalde numeros"
	Leer n
	pares <- 0;
	impares <- 0;
	mientras n > 0 Hacer
		si n mod 2 = 0 
			Entonces
			pares <- pares + n
		SiNo
			impares <- impares +n
		FinSi
		n <- n-1
	FinMientras
	Escribir "la suma de los impares es: " impares
FinProceso
