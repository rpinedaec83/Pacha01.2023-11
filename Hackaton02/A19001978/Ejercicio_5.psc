// 5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una 
// promoción de descuento para vender al mayor, esta dependerá del número de 
// zapatos que se compren. Si son más de diez, se les dará un 10% de descuento 
// sobre el total de la compra; si el número de zapatos es mayor de veinte pero 
// menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos 
// se otorgará un 40% de descuento. El precio de cada zapato es de $80.
Proceso Ejercicio_5
	
	Escribir "Ingrese le total de zapatos comprados: "
	Leer cantidadZapatos
	
	descuento = 0
	precioUnidad = 80
	totalCompra = cantidadZapatos * precioUnidad
	precioFinal = 0
	
	Si cantidadZapatos >= 30
		descuento = totalCompra * 0.4
	SiNo
		Si cantidadZapatos >= 20
			descuento = totalCompra * 0.2
		SiNo
			Si cantidadZapatos >= 10
				descuento = totalCompra * 0.1
			FinSi
		FinSi
	FinSi
	
	precioFinal = totalCompra - descuento
	
	Escribir "Cantidad de zapatos: ", cantidadZapatos
	Escribir "Precio por unidad: ", precioUnidad
	Escribir "Precio Total: ", totalCompra
	Escribir "Descuento: ", descuento
	Escribir "Precio Final: ", precioFinal
	
FinProceso
