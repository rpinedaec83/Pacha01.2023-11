//40 Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha.
//La formula que se debe aplicar es:

//Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

Proceso Ejercicio40
	numero = 0
	constante = 4
	divisor = 2
	Escribir Sin Saltar "Ingrese un numero:"
    Leer numero
	num_pi = 3
	divisor_inicial = 2
    Para i<-1 Hasta (numero) Con Paso 1 Hacer
		
		divisor = divisor_inicial*(divisor_inicial+1)*(divisor_inicial+2)
		
		escribir "pi = ",constante, "/",divisor
		
        Si i%2 <> 0 Entonces
            num_pi = num_pi + (constante/(divisor));
		sino 
			num_pi = num_pi - (constante/(divisor));
        FinSi
		divisor_inicial = divisor_inicial + 2
    Fin Para
    escribir "el resultado es: ",num_pi
FinProceso
