//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Algoritmo Ejercicio4
	Definir a, b, c  Como Entero
	Definir aux Como Entero
	
	Escribir "ingrese los valores de A , B Y C" 
	Leer  a, b, c
	Repetir
		Si a > b Entonces
			aux = a
			a = b
			b = aux
		FinSi
		
		Si b > c Entonces
			aux = b
			b = c
			c = aux
		FinSi
		
	Hasta Que a < b y b<c
	Escribir a
	Escribir b
	Escribir c

	
	
	
	
FinAlgoritmo
	