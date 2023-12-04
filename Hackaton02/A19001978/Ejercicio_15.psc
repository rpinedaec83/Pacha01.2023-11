//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio_15
	
	Escribir "Ingrese el valor 1 o 2 según la operación que desea hacer:"
	Escribir "1. Convertir centimetros a pulgadas"
	Escribir "2. Convertidr libras a kilogramos"
	Leer tipoOperacion
	
	Escribir "Ingrese el valor que desea convertir: "
	Leer valorIngresado
	
	valorConvertido = 0
	
	Segun tipoOperacion Hacer
		1:
			valorConvertido = valorIngresado / 2.538709
			Escribir "El valor ingresado es: ", valorIngresado, "cm"
			Escribir "El valor convertido es: ", valorConvertido, "¨"
		2:
			valorConvertido = valorIngresado / 2.20462262
			Escribir "El valor ingresado es: ", valorIngresado, "cm"
			Escribir "El valor convertido es: ", valorConvertido, "¨"
		De Otro Modo:
			Escribir "Valor ingresado invalido"
	Fin Segun
	
	
FinProceso
