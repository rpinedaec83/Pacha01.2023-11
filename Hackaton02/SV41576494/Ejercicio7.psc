Proceso desc_tipo_membresia
//Calular el descuento según tipo de mebresiías
// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
// sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
	
	Definir memb Como entero;
	Definir desct, compra como real;
	desct <- 0;
	compra <- 0;
	Escribir Sin Saltar "Valor de Compra: S/."
	Leer compra;
	Escribir "Escoger el Tipo de Membresía" 
	Escribir "Escoge la opción: "
	Escribir "1 = Tipo A"
	Escribir "2 = Tipo B"
	Escribir "3 = Tipo C"
	Leer memb
	Escribir "";
	Si memb == 1 Entonces
		desct = compra*0.10;
	SiNo
			SI memb == 2 Entonces
				desct =compra*0.15;
			SiNo
				SI memb == C3 Entonces
					desct =compra*0.20;
			FinSi
		FinSi
	FinSi
	
	Escribir "Descuento : S/.",desct;
	Escribir "Pago Total : S/.",compra-desct;
		
FinProceso
