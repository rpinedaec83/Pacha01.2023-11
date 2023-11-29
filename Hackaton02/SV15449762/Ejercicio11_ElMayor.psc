Proceso ElMayor
	Definir num1, num2, num3, a, b, c Como Real
	
	Escribir Sin Saltar "Escribe el primer número: "
	Leer num1
	Escribir Sin Saltar "Escribe el segundo número: "
	Leer num2
	Escribir Sin Saltar "Escribe el tercer Número: "
	Leer num3
	
	Si (num1 > num2) y (num1 > num3) Entonces
		a <- num1
		Si (num2 > num3) Entonces
			b <- num2
			c <- num3
		SiNo
			b <- num3
			c <- num2
		FinSi
	SiNo
		Si (num2 > num3) Entonces
			a <- num2
			Si (num1 > num3) Entonces
				b <- num1
				c <- num3
			SiNo
				b <- num3
				c <- num1
			FinSi
		SiNo
			a <- num3
			Si (num1 > num2) Entonces
				b <- num1
				c <- num2
			SiNo
				b <- num2
				c <- num1
			FinSi
		FinSi
	FinSi
	
	Escribir "Entre los números " num1 "," num2 " y " num3 " el mayor es " a
	
FinProceso
