Proceso Converter
	Definir input Como Real
	medida <-""
	Mientras No(Minusculas(medida)="cm" o Minusculas(medida)="lb") Hacer
		Escribir "Ingrese la medida a convertir a sistema Internacional (cm/lb):"
		Leer medida
		medida = Minusculas(medida)
	FinMientras
	Escribir "Ingrese cantidad de ",medida,":"
	Leer input
	Segun Minusculas(medida) Hacer
		"cm": Escribir "los ",input," ",medida," equivalen a ",input/2.54," in"
		"lb": Escribir "los ",input," ",medida," equivalen a ",input/2.2046," kg"
	FinSegun
FinProceso
