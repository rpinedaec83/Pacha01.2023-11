Proceso Ejercicio25
	Definir num, fact , i Como Entero
		
	Escribir "Ingrese el numero que se va a calcular su factorial : "
	Leer numero
		
	fact = 1
		
	Si num < 0 entonces
		Escribir "El factorial de números negativos no está definido."
	Sino
		Para i = 1 hasta num Hacer
			fact = fact * i
		Fin Para
		Escribir "El factorial de ", num, " es: ", fact
	Fin Si
	
FinProceso

