//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el 
//programa al ingresar un número negativo.
Proceso ejercicio27
	contador = 0
	acumulador = 0
	promedio = 0
	Repetir
		Escribir "Ingrese un número"
		Leer numero1
		Si numero1 >0 o numero1==0 Entonces
			contador = contador + 1
			acumulador = acumulador + numero1
			promedio = acumulador/contador
		FinSi
	Hasta Que numero1<0
	Escribir "El promedio es: ", promedio
	Escribir "Cantidad de números ingresados es: ", contador
FinProceso
