Proceso Conversiones_cm_kg
	
	Definir centi, pulg, lib, kgs, var Como Real
	
	Escribir "Elige 1 para convertir Centímetros a Pulgadas o 2 para convertir Libras a Kilos"
	Leer var
	
	Si var = 1 Entonces
		Escribir "Digita la información en centímetros"
		Leer centi
		pulg = centi * 0.393701
		Escribir centi " cms equivale a " pulg " pulgadas"
	FinSi

	Si var = 2 Entonces
		Escribir  "Digita la información en Libras"
		Leer lib
		kgs = lib / 2.20462
		Escribir  lib " libras equivale a " kgs " kilos"
	FinSi
	
FinProceso
