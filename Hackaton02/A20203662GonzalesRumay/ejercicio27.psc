// 27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de n�meros positivos, se debe acabar el programa al ingresar un n�mero negativo.
Proceso Ejercicio27
	Definir numero, suma, contador Como Real
	
    Escribir "Ingrese n�meros positivos para calcular la media."
    Escribir "Ingrese un n�mero negativo para finalizar."
	
    suma = 0
    contador = 0
	
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        Leer numero
    FinMientras
	
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los n�meros ingresados es: ", media
    Sino
        Escribir "No se ingresaron n�meros para calcular la media."
    FinSi
FinProceso