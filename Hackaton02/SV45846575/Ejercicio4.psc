//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio4
	definir n1,n2,n3,s,t,p como entero;
	
	escribir sin saltar "numero 01: ";
	leer n1;
	escribir sin saltar "numero 02: ";
	leer n2
	escribir sin saltar "numero03: ";
	leer n3
	
	
	
	
	
	si (n1>n2) y (n1>n3) entonces
		p<-n1;
		si(n2>n3) Entonces
			s<-n2;
			t<-n3;
		SiNo
			s<-n3;
			t<-n2;
		FinSi
	SiNo
		si (n2>n3) Entonces
			p<-n2;
			si(n1>n3) Entonces
				s<-n1;
				t<-n3;
			SiNo
				s<-n3;
				t<-n1;
			FinSi
		sino
			p<-n3;
			si(n1>n2) Entonces
				s<-n1;
				t<-n2;
			SiNo
				s<-n2;
				s<-n1;
			FinSi
		FinSi
	FinSi
	Escribir " Ordenado en forma Descendente: ",p,"-",s,"-",t;
	Escribir " Ordenado en forma Ascendente : ",t,"-",s,"-",p;
FinProceso
