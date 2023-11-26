Proceso Ejercicio40
	
	Definir n Como Entero
	Definir piAprox Como Real
	
	Escribir "Ingrese la cantidad de términos para aproxima a PI"
	Leer n
	
	piAprox <- 3.0
	denominador <- 2.0
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si i % 2 = 0 Entonces
			piAprox <- piAprox - 4 / (denominador * (denominador + 1) * (denominador +2))
		SiNo
			piAprox <- piAprox + 4 / (denominador * (denominador + 1) * (denominador +2))
		FinSi
		
		denominador <- denominador + 2
		
	FinPara
	
	Escribir  "La aproximación de PI con " n " es " piAprox
	
FinProceso
