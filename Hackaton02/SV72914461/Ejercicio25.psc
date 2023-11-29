Proceso Ejer_25
	Definir numero, factorial Como Entero
	
    // Leer el número para calcular el factorial
    Escribir("Ingrese un número para calcular el factorial:")
    Leer numero
	
    // Verificar si el número es negativo
    Si numero < 0 Entonces
        Escribir("El factorial no está definido para números negativos.")
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
