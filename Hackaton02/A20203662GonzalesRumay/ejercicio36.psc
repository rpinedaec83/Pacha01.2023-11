// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36
	Definir cantidad, i, a, b, c Como Entero
	
    Escribir "Ingrese la cantidad de t�rminos de la serie de Fibonacci a calcular:"
    Leer cantidad
	
    a = 0
    b = 1
	
    Escribir "Serie de Fibonacci con ", cantidad, " t�rminos:"
	
    Escribir a
    Escribir b
	
    Para i = 3 Hasta cantidad Hacer
        c = a + b
        Escribir c
		
        a = b
        b = c
    FinPara
FinProceso