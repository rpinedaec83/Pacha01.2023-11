//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	definir horas,minutos,segundos como entero
	definir valorescorrectos Como Logico
	valorescorrectos= Verdadero
	escribir sin saltar " Digite la hora (0 y 23)"
	leer horas
	escribir sin saltar "Digite los minutos (entre 0 y 59)"
	leer minutos
	escribir sin saltar " Digite los segundos (0 y 59)"
	Leer segundos
	
	si (horas<0 o horas>23)
		escribir "Error al digitar la hora"
		valorescorrectos= Falso
	FinSi
	si (minutos<0 o minutos >59)
		escribir " Error al digitar los minutos"
		valorescorrectos=Falso
		
	FinSi
	si (segundo<0 o segundos >59)
		escribir "Erros al digitar los segundos"
		valorescorrectos= Falso
		
	FinSi
	si valorescorrectos 
		mientras(horas<=23)
			mientras(minutos<=59)
				mientras(segundos<=59)
					Limpiar Pantalla
					si (horas>9)
						escribir sin saltar " La hora digitad es :", horas
					SiNo
						escribir sin saltar "La hora digitada es : 0", horas
					FinSi
					si(minutos>9)
						escribir sin saltar ":",minutos
					sino
						escribir sin saltar ":0", minutos
						
					FinSi
					si (segundos>9)
						escribir sin saltar ":",segundos
					sino
						escribir sin saltar ":0", segundos
					FinSi
					segundos = segundos +1
					esperar 1 segundo
				FinMientras
				segundos=0
				minutos=minutos +1
				
			FinMientras
			minutos =0
			horas = horas+1
			si horas =24
				horas =0
			FinSi
		FinMientras
	FinSi
FinProceso



