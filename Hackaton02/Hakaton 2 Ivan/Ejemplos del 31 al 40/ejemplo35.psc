Proceso ejemplo35
	
	numero_mayor = (leer_numero)
	numero_menor = (leer_numero)
	
	para numero desde 2 hasta 20
		escribir "Ingrese un n�mero: "
		leer numero
		si (numero > numero_mayor)
			numero_mayor = numero
		SiNo
			si (numero < numero_menor)
				numero_menor = numero
			FinSi
		FinSi
	FinPara
	
	escribir "El n�mero mayor es: ", numero_mayor
	escribir "El n�mero menor es: ", numero_menor

FinProceso
