//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
Proceso Ejercicio29
	definir total_suma, cantidad, i como entero
	escribir " Cuantos numeros desea sumar?"
	leer cantidad
	i<- 1
	mientras i<= cantidad Hacer
		escribir "Ingrese el numero: ", i
		leer n
		total_suma<- total_suma +n
		i<- i+1
	FinMientras
	escribir " La suma de los numeros es: ",total_suma
FinProceso
