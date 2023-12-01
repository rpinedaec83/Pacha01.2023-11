// Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números
Proceso Ejercicio_35
	Definir number, mayorcito , menorcito Como Entero
	
	mayorcito <- -9999
	menorcito <- 9999
	
	Para  i <- 1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese el número ",i,": "
		leer number
		si	number > mayorcito Entonces
			mayorcito <- number
		FinSi
		si number < menorcito Entonces
			menorcito <- number
		FinSi
	FinPara
	
	Escribir "El número mayor es: ", mayorcito
	Escribir "El numero menor es: ", menorcito
FinProceso
