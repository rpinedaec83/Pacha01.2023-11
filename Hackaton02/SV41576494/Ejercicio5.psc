Proceso descuento_zapato
	Definir cant,descto como real;
	Escribir Sin Saltar "Ingrese la cantidad de Zapatos que desea comprar: "
	Leer cant;
	Si (cant > 10) y (cant < 21)  Entonces
		descto <- cant*80*0.10;
		Escribir "Descuento de : $. ", descto;
	SiNo
		Si (cant > 20) y (cant < 30) Entonces
			descto <- cant*80*0.20;
			Escribir "Descuento de : $. ", descto;
		SiNo
			Si (cant > 30) Entonces
				descto <- cant*80*0.40;
				Escribir "Descuento de : $. ", descto;
			SiNo
				Escribir "No Hay Descuento"			
			FinSi
		FinSi
	FinSi
FinProceso
