//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Ejercicio3
		Definir numero, ultimoDigito Como Entero
		
		Escribir "Ingrese un numero: "
		Leer numero
		
		ultimoDigito = numero Mod 10
		
		Si ultimoDigito = 4 Entonces
			Escribir "El numero acaba en 4."
		Sino
			Escribir "El numero no acaba en 4."
		Fin Si
FinProceso
