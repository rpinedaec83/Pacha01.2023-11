// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
// $10. Si se compran unidades separadas hasta 9.	
// $8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a 
//vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio_18
	Definir cantidad, precio_unitario, precio_total, ganancia Como Real;
	
	Escribir "Ingrese la cantidad de CDs a comprar:";
	Leer cantidad;
	
	Si cantidad >= 500 Entonces
		precio_unitario = 6;
	Sino
		Si cantidad >= 100 Entonces
			precio_unitario = 7;
		Sino
			Si cantidad >= 10 Entonces
				precio_unitario = 8;
			Sino
				precio_unitario = 10;
			FinSi
		FinSi
	FinSi
	
	precio_total = cantidad * precio_unitario;
	ganancia = precio_total * 0.0825;
	
	Escribir "Precio total: $", precio_total;
	Escribir "Ganancia del vendedor: $", ganancia;
FinProceso
