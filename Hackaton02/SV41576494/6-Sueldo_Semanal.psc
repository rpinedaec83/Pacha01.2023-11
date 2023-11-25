Proceso sueldo_semanal
	Definir sueldo,pago,horas Como Real
	Escribir "Escribe la cantidad de horas trabajadas"
	Leer horas
	
	si horas > 40 Entonces
		sueldo = horas*25*7
	SiNo
		sueldo = horas*20*7
	FinSi
	Escribir "El pago semana por las ",horas, " horas trabajadas es: $", sueldo
FinProceso
