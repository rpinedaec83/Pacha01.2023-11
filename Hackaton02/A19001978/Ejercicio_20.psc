// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre 
//los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso Ejercicio_20
	
	Dimension  listaNumero[4]
	cont = 1
	media = 0
	
	Mientras  cont <= 4 Hacer
		Escribir "Ingrese un numero entero positivo: "
		Leer numeroIngresado
		listaNumero[cont] = numeroIngresado
		cont = cont + 1
	FinMientras
	
	si listaNumero[3] % 2 = 0
		cuadradoSegundo = listaNumero[2] ^ 2
		Escribir "El tercer numero es par, el cuadro del segundo: ", cuadradoSegundo
	FinSi
	
	si listaNumero[1] < listaNumero[4]
		sumaTotal = 0
		media = 0
		Para i <- 1 Hasta 5 Con Paso 1 Hacer
			sumaTotal = sumaTotal + listaNumero[i]
		FinPara
		media = sumaTotal / 4
		Escribir "El primer numero es menor que el cuarto, la media es: ", media
	FinSi
	
	si (listaNumero[2] > listaNumero [3]) Y (listaNumero[3] >= 50 Y listaNumero[3] <= 700)
		sumaTotal = 0
		Para i <- 1 Hasta 5 Con Paso 1 Hacer
			sumaTotal = sumaTotal + listaNumero[i]
		FinPara
		
		Escribir "El segundo numero es mayor al tercero, y este ultimo esta comprendidor entre 50 y 700"
		Escribir "la sumta de todos los numeros es: ", sumaTotal
	FinSi
	
FinProceso
