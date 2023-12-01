//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso MayorDeTresNumeros
	Definir xx, yy, zz Como Entero;
	Escribir 'Ingrese tres números';
	Leer xx, yy, zz;
	Si (xx > yy y xx > zz) Entonces
		Escribir 'El mayor es: ', xx;
	SiNo
		si (yy > zz) entonces
			Escribir 'El mayor es: ', yy;
		SiNo
			Escribir 'El mayor es: ', zz;
		FinSi
	FinSi	
FinProceso