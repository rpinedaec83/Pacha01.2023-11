//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso Ejercicio9
	definir sueldo Como Real
	escribir " Ingrese su sueldo"
	leer sueldo
	si sueldo<=2000 entonces 
		aumento<-sueldo *0.10
		escribir " el 10% es:s/",aumento
		sueldo<-sueldo + aumento
		escribir "el sueldo actualizado es:s/", sueldo
		sino
			aumento<- sueldo*0.05
		escribir  "el 5% es:", aumento
			sueldo<-sueldo + aumento
				escribir "el sueldo actualizado es: s/", sueldo
	FinSi
		
FinProceso
