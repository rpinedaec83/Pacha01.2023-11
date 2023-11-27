//Calular el descuento según tipo de mebresiías
// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
// sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
Proceso Ejercicio_7
    Definir tipoMembresia Como Caracter
    Definir montoCompra, descuento, totalPagar Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B, C):"
    Leer tipoMembresia
    Escribir "Ingrese el monto total de la compra:"
    Leer montoCompra
	
    Segun tipoMembresia Hacer
        "A":
            descuento = montoCompra * 0.10
        "B":
            descuento = montoCompra * 0.15
        "C":
            descuento = montoCompra * 0.20
        De Otro Modo:
            Escribir "Tipo de membresía no válido"
            descuento = 0
    FinSegun
	
    totalPagar = montoCompra - descuento
	
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar después del descuento: $", totalPagar
FinProceso
