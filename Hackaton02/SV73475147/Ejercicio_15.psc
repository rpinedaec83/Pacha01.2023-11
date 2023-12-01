// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos
Proceso Ejercicio_15
	Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    Escribir "Ingrese la longitud en centímetros:"
    Leer centimetros
    Escribir "Ingrese el peso en libras:"
    Leer libras
	
    pulgadas <- centimetros / 2.54
    kilogramos <- libras * 0.453592
	
    Escribir "La longitud en pulgadas es: ", pulgadas
    Escribir "El peso en kilogramos es: ", kilogramos
FinProceso
