//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo Ejercicio12
	Definir a,b Como Entero
	Escribir Sin Saltar "Ingrese el primer numero: ";
    Leer a;
    Escribir Sin Saltar "Ingresa el segundo numero: ";
    Leer b;
	
    mayor = a;
    Si mayor < b Entonces
        mayor = b;
    FinSi
	
    Escribir "El numero mayor es : ", mayor;
	
	
FinAlgoritmo