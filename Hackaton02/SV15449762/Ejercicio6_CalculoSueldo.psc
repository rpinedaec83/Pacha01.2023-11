Proceso CalculoSueldo
	Definir Sueldo, Horas Como Entero
	Escribir "Ingrese las horas trabajadas"
	Leer Horas
	Si	Horas > 0 y Horas <= 40 Entonces
		Sueldo = 20 * Horas
	FinSi
	Si Horas > 40 Entonces
		Sueldo = (40 * 20) + (Horas - 40) * 25
	FinSi
		Escribir " Mi sueldo por " Horas " hora(s) de trabajo será de " Sueldo " soles"
FinProceso