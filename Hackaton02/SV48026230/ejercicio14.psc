Proceso ejercicio14
	Escribir "Ingrese un numero"
	Leer a
	
	contar<- 0
	Para i<-1 Hasta a Hacer
		si a%i=0 Entonces
			contar<-contar+1
		FinSi
	FinPara
	Si contar=2 Entonces
		Escribir a, " Es un numero primo "
	SiNo
		Escribir a, " No es un numero primo "
	FinSi
FinProceso
