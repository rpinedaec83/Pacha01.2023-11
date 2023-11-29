//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio4
Definir numero1, numero2, numero3, temp Como Entero
	
Escribir "Ingrese el primer numero: "
Leer numero1
Escribir "Ingrese el segundo numero: "
Leer numero2
Escribir "Ingrese el tercer numero: "
Leer numero3
	
Si numero1 > numero2 Entonces
	temp = numero1
	numero1 = numero2
	numero2 = temp
    Fin Si
    Si numero2 > numero3 Entonces
	temp = numero2
	numero2 = numero3
	numero3 = temp
    Fin Si
    Si numero1 > numero2 Entonces
	temp = numero1
	numero1 = numero2
	numero2 = temp
    Fin Si
    Escribir "Los numeros ordenados de menor a mayor son: ", numero1, ", ", numero2, ", ", numero3
	
FinProceso
