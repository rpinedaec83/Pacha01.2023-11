//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15

	Definir centimetros, pulgadas, libras, kilogramos Como Real
		
	Escribir "Ingrese la cantidad en centimetros a convertir a pulgadas: "
	Leer centimetros
		
	Escribir "Ingrese la cantidad en libras a convertir a kilogramos: "
	Leer libras
		
	pulgadas = centimetros / 2.54
	kilogramos = libras * 0.453592
		
	Escribir "El resultado de la conversion de centimetros a pulgadas es: ", pulgadas
	Escribir "El resultado de la conversion de libras a kilogramos es: ", kilogramos
		
FinProceso
