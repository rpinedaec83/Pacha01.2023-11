//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
    Definir n, suma, i Como Entero
    
    Escribir "Ingrese un numero para encontrar la suma de los numeros impares que llegue hasta este numero: "
    Leer n
    
    suma = 0
    
    Para i = 1 Hasta n Hacer
        Si i MOD 2 <> 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    
    Escribir "La suma de los numeros impares hasta ", n, " es: ", suma
    
FinProceso
