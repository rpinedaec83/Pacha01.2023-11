// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un n�mero por medio del algoritmo de Euclides.
Proceso Ejercicio37
    Definir num1, num2, resto, mcd Como Entero
	
    Escribir "Ingrese el primer n�mero:"
    Leer num1
	
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
	
    Mientras num2 <> 0 Hacer
        resto = num1 % num2
        num1 = num2
        num2 = resto
    FinMientras
    mcd = num1
    Escribir "El M�ximo Com�n Divisor (MCD) de los dos n�meros es:", mcd
FinProceso