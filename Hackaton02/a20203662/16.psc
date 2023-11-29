// Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	Definir numeroDia Como Entero
    Escribir "Ingrese un número del 1 al 7:"
    Leer numeroDia
	
    Si numeroDia = 1 Entonces
        Escribir "Lunes"
    Sino Si numeroDia = 2 Entonces
			Escribir "Martes"
		Sino Si numeroDia = 3 Entonces
				Escribir "Miércoles"
			Sino Si numeroDia = 4 Entonces
					Escribir "Jueves"
				Sino Si numeroDia = 5 Entonces
						Escribir "Viernes"
					Sino Si numeroDia = 6 Entonces
							Escribir "Sábado"
						Sino Si numeroDia = 7 Entonces
								Escribir "Domingo"
							Sino
								Escribir "Número no válido. Debe ser del 1 al 7."
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
	
FinProceso
	