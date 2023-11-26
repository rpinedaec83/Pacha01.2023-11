//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones
Proceso Ejercicio20
	definir numeros, count,n,countPares,nMayor,sumatotal Como Entero
	dimension numeros[4]
	
	mientras count <4 Hacer
		escribir "Ingrese el N", count+1
		leer n
		numeros[count+1]=n
		count = count + 1
	FinMientras
	nMayor = numeros[1]
	para i<-1 hasta 4 Hacer
		si numeros[i] > nMayor Entonces
			nMayor = numeros [i]
			countPares=numeros[i]
		FinSi
		si numeros[i]% 2 = 0 Entonces
		countPares= countPares +1
		FinSi
		sumatotal = sumatotal+numeros[i]
	FinPara
	
	si countPares>=1 Entonces
		escribir "Hay", countPares,"numero(s) par(es)"
		si numeros[3]%2=0 Entonces
			escribir " El cuadrado del 2do numero ingresado es:",numeros[2]^2
		FinSi
	FinSi
	si numeros[1]>numeros[4] entonces
		escribir " El promedio de los 4 numeros ingresados es:",sumatotal/4
	FinSi
	si numeros[2]>numeros[3] y(numeros[3]>=50 y numeros[3]<=700) Entonces
		escribir " La suma de los 4 numeros es:",sumatotal
	FinSi
	escribir " El numero", nMayor," es el Mayor"
FinProceso
