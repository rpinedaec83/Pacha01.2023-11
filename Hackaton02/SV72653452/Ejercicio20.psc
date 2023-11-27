// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//    ¿Cuántos números son Pares?

//    ¿Cuál es el mayor de todos?

//    Si el tercero es par, calcular el cuadrado del segundo.

//    Si el primero es menor que el cuarto, calcular la media de los 4 números.

//   Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Algoritmo Ejercicio20
    Definir num1, num2, num3, num4, pares, mayor, cuadradoSegundo, media, suma Como Entero
	
    // Leer 4 números enteros positivos
    Escribir "Ingrese el primer número:"
    Leer num1
	
    Escribir "Ingrese el segundo número:"
    Leer num2
	
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    // Verificar y realizar operaciones
    // ¿Cuántos números son Pares?
    pares <- 0
    Si num1 Mod 2 = 0 Entonces
        pares <- pares + 1
    FinSi
	
    Si num2 Mod 2 = 0 Entonces
        pares <- pares + 1
    FinSi
	
    Si num3 Mod 2 = 0 Entonces
        pares <- pares + 1
    FinSi
	
    Si num4 Mod 2 = 0 Entonces
        pares <- pares + 1
    FinSi
	
    Escribir "Cantidad de números pares:", pares
	
    // ¿Cuál es el mayor de todos?
    mayor <- num1
    Si num2 > mayor Entonces
        mayor <- num2
    FinSi
	
    Si num3 > mayor Entonces
        mayor <- num3
    FinSi
	
    Si num4 > mayor Entonces
        mayor <- num4
    FinSi
	
    Escribir "El mayor de todos es:", mayor
	
    // Si el tercero es par, calcular el cuadrado del segundo.
    Si num3 Mod 2 = 0 Entonces
        cuadradoSegundo <- num2 * num2
        Escribir "El cuadrado del segundo número es:", cuadradoSegundo
	SiNo
		Escribir"El tercero no es par"
    FinSi
	
    // Si el primero es menor que el cuarto, calcular la media de los 4 números.
    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4 ) % 4.0
        Escribir "La media de los 4 números es: ", media
	SiNo
		Escribir"El primero no es menor que el cuarto"
    FinSi
	
    // Si el segundo es mayor que el tercero, verificar si el tercero está comprendido entre los valores 50 y 700.
    // Si cumple la segunda condición, calcular la suma de los 4 números.
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma <- num1 + num2 + num3 + num4
        Escribir "La suma de los 4 números es:", suma
	SiNo
		Escribir "No cumple segunda condicion"
    FinSi

FinAlgoritmo