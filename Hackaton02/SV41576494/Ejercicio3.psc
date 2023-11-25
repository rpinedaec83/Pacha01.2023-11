Proceso Num_Termina_en_4
	Definir num, ud Como Entero
	Escribir "Digite un numero entero"
	Leer num
	Si num < 0
		num = num*(-1)
	FinSi
	Si num >= 0
		ud = num - trunc(num/10)*10
	FinSi
	Si ud == 4
		Escribir "El numero digitado termina en 4"
	SiNo
		Escribir "El numero digitado no termina en 4"
	FinSi
FinProceso
