Proceso ejemplo20
	
	escribir "Ingrese el primer n�mero: "
	leer numero1
	escribir "Ingrese el segundo n�mero: "
	leer numero2
	escribir "Ingrese el tercer n�mero: "
	leer numero3
	escribir "Ingrese el cuarto n�mero: "
	leer numero4
	
	
	contador_pares = 0
	si (numero1 % 2 == 0)
		contador_pares = contador_pares + 1
	SiNo
		si (numero2 % 2 == 0)
			contador_pares = contador_pares + 1
			si (numero3 % 2 == 0)
				contador_pares = contador_pares + 1
				si (numero4 % 2 == 0)
					contador_pares = contador_pares + 1
				FinSi
			FinSi
		FinSi
	FinSi
	
	si (numero1 > numero2)
		mayor_numero = numero1
	sino
		mayor_numero = numero2
		si (numero3 > mayor_numero)
			mayor_numero = numero3
			si (numero4 > mayor_numero)
				mayor_numero = numero4
			FinSi
		FinSi
	FinSi
	
	si (numero3 % 2 == 0)
		numero2 = numero2 * numero2
		
	FinSi
	
	si (numero1 < numero4)
		media = (numero1 + numero2 + numero3 + numero4) / 4
	FinSi
	
	si (numero2 > numero3)
		si (numero3 >= 50 & numero3 <= 700)
			numero1 = numero1 + numero2 + numero3 + numero4
		FinSi
	FinSi
	
	escribir "La cantidad de n�meros pares es: ", contador_pares
	escribir "El mayor n�mero es: ", mayor_numero
    escribir "El cuadrado del segundo n�mero es: ", numero2
	escribir "La media de los n�meros es: ", media
	escribir "La suma de los n�meros es: ", numero1
	
	si (numero3 % 2 == 0)
		si (numero1 < numero4)
			
		FinSi

	FinSi

	
	si (numero2 > numero3)
		si (numero3 >= 50 & numero3 <= 700)
			escribir "La suma de los n�meros es: ", numero1
		FinSi
	FinSi
	

	
	
FinProceso
