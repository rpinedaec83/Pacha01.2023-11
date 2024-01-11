Proceso Ejercicio18
	
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuci�n de CD v�rgenes. Los clientes pueden adquirir los art�culos (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
//				
//				$10. Si se compran unidades separadas hasta 9.
//					
//					$8. Si se compran entre 10 unidades hasta 99.
//						
//						$7. Entre 100 y 499 unidades.
//						
//						$6. Para mas de 500 unidades.
//							
//					La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
		// Definir variables
		Definir cantidadCDs Como Entero
		Definir precioUnitario, precioTotal, gananciaVendedor Como Real
		
		// Solicitar al usuario ingresar la cantidad de CDs a vender
		Escribir "Ingrese la cantidad de CDs a vender: "
		Leer cantidadCDs
		
		// Determinar el precio unitario seg�n la cantidad
		Si cantidadCDs <= 9 Entonces
			precioUnitario <- 10
		Sino 
			Si cantidadCDs <= 99 Entonces
				precioUnitario <- 8
			Sino 
				Si cantidadCDs <= 499 Entonces
					precioUnitario <- 7
				Sino
					precioUnitario <- 6
				FinSi
			FinSi
		FinSi
		
		// Calcular el precio total para el cliente
		precioTotal <- cantidadCDs * precioUnitario
		
		// Calcular la ganancia para el vendedor
		gananciaVendedor <- 0.0825 * precioTotal
		
		// Mostrar resultados
		Escribir "Precio total para el cliente: $", precioTotal
		Escribir "Ganancia para el vendedor: $", gananciaVendedor
		
FinProceso
