Proceso Factorial
	
	Definir num, fac, var Como Entero
	Leer num
	
	Si num < 0 Entonces
		Escribir "El número debe ser POSITIVO"
	SiNo
		var = 1
		fac = 1
		Mientras var <= num Hacer
			fac = fac * var
			var = var + 1
		FinMientras
		Escribir "El factorial de " num " es " fac
	FinSi
	
FinProceso
