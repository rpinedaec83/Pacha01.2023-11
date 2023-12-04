//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
Proceso Ejercicio18
	Imprimir "Cuantos CDs desea comprar: "
	Leer cantidad
	
	pt = 0 
	pCliente = 0 
	ct = 0 
	gv = 0 
	
	si cantidad <= 9 Entonces
		p = 10
	sino
		si cantidad >= 10 y cantidad <= 99 Entonces
			p = 8
		SiNo
			si cantidad >= 100 y cantidad <= 499 Entonces
				p = 7
			SiNo
				p = 6
			FinSi
		FinSi
	FinSi
	

	pt = (cantidad * p) + (1.25 * cantidad)
	pCliente = pt
	ct = cantidad * p
	gv = 0.0825 * ct
	
	
	Imprimir "Costo total ",ct
	Imprimir "Ganancia para el vendedor ",gv
FinProceso
