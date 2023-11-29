//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso  MediaNumerosPositivos
    Definir num, suma, cantidad como Real
	
    cantidad <- 0
    suma <- 0
	
    Escribir "Ingrese numeros positivos para calcular la media (Ingrese un número negativo para terminar):"
	
    Repetir
        Escribir "Ingrese un numero: "
        Leer num
		
        Si num >= 0 entonces
            suma <- suma + num
            cantidad <- cantidad + 1
        Fin Si
		
    Hasta Que num < 0
	
    Si cantidad > 0 entonces
        media <- suma / cantidad
        Escribir "La media de los numeros positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron numeros positivos para calcular la media."
    Fin Si
FinProceso

