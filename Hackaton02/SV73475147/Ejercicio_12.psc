// Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor
Proceso Ejercicio_12
	Definir num1, num2, mayor Como Real
	
	Escribir "Ingrese el primer número:"
	Leer num1
	Escribir "Ingrese el segundo número:"
	Leer num2
	
	mayor <- num1
	
	Si num2 > mayor Entonces
		mayor <- num2
	SiNo
		mayor <- num1
	FinSi
	
	Escribir "El número mayor es: ", mayor
FinProceso