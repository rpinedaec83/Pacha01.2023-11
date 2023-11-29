//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte número
Proceso Ejercicio35
	
	definir i,t,ns,may,men Como Entero
	may<-0
	men<-0
	i<-1
	escribir " Ingrese la cantidad de numeros"
	leer ns
	mientras (i<=ns) Hacer
		escribir " Ingrese el numero:",i
		Leer t
		si(i==1) Entonces
			may<-t
			men<-t
		sino
			si(t>may) entonces
				may<-t
				
			FinSi
			si(t<men) Entonces
				men<-t
			FinSi
		FinSi
		i<-i+1
	FinMientras
	escribir "El numero menor ingresado es:",men
	escribir "El numero mayor ingresado es:",may
FinProceso
