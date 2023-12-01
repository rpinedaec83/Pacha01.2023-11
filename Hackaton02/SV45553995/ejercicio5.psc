//5. Hacer un algoritmo en Pseint para una tienda de zapatos que 
//tiene una promoción de descuento para vender al mayor, esta 
//dependerá del número de zapatos que se compren. Si son más de 
//diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, 
//se le otorga un 20% de descuento; y si son más treinta zapatos se 
//otorgará un 40% de descuento. El precio de cada zapato es de $80.
proceso tiendadezapatos
	escribir "ingrese numero de zapatos"
	leer numerodezapatos
	preciototal = 0
	preciozapato= 80
	si numerodezapatos >10 Entonces 
		preciototal=preciozapato*numerodezapatos 
		descuento =preciototal*0.1 
		preciototalcondescuento=preciototal-descuento
	Finsi
	si numerodezapatos >20 y numerodezapatos <30 Entonces 
		preciototal=preciozapato*numerodezapatos 
		descuento =preciototal*0.2
		preciototalcondescuento=preciototal-descuento
	FinSi
	si numerodezapatos >30 entonces 
		preciototal=preciozapato*numerodezapatos 
		descuento =preciototal*0.4
		preciototalcondescuento=preciototal-descuento
	FinSi
	Escribir "el precio total de los zapatos es: ",preciototal
	Escribir "el descuento es: ",descuento
	escribir "el precio total con descuento es: ",preciototalcondescuento	
Finproceso
