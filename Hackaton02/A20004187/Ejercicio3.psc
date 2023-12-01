//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Ejercicio3
	Definir num, term Como Entero
	Escribir "Ingrese un número"
	Leer num

	term <- num - trunc(num/10)*10

Si term == 4 o term == -4 Entonces
	Escribir "El número termina en 4"
SiNo
	Escribir "El número no termina en 4"
Fin Si
FinProceso
