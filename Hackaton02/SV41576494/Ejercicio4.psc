Proceso Tres_num_Mayor_a_menor
	Definir num1,num2,num3 como entero
	Escribir "Ingresar tres numero"
	leer num1,num2,num3
	Si num1>num2 Entonces
		Si num1>num3 Entonces
			Escribir "El numero ",num1," es el mayor de los tres numeros ingresados"
		SiNo
			Escribir "El número ",num3," es el mayor de los tres numeros ingresados"
		FinSi
	SiNo
		Si num2>num3 Entonces
			Escribir "El número ",num2," es el mayor de los tres numeros ingresados"
		SiNo
			Escribir "El número ",num3," es el mayor de los tres numeros ingresados"
		FinSi
	FinSi
FinProceso
