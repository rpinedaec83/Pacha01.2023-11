//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la 
//hora dentro de un segundo.
Proceso ejercicio17
	definir hora,minuto,segundoss Como Entero
	Escribir "ingresar hora actual "
	leer hora
	Escribir "ingresar los minutos "
	leer minuto
	Escribir "ingresar los segundos"
	leer segundos
	Mientras hora <= 23 hacer
		Mientras minuto <= 59 hacer
			Mientras segundos <= 59 hacer
				Limpiar Pantalla
				si hora > 9 Entonces
					Escribir hora Sin Saltar
				SiNo
					Escribir "0",hora Sin Saltar
				FinSi
				
				si minuto > 9 Entonces
					Escribir ":",minuto Sin Saltar
				SiNo
					Escribir ":0",minuto Sin Saltar
				FinSi
				
				si segundos > 9 Entonces
					Escribir ":",segundos
				SiNo
					Escribir ":0",segundos
				FinSi        
				segundos = segundos+1
				Esperar 1 segundo
			FinMientras
			segundos = 0
			minuto = minuto +1
		FinMientras
		
		minuto = 0
		hora = hora +1
		si hora == 24 entonces
			hora = 0
		FinSi
	FinMientras  
FinProceso