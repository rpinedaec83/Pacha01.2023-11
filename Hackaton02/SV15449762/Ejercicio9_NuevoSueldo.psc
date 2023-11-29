Proceso Calculo_nuevo_sueldo
	Definir sueldo, sueldo2, aumento Como Real	
	Escribir "Ingrese la remuneración actual del trabajador"
	Leer sueldo
	Si sueldo < 2000 Entonces
		sueldo2 = sueldo * 1.1
	SiNo
		sueldo2 = sueldo * 1.05
	FinSi
	Escribir "El nuevo sueldo del trabajador sera de " sueldo2 " soles"
	FinProceso