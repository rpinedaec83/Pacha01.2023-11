// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y 
//distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
//(supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un 
//algoritmo en Pseint que dado un número de CDs a vender calcule el precio 
//total para el cliente y la ganancia para el vendedor.
Proceso ejercicio18
	Escribir "ingresar cantidad de CD a vender"
	leer cantidad
	precio_unidad = 10
	si(cantidad <=9)
		Entonces
		precio_unidad = 10
	FinSi
	si(cantidad >= 10 y cantidad <= 99)
		Entonces
		precio_unidad = 8
	FinSi
	si(cantidad >= 100 y cantidad <= 499)
		Entonces
		precio_unidad = 7
	FinSi
	si(cantidad >= 500)
		Entonces
		precio_unidad = 6
	FinSi
	precio_total = cantidad * precio_unidad
	ganancia = precio_total * 0.0825
	Escribir "el precio total para el cliente es " precio_total
	Escribir "la ganancia para el vendedor es " ganancia
FinProceso
