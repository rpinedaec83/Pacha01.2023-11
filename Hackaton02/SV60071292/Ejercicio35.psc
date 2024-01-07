//Ejercicio35
//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	
Algoritmo MayorMenor
	Definir number, mayorcito, menorcito como Entero 
	
	mayorcito <- -9999
	menorcito <- 9999
	
	Para i <- 1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese el numero : "
		Leer number 
		
		si number > mayorcito Entonces
			mayorcito <- number
		FinSi
		
		si number < menorcito Entonces
			menorcito <- number
		FinSi
		
	FinPara
	
	Escribir "El numero mayor es: ", mayorcito 
	Escribir "El numero menor es: ", menorcito 
	
FinAlgoritmo
	