//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso  Ejercicio33
    Definir continuar como Caracter
    // Inicializar la variable continuar para que entre al bucle la primera vez
    continuar <- "s"
    // Bucle para permitir al usuario continuar o salir del programa
    Mientras continuar = "s" o continuar = "S" Hacer
        Escribir "¿Desea continuar? (s/n): "
        Leer continuar
    Fin Mientras
    Escribir "Fin del programa."
FinProceso

