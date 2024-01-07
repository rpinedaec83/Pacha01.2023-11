function ejercicio01() {
    const saludar = (nombre, apellido, edad) => {
        return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
      };
    let nom = ""
    let ape = ""
    let ed = 0
    while (nom.length===0){
        nom = prompt("Ingrese el nombre:");
        if (nom.length>0){
            while (ape.length===0){
                ape = prompt("Ingrese el apellido:");
                if (ape.length>0){
                    while (ed<=0){
                        ed = parseInt(prompt("Ingrese la edad:"));
                    }   
                }
            }    
        }
    };
    alert(`${saludar(nom,ape,ed)}`) ;
}
function ejercicio02() {

        let numero1= parseInt (prompt ("Escribe el primer numero") )
        let numero2= parseInt (prompt ("Escribe el segundo numero") )
        let numero3= parseInt (prompt ("Escribe el tercer numero") )
    
        let resultadopotencia1= Math.pow(numero1, 3)
        let resultadopotencia2= Math.pow(numero2, 3)
        let resultadopotencia3= Math.pow(numero3, 3)
    
        let sumaresultado=resultadopotencia1+resultadopotencia2+resultadopotencia3
        
        alert("El resultado es: "+sumaresultado);
}    
function ejercicio03() {
    const obtenerTipo = (valor) => {
        return typeof valor;
      };
    let input = "Hola soy Cindy";
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = 34;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = 23124312312.5124123;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = true;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
    input = false;
    alert(`El tipo de valor de "${input}" es ${obtenerTipo(input)}`);
}
function ejercicio04() {
    const sumar = (...args) => {
        return args.reduce((total, valor) => total + valor, 0);
      };
    let numeros = [];
    let n = 0;
    let count = 0;
    while (n>=0){
        n = parseFloat(prompt(`Ingrese el N°${count+1}:`));
        if(n>=0){
            count++;
            numeros.push(n);
        }
    }
    alert(`La suma de los ${count} número(s) es ${sumar(...numeros)}`)
}

function ejercicio05() {
    const array = [1,2,3,"Demo1",4,"Demo2",5];
    alert("Array de ejemplo : " +array)
    alert("Array filtrando los valores: "+array
    .filter(p => (typeof p !== 'string' ) ))
}

function ejercicio06() {
    const minMax = (args) => {
        let nMax = args[0];
        let nMin = args[0];
        for(let i=0;i<args.length;i++){
            if(args[i]>nMax){
                nMax = args[i];
            }else{
                nMin = args[i];
            }
        }
        return [nMin,nMax];
      };
    let array = [1,2,3,4,5,6,7,8,9,10];
    alert(`En el array [${array}] el máximo y el mínimo son [${minMax(array)}]`);
}

function ejercicio07() {
    const formatPhoneNumber = (...args) => {
        let phone = "(";
        for (let i = 0; i < args.length; i++) {
            phone += args[i];
            if(i===2){
                phone+=")";
            }
            else if(i===5){
                phone += "-"
            }
        }
        return phone;
      };
    let array = [];
    let count = 0;
    let n = 0;
    while(count<10 || n<0){
        n = parseInt(prompt(`Ingrese el N°${count+1}:`));
        if(n<10  && n>=0){
            array.push(n);
            count++;
        }
    }

    alert(`Con los números ${array}  se retorna el número telefonico ${formatPhoneNumber(...array)}`);
}

function ejercicio08() {
    let array1=[]
    let array2=[]
    let array3=[]
    let array4=[]
 
    for(i=1;i<=10;i++){
        array1.push(Math.floor(Math.random()*100));
        array2.push(Math.floor(Math.random()*100));
        array3.push(Math.floor(Math.random()*100));
    }

    array4.push(Math.max(...array1));
    array4.push(Math.max(...array2));
    array4.push(Math.max(...array3));

    alert("Array 1 = ["+array1 +"]\n" 
        + "Array 2 = [" +array2 + "]\n"
        + "Array 3 = [" +array3 + "]\n"
        + "Array con los valores mayores -> ["+array4+"]")
    
}

function ejercicio09() {
    const charIndex = (word,character) =>{
        indices = [];
        for (let i = 0; i < word.length; i++) {
            if(word.charAt(i) === character){
                indices.push(i);
            }            
        }
        return [indices[0],indices[indices.length-1]];
    };
    let palabra = "";
    let letra = "";
    while(palabra.length===0){
        palabra = prompt("Ingrese una palabra:");
        while(letra.length>1 || letra.length===0 || !palabra.includes(letra)){
            letra = prompt(`Ingrese el caracter a buscar en la palabra ${palabra}:`);
        };
    };
    alert(`El primer y ultimo indice del caracter "${letra}" en la palabra "${palabra}" son [${charIndex(palabra,letra)}]`)
}

function ejercicio10() {
    const toArray = (obj)=>{
        return Object.entries(obj);
    };
    objeto = {"a":1,"b":2,"c":3};
    alert(`Para el objeto "${JSON.stringify(objeto)}" se devuelve el array de entradas [${toArray(objeto).map(par=>`[${par[0]},${par[1]}]`)}]`);
}
let itemsEJ11 = [];

function ejercicio11() {
    let personas = [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
      ];

    let presupuestoTotal = 0;//23000, 63000,

    for(i=0;i<personas.length;i++){
        presupuestoTotal = presupuestoTotal + personas[i].budget
    }

    alert("El presupuesto de las 3 personas es: "+presupuestoTotal )

}

function ejercicio12() {
    
    let alumnos = [
        { name: "John" },
        { name: "Steve" },
        { name: "Martin" }
      ];

      let nombres =[]

      alumnos.forEach(alumno => nombres.push(alumno.name));

      alert("el array de nombres es: "+nombres)


}
function ejercicio13() {
    const objectToArray = (obj)=>{
        return Object.entries(obj);
    };
    objeto = {"likes": 2,"dislikes": 3,"followers": 10 };
    alert(`Para el objeto "${JSON.stringify(objeto)}" se devuelve el array de entradas [${objectToArray(objeto).map(par=>`["${par[0]}",${par[1]}]`)}]`);
}

function ejercicio14() {
    let numero1= parseInt (prompt ("Escribe un numero"))
    let cuadrado= 0
    let acumulador = 0
    for(i=1;i<=numero1;i++){
        cuadrado=Math.pow(i,2)
        acumulador=acumulador+cuadrado
    }
    alert("el resultado es "+acumulador)  

    
}

function ejercicio15() {
    const multiplyByLength = (array) =>{
        return array.map(e=>e*array.length);
    };
    let n = 0;
    let count = 0;
    let numeros=[];
    while(n>=0){
        n = parseInt(prompt(`Ingrese el N°${count+1}:`));    
        if(n>=0){
            numeros.push(n);
            count++;
        }
    }
    alert(`El array [${numeros}] cada elemento se multiplicara por ${numeros.length}\nEl array resultante es: [${multiplyByLength(numeros)}]`);
}

function ejercicio16() {
    const countdown = (n) =>{
        let array = [];
        for (let i = n; i >= 0; i--) {
            array.push(i);
        };
        return array;
    };
    let n = parseInt(prompt(`Ingrese un número:`));    
    alert(`El aray resultante es: [${countdown(n)}]`);
}

function ejercicio17() {
    const diffMaxMin = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        return [max,min,(max-min)];
      };
    let n = 0;
    let numeros = [];
    while(!isNaN(n)){
        n = prompt(`Ingrese el N°${numeros.length+1} (para salir ingrese cualquier caracter no númerico):`);
        if(!isNaN(n) & n.length>0){
            numeros.push(n);
        }
    }
    resultado = diffMaxMin(numeros);
    alert(`En el array [${numeros}] el mayor es "${resultado[0]}" y el menor es "${resultado[1]}", su diferencia es "${resultado[2]}"`)
}

function ejercicio18() {
    const filterList = (...array)=>{
        let res = [];
        array.forEach(e=>{
            if(!isNaN(e)){
                res.push(e);
            };
        });
        return res;
    };
    let n = "";
    let valores = [];
    while(n.toLowerCase()!=="stop"){
        n = prompt(`Ingrese elemento N°${valores.length+1} (para salir ingrese la palabra 'stop':`);
        if(!isNaN(n)){
            valores.push(parseInt(n));
        }else if(n.toString().toLowerCase()!=="stop"){
            valores.push(n);
        }
        
    }
    alert(`En el array [${valores}] los números enteros son [${filterList(...valores)}]"`)
}

function ejercicio19() {
    
    let numero = parseInt(prompt(`Ingrese un número:`));  
    let repetir = parseInt(prompt(`Ingrese cantidad a repetirse:`));  
    let matriz = []
    for ( i = 1; i <= repetir; i++) {
    matriz.push(numero)
    }
    alert("el valor de la matriz es "+matriz)

}
function ejercicio20() {
    String.prototype.vreplace = function (vocal) {
        return this.replace(/[aeiou]/gi, vocal);
    };
    try {
        let cadena = prompt("Ingrese una palabra u oración:");
        let letra = prompt("Ingrese una vocal:");
        if(letra.length>1 || !"aeiou".includes(letra.toLowerCase())) throw new Error("No se acepta mas de un caracter ni consonantes!");
        alert(cadena.vreplace(letra));
    } catch (error) {
        alert(error.message);
    }
}

function ejercicio21() {
    const findNemo = (cadena) =>{
        let array =cadena.split(" ");
        return array.indexOf("Nemo")+1;
    };
    let oracion = prompt("ingrese el texto:");
    alert(`En la frase "${oracion}" la palabra "Nemo" se encuentra en la posición ${findNemo(oracion)}!`)
}

function ejercicio22() {
    try {
        const capLast = (cadena)=>{
            return cadena.toLowerCase().split(" ").map(
                function(e){
                    return e.slice(0,-1) + e.slice(-1).toUpperCase();
                }
                ).join(" ");
        };
        var frase = prompt("Ingrese una frase");
        if(frase.length===0) throw new Error("No se aceptan nulos!");
        alert(`original: ${frase}\nresultado: ${capLast(frase)}`);
    } catch (error) {
        alert(error.message);
    }
}