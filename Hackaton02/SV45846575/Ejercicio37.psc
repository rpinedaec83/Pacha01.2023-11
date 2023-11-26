//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides
Algoritmo Ejercicio37
	definir num1,num2,resto Como Entero
	escribir " Ingrese el primer numero:"
	leer num1
	escribir " Ingrese el segundo numero:"
	leer num2
	
	mientras num2 <> 0 Hacer
		resto<-num1 %num2
		num1<-num2
		num2<-resto
		
	FinMientras
	escribir " EL M.C.D es: ", num1
FinProceso
