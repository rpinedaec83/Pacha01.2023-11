//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Definir num1, num2, num3, mayor_n Como Entero
		
	Escribir "Ingrese el primer numero: "
	Leer num1
		
	Escribir "Ingrese el segundo numero: "
	Leer num2
		
	Escribir "Ingrese el tercer numero: "
	Leer num3
		
	mayor_n = num1 
	Si num2 > mayor_n Entonces
		mayor_n = num2
	Fin Si
	Si num3 > mayor_n Entonces
		mayor_n = num3
	Fin Si		
	
	Escribir "El numero mayor es: ", mayor_n
		
FinProceso
