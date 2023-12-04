//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	definir i,n,imod2,acumimp como real;
	i=0;
	n=0;
	imod2=0;
	acumimp=0;
	escribir "Ingrese Numero"
	Leer n;
	Para i<-1 Hasta N con Paso 2 Hacer
		si imod2!=0 entonces
			escribir "es par";
		SiNo
			acumimp<-acumimp+i;
		FinSi
	FinPara
	escribir " La sumatoria de impares menores o iguales que n es:",acumimp;
FinProceso
