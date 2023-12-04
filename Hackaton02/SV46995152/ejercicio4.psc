//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso ejercicio4
	escribir "primerNumero"
	leer primerNumero
	escribir "segundoNumero"
	leer segundoNumero
	escribir "tercerNumero"
	leer tercerNumero
	si(primerNumero < segundoNumero y primerNumero < tercerNumero)
		Entonces
		minimo = primerNumero
		si(segundoNumero < tercerNumero)
			Entonces
			medio = segundoNumero
			maximo = tercerNumero
		SiNo
			medio = tercerNumero
			maximo = segundoNumero
		FinSi
	sino
		si(segundoNumero < primerNumero y segundoNumero < tercerNumero)
			Entonces
			minimo = segundoNumero
			si(primerNumero < tercerNumero)
				Entonces
				medio = primerNumero
				maximo = tercerNumero
			sino
				medio = tercerNumero
				maximo = primerNumero
			FinSi
		SiNo
			minimo = tercerNumero
			si( primerNumero < segundoNumero)
				medio = primerNumero
				maximo = segundoNumero
			SiNo
				medio = segundoNumero
				maximo = primerNumero
			FinSi
		FinSi
	FinSi
	
	Escribir  "los numeros odenados de menos a mayor son:"
	Escribir  minimo
	Escribir  medio
	Escribir  maximo
FinProceso
