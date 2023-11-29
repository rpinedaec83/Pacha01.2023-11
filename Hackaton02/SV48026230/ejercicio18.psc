
Proceso ejercicio18
	Definir numeroUnidades, precioTotal, gananciaVendedor Como Real
	
	Escribir "Número de CDs a vender:"
	Leer numeroUnidades
	
	Si numeroUnidades >= 0 y numeroUnidades <= 9 Entonces
		precioTotal <- numeroUnidades * 10
	Sino
		Si numeroUnidades >= 10 y numeroUnidades <= 99 Entonces
			precioTotal <- numeroUnidades * 8
		Sino
			Si numeroUnidades >= 100 y numeroUnidades <= 499 Entonces
				precioTotal <- numeroUnidades * 7
			Sino
				Si numeroUnidades >= 500 Entonces
					precioTotal <- numeroUnidades * 6
				Sino
					Escribir "Ingresa una cantidad válida"
				FinSi
			FinSi
		FinSi
	FinSi
	
	gananciaVendedor <- precioTotal * 0.0825
	
	Escribir "El precio total para el cliente es: ", precioTotal
	Escribir "La ganancia para el vendedor es: ", gananciaVendedor
FinProceso