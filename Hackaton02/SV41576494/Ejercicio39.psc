Algoritmo  aproximacionpi
	definir n Como Entero
	definir terminoactual Como Real
	
	escribir "ingrese la cantidad de terminos para la aproximación de pi:"
	leer n
	
	para i <- 0 hasta n - 1 con paso 1 hacer
		
		terminoactual <- 4 / (1 + 2 * i)
		
		si i % 2 = 0 entonces 
			piaprox <-piaprox -terminoactual
		SiNo
			piaprox <-piaprox-terminoactual
		FinSi
	FinPara
	
	escribir "la aproximacion de pi con" n
	
FinAlgoritmo