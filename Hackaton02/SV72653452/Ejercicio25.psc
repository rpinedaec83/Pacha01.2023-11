Proceso Ejercicio25
	Definir numero, factorial Como Entero
	
    // Leer el numero para calcular el factorial
    Escribir("Ingrese un numero para calcular el factorial:")
    Leer numero
	
    // Verificar si el numero es negativo
    Si numero < 0 Entonces
        Escribir("El factorial no esta definido para numeros negativos.")
    Sino
        // Inicializar el factorial a 1
        factorial <- 1
		
        // Calcular el factorial utilizando un bucle mientras
        Mientras numero > 0 Hacer
            factorial <- factorial * numero
            numero <- numero - 1
        FinMientras
		
        // Mostrar el resultado
        Escribir "El factorial es:", factorial
    FinSi
FinProceso
