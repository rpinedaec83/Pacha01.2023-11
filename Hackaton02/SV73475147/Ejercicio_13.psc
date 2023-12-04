// Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal
Proceso Ejercicio_13
	Definir letra Como Caracter
	
    Escribir "Ingrese una letra:"
    Leer letra
	
    Si letra == 'a' o letra == 'e' o letra == 'i' o letra == 'o' o letra == 'u' Entonces
        Escribir "La letra ", letra, " es una vocal."
    SiNo
        Escribir "La letra ", letra, " no es una vocal."
    FinSi
FinProceso
