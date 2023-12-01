Proceso sin_titulo
	definir n Como Entero
	definir mensaje como cadena
	escribir "ingresa un numero"
	leer n 
	mensaje = "no termina en 4"
	Mientras n > 0 Hacer //123
		digito = n mod 10 //3
		Escribir "El dígito es: ", digito
		
		si digito = 4 y orden = 0 Entonces
			mensaje = "si termina en 4"
		FinSi
		n = trunc(n/10) 
		Escribir "El nro de orden es: ", orden
		orden = orden + 1
	FinMientras
	Escribir "El numero ingreso ",mensaje
FinProceso
