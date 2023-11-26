//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//			
//		$10. Si se compran unidades separadas hasta 9.
//				
//		$8. Si se compran entre 10 unidades hasta 99.
//					
//		$7. Entre 100 y 499 unidades.
//					
//		$6. Para mas de 500 unidades.
//						
//		La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
Proceso Ejercicio18
    Definir can_cd, precio_U, total, gan_V Como Entero
	
    Escribir "Ingrese la cantidad de CD a vender: "
    Leer can_cd
	
    Si can_cd >= 1 Y can_cd <= 9 Entonces
        precio_U = 10
    Sino
        Si can_cd >= 10 Y can_cd <= 99 Entonces
            precio_U = 8
        Sino
            Si can_cd >= 100 Y can_cd <= 499 Entonces
                precio_U = 7
            Sino
                precio_U = 6
            Fin Si
        Fin Si
    Fin Si
	
    total = can_cd * precio_U

    gan_V = redon(total * 0.0825)

    Escribir "El precio total para el cliente es: $", total
    Escribir "La ganancia para el vendedor es: $", gan_V
	
FinProceso

