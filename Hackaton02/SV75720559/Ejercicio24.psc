//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso  Ejercicio24
    Definir suma, i Como Entero
    
    suma = 0
    
    Para i = 1 Hasta 1000 Hacer
        Si i MOD 2 = 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    
    Escribir "La suma de  los numeros pares hasta 1000 es: ", suma
    
FinProceso

