//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso ejercicio36
	Definir n,x,j, z Como Entero
	n = 0
	x = 0
	j = 1
	Escribir "Ingrese el n?mero de t?rminos de la serie de Fibonacci:"
	Leer n
	Escribir "Los primeros ", n," t?rminos de la serie de Fibonacci son:"
	Para i = 1 Hasta n
		Escribir x
		z = x + j
		x = j
		j = z
	Fin Para
FinProceso