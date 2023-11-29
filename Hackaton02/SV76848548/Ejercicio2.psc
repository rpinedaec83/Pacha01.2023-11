//2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

Proceso Ejercicio2
	Definir inpuit Como Real;
	divisible = 1
	numero = 0
	Escribir "Ingrese un numero"
	Leer numero
	
	value = (numero%divisible)

	SI value = 0 Entonces
		si numero < 0 entonces
			Escribir "El numero entero y es negativo"
		SiNo
			Escribir "El numero entero y es positivo"
		FinSi
	SiNo
		si numero < 0 entonces
			Escribir "El numero no es entero y es negativo"
		SiNo
			Escribir "El numero no es entero y es positivo"
		FinSi
	FinSi
FinProceso