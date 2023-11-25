//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso Ejercicio3
	divisible = 10
	numero = 0
	bandera = Verdadero
	Escribir "Ingrese un numero"
	Leer numero
	
	numero = (numero%divisible)
	
	si numero = 4 Entonces
		Escribir "El numero termina en 4"
		bandera = Falso
	SiNo
		Escribir "El numero no termina en 4"
		bandera = Falso
	FinSi

FinProceso
