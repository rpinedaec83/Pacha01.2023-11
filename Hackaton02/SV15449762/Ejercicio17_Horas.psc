Proceso Horas
	
	Definir h, m, s Como Entero
	
	Escribir Sin Saltar "Ingrese la Hora"
	Leer h
	Escribir Sin Saltar "Ingrese los Minutos"
	Leer m
	Escribir Sin Saltar "Ingrese los Segundos"
	Leer s
	
	S_total = (h * 3600) + (m * 60) + s + 1
	h1 = trunc (S_total / 3600)
	res = S_total % 3600
	m1 = trunc (res / 60)
	s1 = res % 60
	
	Escribir "Dentro de un segundo, la hora será " h1 ":" m1 ":" s1
		
FinProceso