//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:Tipo A 10% de descuentoTipo B 15% de descuentoTipo C 20% de descuento
Proceso Ejercicio7
	definir opc Como Caracter
	Escribir " Selecciona tu membresia :A,B,C"
	Escribir "____________"
	escribir "(1) Membresia tipo A"
	escribir "(2) Membresia tipo B"
	escribir "(3) Membresia tipo C"
	Escribir "(0) Salir"
	Escribir "Elige una opcion(0-3)...."sin saltar
	leer opc
	segun opc Hacer
		'1':
			Limpiar Pantalla
			Escribir "Esta es la opcion 1"
			escribir " tienes 10% de descuento"
			escribir "Pulsa una tecla para continuar..."
			esperar tecla
		'2':
			Limpiar Pantalla
			Escribir "Esta es la opcion 2"
			escribir " tienes 15% de descuento"
			escribir "Pulsa una tecla para continuar..."
			esperar tecla
		'3':
			Limpiar Pantalla
			escribir" Esta es la opcion 3"
			escribir" tienes 20% de descuento"
			escribir "Pulsa una tecla para continuar..."
			esperar tecla
		'0':
			Escribir""
			escribir "Hasta Luego"
		de otro modo:
			Limpiar Pantalla
			escribir opc, "no es una opcion. Intentalo de nuevo"
			escribir" Pulsa una tecla para continuar..."
			Esperar tecla
	FinSegun

	
FinProceso
