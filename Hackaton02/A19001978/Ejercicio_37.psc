// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Ejercicio_37
	
	Escribir("Ingrese el primer número:")
    Leer primerNumero
	
    Escribir("Ingrese el segundo número:")
    Leer segundoNumero
	
    mientras segundoNumero> 0 hacer
        resto = primerNumero MOD segundoNumero
        primerNumero = segundoNumero
        segundoNumero = resto
    Fin Mientras
	
    Escribir "El M.C.D de los dos números es:", primerNumero
	
FinProceso
