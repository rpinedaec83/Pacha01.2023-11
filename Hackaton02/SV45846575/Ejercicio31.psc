//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
	definir n,np, nimp Como Entero
	definir nro,sum1,sum2,med1,med2 Como Real
	n=0;
	np=0;
	nimp=0;
	
	sum1=0;
	sum2=0;
	Repetir
		escribir "Ingrese el numero"
		leer nro;
		si nro mod 2= 0 Entonces
			sum1=sum1 +nro;
			np=np+1;
		SiNo
			sum2 =sum2 + nro;
			nimp=nimp +1;
		FinSi
		n=n+1;
	hasta que n = 10
	med1=sum1 / np;
	med2= sum2 / nimp;
	Imprimir" Media numeros pares: ",med1;
	Imprimir " Media numeros impares: ", med2;	
FinProceso
