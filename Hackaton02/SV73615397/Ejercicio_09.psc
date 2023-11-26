Proceso DeterminarAumento
	Definir sueldo,aumento Como Entero
	Escribir "Cuanto ganaba?"
	Leer sueldo
	Si sueldo > 2000 Entonces
		aumento = 5
	SiNo
		aumento = 10
	FinSi
	Escribir "Ganabas ",sueldo,", te corresponde un aumento del ",aumento,"%"
	Escribir "Ahora ganarás s/",sueldo+((sueldo*aumento)/100)
FinProceso
