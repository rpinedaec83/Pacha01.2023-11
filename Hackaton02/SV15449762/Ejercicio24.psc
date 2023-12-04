Proceso Suma1000pares
	
	Definir num, var, res Como Entero
	
	num = 1
	var = 1
	res = 0
	
	Mientras num <= 1000 Hacer
		si var % 2 = 0 Entonces
			Escribir var
			res = res + var
			num = num + 1
		FinSi
		var = var + 1
	FinMientras
	
	Escribir "La suma de los primeros 1000 números pares es " res
	
FinProceso
