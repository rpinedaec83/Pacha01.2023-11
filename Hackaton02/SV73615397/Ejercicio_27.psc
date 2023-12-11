Proceso MediaDeLista
	Definir n,contador,suma Como Entero
	n<-1
	Escribir "El programa termina cuando se ingresa un Cero o negativo"
	Mientras n>0 Hacer
		Escribir "Ingrese el N°",contador+1
		Leer n
		Si n>0 Entonces
			suma = suma + n
			contador = contador+1
		FinSi
	FinMientras
	Escribir "La media de los números ingresados es: ",suma/contador
FinProceso
