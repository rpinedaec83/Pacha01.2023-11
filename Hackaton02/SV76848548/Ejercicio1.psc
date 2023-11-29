//1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Proceso Ejercicio1
	divisible = 100
	numero = 0
	Escribir "Ingrese un numero"
	Leer numero
	
	value = (numero/divisible)
	SI value >= 1 y value <10 Entonces
		Escribir "El numero ingresado tiene 3 digitos"
	SiNo
		si value < 1 entonces
			Escribir "El numero ingresado tiene menos de 3 digitos"
		SiNo
			Escribir "El numero ingresado tiene mas de 3 digitos"
		FinSi
	FinSi
FinProceso