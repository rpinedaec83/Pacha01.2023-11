//Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
//�Cu�ntos n�meros son Pares?
//�Cu�l es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
Proceso Ejercicio20
	Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares, mayor, cuadradoSegundo, media, sumaCuatroNumeros Como Real
	
    Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
    Escribir "Ingrese el cuarto n�mero:"
    Leer num4
	
    cantidadPares = 0
    Si num1 MOD 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num2 MOD 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num3 MOD 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    Si num4 MOD 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    FinSi
	
    // Calcular el mayor de todos
    mayor = num1
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
	
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
	
    // Verificar condiciones adicionales
    Si num3 MOD 2 = 0 Entonces
        cuadradoSegundo = num2 ^ 2
    FinSi
	
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
    FinSi
	
    Si num2 > num3 Entonces
        Si num3 >= 50 y num3 <= 700 Entonces
            sumaCuatroNumeros = num1 + num2 + num3 + num4
        FinSi
    FinSi
	
    Escribir "Cantidad de n�meros pares:", cantidadPares
    Escribir "El mayor de todos es:", mayor
	
    Si num3 MOD 2 = 0 Entonces
        Escribir "Cuadrado del segundo si el tercero es par:", cuadradoSegundo
    FinSi
	
    Si num1 < num4 Entonces
        Escribir "Media de los 4 n�meros:", media
    FinSi
	
    Si num2 > num3 Entonces
        Si num3 >= 50 y num3 <= 700 Entonces
            Escribir "Suma de los 4 n�meros si se cumple la segunda condici�n:", sumaCuatroNumeros
        FinSi
    FinSi
FinProceso