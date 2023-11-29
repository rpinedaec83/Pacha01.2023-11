Proceso Calculo_problema
	
	Definir codemp, dias Como Entero
	
	Escribir "Ingrese el código de empleado"
	Leer codemp
	Escribir  "Ingreso el número de días laborados en la semana"
	Leer dias
	
	Cajero = 11 // 56 x dia
	Servidor = 12 // 64 x dia
	Preparador = 13 // 80 x dia
	Mantenimiento = 14 // 48 x dia
	
	p11 = 56
	p12 = 64
	p13 = 80
	p14 = 48
	
	Si dias >= 1 y dias < 7 Entonces
	
	Si codemp = 11 Entonces
		Pago = p11 * dias
		Escribir "Se le debe pagar al Cajero $ " Pago " por " dias " dia(s) trabajados"
	FinSi
	
	Si codemp = 12 Entonces
		Pago = p12 * dias
		Escribir "Se le debe pagar al Servidor $ " Pago " por " dias " dia(s) trabajados"
	FinSi
	
	Si codemp = 13 Entonces
		Pago = p13 * dias
		Escribir "Se le debe pagar al Preparador de Mezclas $ " Pago " por " dias " dia(s) trabajados"
	FinSi
	
	Si codemp = 14 Entonces
		Pago = p14 * dias
		Escribir "Se le debe pagar al Personal de Mantenimiento $ " Pago " por " dias " dia(s) trabajados"
	FinSi
	
SiNo
	Escribir "El valor de semana debe estar entre 1 y 6"
	
	FinSi

FinProceso
