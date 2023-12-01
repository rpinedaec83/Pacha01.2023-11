//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Algoritmo  mayormenor
	definir number,mayorcito,menorcito Como entero
	
	mayor <- -9999
	menorcito <- 9999
	
	para i<- 1 hasta 20 con  paso 1 hacer 
		escribir "ingrese el numero:" i
		leer number
		
		si number > mayorcito entonces 
			mayorcito  <- number
		FinSi
		
		si number < menorcito Entonces
			menorcito <- number
		FinSi 
		
	FinPara
	escribir"el numero mayor es : ", mayorcito
	escribir "el numero menor es:", menorcito
	
FinAlgoritmo