Algoritmo  ejericicio21
	Definir numero, factorial Como Entero
    
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
    
    factorial <- 1
    
    Si numero < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        Segun numero Hacer
            0, 1: factorial <- 1
            De Otro Modo:
                Para i <- 2 Hasta numero Hacer
                    factorial <- factorial * i
                FinPara
        FinSegun
        
        Escribir "El factorial de ", numero, " es: ", factorial
    FinSi
FinAlgoritmo

