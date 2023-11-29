Proceso num_dia
	
	Definir  dia Como Entero
	Escribir "Digite un número entre 1 y 7"
	Leer dia
	
	Si (dia = 1) Entonces
		Escribir "Lunes"
	SiNo
		si (dia = 2) Entonces
			Escribir "Martes"
		SiNo
			Si (dia = 3) Entonces
				Escribir "Miércoles"
			SiNo
				Si (dia = 4) Entonces
					Escribir "Jueves"
				SiNo
					Si (dia = 5) Entonces
						Escribir "Viernes"
					SiNo
						Si (dia = 6) Entonces
							Escribir "Sábado"
						SiNo
							Si (dia = 7) Entonces
								Escribir "Domingo"
							SiNo
								Escribir "Opción incorrecta"
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
FinProceso
