Proceso Comisiones
	
	Definir cantidad Como Entero
	Definir Comisión, Comi Como Real
		
	Escribir "Ingrese la cantidad de CDs vírgenes a vender"
	Leer cantidad
	
	Comi = 0.0825
	PPM1 = 10 // para ventas hasta 9 unidades
	PPM2 = 8 // para ventas entre 10 y 99
	PPM3 = 7 // para ventas entre 100 y 499
	PPM4 = 6 // para ventas de 500 a más
		
	Si cantidad < 10 Entonces
		PV = cantidad * PPM1
		Com = PV* Comi
		Escribir "El precio de venta por " cantidad " CDs es " PV " soles"
		Escribir "La comisión del vendedor será " Com " soles"
	FinSi
	
	Si cantidad >= 10 y cantidad < 100 Entonces
		PV = cantidad * PPM2
		Com = PV* Comi
		Escribir "El precio de venta por " cantidad " CDs es " PV " soles"
		Escribir "La comisión del vendedor será " Com " soles"
	FinSi
	
	Si cantidad >= 100 y cantidad < 500 Entonces
		PV = cantidad * PPM3
		Com = PV* Comi
		Escribir "El precio de venta por " cantidad " CDs es " PV " soles"
		Escribir "La comisión del vendedor será " Com " soles"
	FinSi
	
	Si cantidad >= 500 Entonces
		PV = cantidad * PPM4
		Com = PV* Comi
		Escribir "El precio de venta por " cantidad " CDs es " PV " soles"
		Escribir "La comisión del vendedor será " Com " soles"
	FinSi
	
FinProceso
