Proceso Contar3digitos
	Definir num Como entero
		Escribir "Ingrese el número"
	Leer num
	Si num < 0
		num = num*(-1)
	FinSi
		Si num >= 100 y num <= 999
		Escribir "El número " num " tiene 3 dígitos"
	SiNo
		Escribir "El número " num " NO tiene 3 dígitos"
	FinSi
FinProceso