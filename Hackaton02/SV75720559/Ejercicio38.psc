//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso  Ejercicio38
    Definir num, sumaDivisores como Entero
	
    Escribir "Ingrese un numero para visualizar si es un numero perfecto: "
    Leer num
	
    sumaDivisores <- 0
	
    Para i <- 1 hasta num/2 Con Paso 1 Hacer
		Si num % i = 0 entonces
            sumaDivisores <- sumaDivisores + i
        Fin Si
    Fin Para
	
    Si sumaDivisores = num entonces
        Escribir "El numero ", num, " es un numero perfecto."
    Sino
        Escribir "El numero ", num, " no es un numero perfecto."
    Fin Si
FinProceso

