// Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas
Proceso Ejercicio_26
	Definir dividendo, divisor, cociente Como Entero
	
    Escribir "Ingrese el dividendo:"
    Leer dividendo
    Escribir "Ingrese el divisor:"
    Leer divisor
	
    Si divisor == 0 Entonces
        Escribir "El divisor no puede ser cero."
    SiNo
        cociente <- 0
        Mientras dividendo >= divisor Hacer
            dividendo <- dividendo - divisor
            cociente <- cociente + 1
        FinMientras
        Escribir "El cociente es: ", cociente
        Escribir "El resto es: ", dividendo
    FinSi
FinProceso
