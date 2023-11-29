//Hacer un algoritmo en Pseint donde se ingrese una hora 
//y nos calcule la hora dentro de un segundo.
Proceso Hora
	Definir hh, mm, ss Como Entero
	Escribir "Ingresa la hora en formato hh"
	Leer hh
	Escribir "Ingresa los minutos en formato mm"
	Leer mm 
	Escribir "Ingresa los segundos en formato ss"
	Leer ss
	
	si hh < 24 y mm < 60 y ss < 60 Entonces
		ss = ss + 1
		si ss = 60 Entonces
			ss = 0
			mm = mm + 1
			si mm == 60 Entonces
				mm = 0
				hh = hh + 1
				si hh = 24 Entonces
					hh = 0
				FinSi
			FinSi
		FinSi
		Escribir "La hora dentro de un segundo es: ",hh, " : ", mm, " : ", ss
	SiNo
		Escribir "Datos ingresados son inválidos"
	FinSi	
	
FinProceso
