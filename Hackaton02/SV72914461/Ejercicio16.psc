//16 Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.

Proceso Ejercicio16
	
	numero = 0
	Escribir "Ingrese un numero:"
	Leer numero
	
	Dimension  arreglo[7]
	arreglo[1] = "Lunes"
	arreglo[2] = "Martes"
	arreglo[3] = "Miercoles"
	arreglo[4] = "Jueves"
	arreglo[5] = "Viernes"
	arreglo[6] = "Sabado"
	arreglo[7] = "Domingo"
	
	si numero < 8 Entonces
		Escribir arreglo[numero]
	sino
		si numero % 7 = 0 Entonces
			Escribir arreglo[7]
		SiNo
			Escribir arreglo[numero % 7]
			
		FinSi
	FinSi
FinProceso