//25. Hacer un algoritmo en Pseint para calcular el factorial de un n�mero de una forma distinta
Proceso Ejercicio25
	Definir numero, resultado, i Como Real 
    Escribir "Ingrese un n�mero para calcular su factorial:"
    Leer numero
    Si numero < 0 Entonces
        Escribir "El factorial no est� definido para n�meros negativos."
    Sino
        resultado = 1
        Si numero > 1 Entonces
            Para i = numero Hasta 2 Con Paso -1 Hacer
                resultado = resultado * i
            FinPara
        FinSi
        Escribir "El factorial de ", numero, " es ", resultado
    FinSi
FinProceso