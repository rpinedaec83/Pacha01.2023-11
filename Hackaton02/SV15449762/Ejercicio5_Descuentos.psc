Proceso Descuentos
	Definir Cantidad como entero	
	Definir ValorVenta, Descuento Como Real
	Escribir "Ingrese cantidad de zapatos a vender"
	Leer Cantidad
	Si Cantidad > 0 y Cantidad <= 10 Entonces
		ValorVenta = 80 * Cantidad
	FinSi
		Si Cantidad >= 11 y Cantidad <= 20 Entonces
		ValorVenta = 80 * 0.9 * Cantidad
	FinSi
	Si Cantidad >= 21 y Cantidad <= 30 Entonces
		ValorVenta = 80 * 0.8 * Cantidad
	FinSi
	Si Cantidad > 30 Entonces
		ValorVenta = 80 * 0.6 * Cantidad
	FinSi
	Escribir " El Precio a pagar por " Cantidad " pares de zapatos es " ValorVenta " soles "
FinProceso