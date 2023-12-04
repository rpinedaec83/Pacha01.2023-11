//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
Proceso Ejercicio40
	definir n Como Entero
	definir piAprox,denominador Como Real
	
	escribir " Ingresar la cantidad de terminos para aproximar pi:"
	leer n
	
	piAprox<-3.0
	denominador <- 2.0
	
	para i<-1 hasta n con paso 1 Hacer
		si i %2=0 Entonces
			piAprox<- piAprox -4/(denominador *(denominador+1)*(denominador+2))
		SiNo
			piAprox<-piAprox +4/(denominador*(denominador+1)*(denominador+2))
		FinSi
		denominador <- denominador +2
	FinPara
	escribir "La aproximacion de pi con ", n, " es: ", piAprox
	
	
FinProceso
