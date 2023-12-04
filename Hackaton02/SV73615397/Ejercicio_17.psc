Proceso HoraEnUnSegundo
	Definir horas,minutos,segundos Como Entero
	Definir horario Como Caracter
	horas<--1
	minutos<--1
	segundo<--1
	Mientras horas<0 o horas>23 Hacer
		Escribir "Ingrese la hora: "
		Leer horas
		Si horas > 0 y horas<24 Entonces
			Mientras minutos<0 o minutos>59 Hacer
				Escribir "Ingrese los minutos: "
				Leer minutos
				Si minutos>=0 y minutos<60 Entonces
					Mientras segundos<=0 o segundos>59 Hacer
						Escribir "Ingrese los segundos: "
						Leer segundos
					FinMientras
				FinSi
			FinMientras
		FinSi
	FinMientras
	Si horas>12 Entonces
		horario = "pm"
	SiNo
		horario = "am"
	FinSi
	Escribir "La hora indicada es ",horas,":",minutos,":",segundos," ",horario
	Si (segundos+1) = 60 Entonces
		minutos=minutos+1
		segundos = 0
		si minutos=60 Entonces
			horas = horas + 1
			minutos = 0
			Si horas >= 24 Entonces
				horas = horas - 24
			FinSi
		FinSi
	FinSi
	Escribir "La hora dentro de un segundo será ",horas,":",minutos,":",segundos," ",horario
FinProceso
