Proceso Fibonacci
	Definir t1,t2,next,n Como Entero
	t1<-0
	t2<-1
	Escribir "Ingrese un número: "
	Leer n
	Escribir t1
	Escribir t2
	Para i<-1 Hasta n-2 Hacer
		next = t1 + t2
		Escribir next
		t1 = t2
		t2 = next
	FinPara
FinProceso
