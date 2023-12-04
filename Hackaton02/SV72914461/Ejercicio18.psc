//18 Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

//$10. Si se compran unidades separadas hasta 9.
	
//$8. Si se compran entre 10 unidades hasta 99.
		
//$7. Entre 100 y 499 unidades.
		
//$6. Para mas de 500 unidades.
			
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs
//a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio18
	
	numero = 0
	Escribir "Ingrese canmtidad de disco que desea comprar:"
	Leer numero
	porcentaje = 8.25
	si numero <= 9 entonces
		costo = 10
		total = numero*costo
		ganancia = total*(porcentaje/100)
		escribir "El total vendido es ",total, " y la ganancia es ", (ganancia)
	SiNo 
		si numero >= 10 y numero <= 99 entonces
			costo = 8
			total = numero*costo
			ganancia = total*(porcentaje/100)
			escribir "El total vendido es ",total, " y la ganancia es ", (ganancia)
		SiNo
			si numero >= 100 y numero <=499 entonces
				costo = 7
				total = numero*costo
				ganancia = total*(porcentaje/100)
				escribir "El total vendido es ",total, " y la ganancia es ", (ganancia)
			SiNo
				si numero >= 500 entonces
					costo = 6
					total = numero*costo
					ganancia = total*(porcentaje/100)
					escribir "El total vendido es ",total, " y la ganancia es ", (ganancia)
				FinSi
			FinSi
		FinSi
		
	FinSi
FinProceso
