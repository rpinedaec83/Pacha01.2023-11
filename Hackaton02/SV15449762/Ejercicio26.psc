Proceso Ejercicio26
	
	Escribir "Ingrese el numerador"
	Leer numerador
	Escribir "Ingrese el denominador"
	Leer denominador
	
	residuo <- 0
	cociente <- 0
	
	Repetir
		numerador <- numerador - denominador
		residuo <- numerador
		cociente <- cociente + 1
	Hasta Que numerador < denominador
	
	Escribir "El cociente es " cociente " y el residuo es " residuo
	
FinProceso
