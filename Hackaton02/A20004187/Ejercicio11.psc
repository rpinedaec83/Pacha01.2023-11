//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Algoritmo Ejercicio11
	Definir a,b,c Como Entero
	Escribir Sin Saltar "Ingrese el primer numero:";
    Leer a;
    Escribir Sin Saltar "Ingresa el segundo numero:";
    Leer b;
    Escribir Sin Saltar "Ingresa el tercer numero:";
    Leer c;
    mayor = a;
    Si mayor < b Entonces
        mayor = b;
    FinSi
    Si mayor < c Entonces
        mayor = c;
    FinSi
    Escribir "El numero mayor es : ", mayor;
	
	
FinAlgoritmo