Proceso TerminaEnCuatro
	Definir n,ultimaCifra Como Entero
	Mientras n<=0 Hacer
		Escribir "Ingrese un número:"
		leer n
	FinMientras
	ultimaCifra = n %10
	Si ultimaCifra = 4 Entonces
		Escribir "El número ",n," termina en 4"
	SiNo
		Escribir "El número ",n," NO termina en 4"
	FinSi
FinProceso
