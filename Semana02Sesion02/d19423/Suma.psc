Proceso Calculadora
	
	escribir("Escribe el primer numero")
	Leer primerNumero
	Escribir("Escribe el Segundo numero")
	Leer segundoNumero
	
	escribir("Presiona 1 para sumar, presiona 2 para restar, presiona 3 para multiplicar o presiona 4 para dividir")
	Leer operacion
	resultado = 0
	
	si operacion = "1" Entonces
		resultado = primerNumero + segundoNumero
	SiNo
		si operacion = "2" Entonces
			resultado = primerNumero - segundoNumero
		SiNo
			si operacion = "3" Entonces
				resultado = primerNumero * segundoNumero
			SiNo
				si operacion = "4" Entonces
					resultado = primerNumero / segundoNumero
				FinSi
				

			FinSi
			
		FinSi
	FinSi
	
//	si operacion = "2" Entonces
//		resultado = primerNumero - segundoNumero
//	FinSi
	
	
	escribir "el resultado es ", resultado
	
	
	
FinProceso
