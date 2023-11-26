//28 Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.


Proceso Ejercicio28
	
	numero = 100
	num = 0;
	suma = 0;
	bandera = Verdadero
	
	Repetir
		si num<= numero entonces
			suma = suma + num
			num = num + 1
		SiNo
			bandera = Falso
		FinSi
	Hasta Que bandera = Falso
	Escribir suma
FinProceso
