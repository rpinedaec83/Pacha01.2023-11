Proceso Suma
	
	escribir("escribir el primernumero")
	leer primernumero
	
	escribir("escribir el segundonumero")
	leer segundonumero
	
	escribir("Presiona 1 para sumar, presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion
	resultado = 0
	
Si operacion = "3" Entonces
resultado = primernumero * segundonumero
SiNo
si operacion = "4"
	resultado = primernumero / segundonumero
	Sino
	Si operacion = "1" Entonces
		resultado = primernumero +segundonumero
	Sino
		
		Si operacion = "2" Entonces
			resultado = primernumero - segundonumero
		FinSi
	FinSi
FinSi
		FinSi
	
	escribir " el resultado es ", resultado
	
FinProceso
