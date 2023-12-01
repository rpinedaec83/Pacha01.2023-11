Algoritmo  nilakantha
	definir n Como Entero
	definir piaprox,denominador Como Real
	escribir "ingrese la cantidad de terminos para aproximar a pi:"
	leer n
	piaprox <- 3.0
	denominador  <- 2.0
	para i<-  1 hasta n con paso 1 hacer 
		si i % 2 =0 Entonces
			piaprox <-piaprox -4*(denominador *(denominador +1 )*(denominador+2))
		SiNo
			piaprox <- piaprox +4/(denominador *(denominador+1 )*(denominador+2))
		FinSi
		denominador <- denominador + 2 
	FinPara
	escribir "la aproximacion de pi con ",n,"es:",piaprox
FinAlgoritmo