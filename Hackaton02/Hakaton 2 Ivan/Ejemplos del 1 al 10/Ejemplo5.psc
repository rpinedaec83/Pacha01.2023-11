Proceso Ejemplo5

	// entero n�mero_zapatos, precio_zapato, subtotal, descuento, total
	escribir "Ingrese el n�mero de zapatos: "
	leer numero_zapatos
	subtotal = n�mero_zapatos * precio_zapato
	
	Si(n�mero_zapatos >30)
			descuento = 0.4 * subtotal
		SiNo
			si (n�mero_zapatos >20)
				descuento = 0.2 * subtotal
			SiNo
				descuento = 0.1 * subtotal 
			FinSi
			
		FinSi
		
		total = subtotal - descuento
		
		Escribir "El total a pagar es:", total
FinProceso




