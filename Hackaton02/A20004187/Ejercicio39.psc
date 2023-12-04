//39 Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. 
//La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso Ejercicio39
	numero = 0
	constante = 4
	divisor = 1
	Escribir Sin Saltar "Ingrese un numero:"
    Leer numero
	num_pi = 0
	
    Para i<-1 Hasta (numero) Con Paso 1 Hacer
		escribir "pi = ",constante, "/",divisor
        Si i%2 <> 0 Entonces
            num_pi = num_pi + (constante/(divisor));
		sino 
			num_pi = num_pi - (constante/(divisor));
        FinSi
		divisor = divisor+2
    Fin Para
    escribir "el resultado es: ",num_pi
FinProceso
