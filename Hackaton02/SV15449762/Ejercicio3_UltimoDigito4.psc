Proceso NumeroFin4
	Definir num, ultimodigito Como entero
	Escribir "Ingrese el número"
	Leer num
	Si num < 0
		num = num*(-1)
	FinSi
	Si num >= 0
		ultimodigito = num - trunc(num/10)*10
	FinSi
	Si ultimodigito = 4
		Escribir "El " num " termina en 4"
	SiNo
		Escribir "El " num " NO termina en 4"
	FinSi
FinProceso