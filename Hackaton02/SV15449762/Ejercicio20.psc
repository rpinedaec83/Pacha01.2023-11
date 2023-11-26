Proceso ejercicio20
	
	Definir num1, num2, num3, num4, contar Como Entero
	definir Media Como Real
	
	Escribir Sin Saltar "Escriba el 1er número"
	Leer num1
	Escribir Sin Saltar "Escriba el 2do número"
	Leer num2
	Escribir Sin Saltar "Escriba el 3er número"
	Leer num3
	Escribir Sin Saltar "Escriba el 4to número"
	Leer num4
	
	contar <- 0
	
	Si num1 % 2 = 0 Entonces
		contar = contar + 1
	FinSi
	
	Si num2 % 2 = 0 Entonces
		contar = contar + 1
	FinSi
	
	Si num3 % 2 = 0 Entonces
		contar = contar + 1
	FinSi
	
	Si num4 % 2 = 0 Entonces
		contar = contar + 1
	FinSi
	
	Escribir "Se tienen un total de " contar " numeros pares"
	
	Si (num1 > num2) y (num1 > num3) y (num1 > num4) Entonces
		Escribir "El número mayor es " num1
	FinSi
	
	Si (num2 > num1) y (num2 > num3) y (num2 > num4) Entonces
		Escribir "El número mayor es " num2
	FinSi
	
	Si (num3 > num1) y (num3 > num2) y (num3 > num4) Entonces
		Escribir "El número mayor es " num3
	FinSi
	
	Si (num4 > num1) y (num4 > num2) y (num4 > num3) Entonces
		Escribir "El número mayor es " num4
	FinSi
	
	Si num1 < num4 Entonces
		Media = (num1 + num2 + num3 + num4) / 4
		Escribir "La media de los 4 números es " Media
	SiNo
		Escribir "No se cumple condición para estimar la media de los valores"
	FinSi
	
	Si num2 > num3 y num3 >= 50 y num3 <= 700 Entonces
		Total = num1 + num2 + num3 + num4
		Escribir "El total de los cuatro valores es " Total
	SiNo
		Escribir "No se cumple condición para estimar el total de los valores"
	FinSi
	
FinProceso
