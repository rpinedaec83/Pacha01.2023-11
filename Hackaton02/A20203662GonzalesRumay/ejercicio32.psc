// 32. Se quiere saber cu�l es la ciudad con la poblaci�n de m�s personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso.
Proceso Ejercicio32
	Definir provincia, ciudad, mayorCiudad Como Cadena
    Definir poblacion, maxPoblacion, i, j Como Entero
	
    maxPoblacion = 0
	
    Para i = 1 Hasta 3 Hacer
        Escribir "Ingrese el nombre de la provincia ", i, ": "
        Leer provincia
		
        Para j = 1 Hasta 11 Hacer
            Escribir "Ingrese la poblaci�n de la ciudad ", j, " en la provincia ", provincia, ": "
            Leer poblacion
			
            Si poblacion > maxPoblacion Entonces
                maxPoblacion = poblacion
                mayorCiudad = "Ciudad " + ConvertirATexto(j) + " en la provincia " + provincia
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con la mayor poblaci�n es ", mayorCiudad, " con una poblaci�n de ", maxPoblacion, " habitantes."
FinProceso