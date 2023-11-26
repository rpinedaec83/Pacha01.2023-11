//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
algoritmo Ejercicio39
	definir n Como Entero
	definir terminoActual,piAprox como real
	escribir " Ingrese la cantidad de terminos para la aproximacion de pi:"
	leer n
	
	para i<-0 hasta n-1 con paso 1 hacer
		
		terminoActual <-4/(1+2*i)
		si i %2=0 Entonces
			piAprox <-piAprox +terminoActual
		SiNo
			piAprox <- piAprox -terminoActual
		FinSi
	FinPara
	escribir " La aproximacion de pi con ", n," es: ",piAprox
	
FinAlgoritmo

