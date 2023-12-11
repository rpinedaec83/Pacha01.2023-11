//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total 
//de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Proceso Ejercicio5
	precio = 80
	numero = 0
	Escribir "Ingrese cantidad de zapados que desea comprar"
	Leer numero
	
	si numero > 10 y numero < 20 Entonces
		descuento = 10
		total_compra = precio*numero
		descontar = TRUNC((total_compra)*(descuento/100))
		Escribir "Para un total de ",numero," zapatos y con descuento del ",descuento,"% sale: ",(total_compra-descontar)
	SiNo
		si numero > 20 y numero <30 Entonces
			descuento = 20
			total_compra = precio*numero
			descontar = TRUNC((total_compra)*(descuento/100))
			Escribir "Para un total de ",numero," zapatos y con descuento del ",descuento,"% sale: ",(total_compra-descontar)
		SiNo
			si numero > 30 Entonces
				descuento = 40
				total_compra = precio*numero
				descontar = TRUNC((total_compra)*(descuento/100))
				Escribir "Para un total de ",numero," zapatos y con descuento del ",descuento,"% sale: ",(total_compra-descontar)
			SiNo
				descuento = 0
				total_compra = precio*numero
				descontar = TRUNC((total_compra)*(descuento/100))
				Escribir "Para un total de ",numero," zapatos y con descuento del ",descuento,"% sale: ",(total_compra-descontar)
				
			FinSi
		FinSi
	FinSi
FinProceso
