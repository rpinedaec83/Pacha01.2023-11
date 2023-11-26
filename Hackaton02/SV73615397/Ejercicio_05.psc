Proceso TiendaZapatos
	Definir n,totalPagar,descuento Como Real
	Escribir "Ingrese el número de zapatos a comprar:"
	leer n
	si n>10 Entonces
		descuento=10
		totalPagar = (n * 8)*9
		si n>20 y n<30 Entonces
			descuento=20
			totalPagar = (n * 8)*8
			SiNo
			descuento = 40
			totalPagar = (n * 8)*6
		FinSi		
	FinSi
	Escribir "El total a pagar es de s/",totalPagar," con un desuento del ",descuento,"%"
FinProceso
