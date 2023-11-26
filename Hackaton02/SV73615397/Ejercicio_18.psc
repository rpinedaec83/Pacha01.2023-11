Proceso TiendaCD
	Definir numeroCd Como Entero
	Definir totalPago Como Real
	totalPago<-0
	Mientras numeroCd<=0 Hacer
		Escribir "Ingrese la cantida de CD´s a separar:"
		Leer numeroCd
	FinMientras	
	Si numeroCd>=1 y numeroCd<10 Entonces
		totalPago = (numeroCd * 10)
	SiNo
		Si numeroCd>=10 y numeroCd<100
			totalPago = (numeroCd * 8)
		SiNo
			Si numeroCd>=100 y numeroCd<500
				totalPago = (numeroCd * 7)
			SiNo
				totalPago = (numeroCd * 6)
			FinSi
		FinSi
	FinSi
	Escribir "El total a pagar es de S/",totalPago*1.0825,", ganando S/",totalPago*0.0825
FinProceso
