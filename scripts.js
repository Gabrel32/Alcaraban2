class Ejervar {
    constructor(contenedor){
        this.templade = document.getElementById("templadeEjercio")
        this.contendorInputs = document.querySelector(".contendorInputs")
        this.fragment = document.createDocumentFragment()

        // creacion de el contendor de los botones y los botones
        this.contendorButton = document.createElement("div")
        this.contendorButton.className = "contendorButton"
        this.btnV = document.createElement("button")
        this.btnV.className = "btnV styleBtn"
        this.btnV.type = "button"
        this.btnR = document.createElement("button")
        this.btnR.className = "btnR styleBtn"
        this.btnR.type = "button"

        this.contendorButton.appendChild(this.btnR)
        this.contendorButton.appendChild(this.btnV)
        this.contendorInputs.appendChild(this.contendorButton)


        this.contendorInputs.addEventListener("click", (event) => {
            if (event.target.classList.contains("btnV") && this.inputValues.length > 0) {
                this.inputValues.forEach(e=>{
                    this.verificar(e);
                })
            }else if (event.target.classList.contains("btnR")) {
                    this.limpiar(this.inputValues);
            
            }
          });
        

    }
    verificar(input) {
        const valorA = parseInt(input.dataset.valorA);
        if (input.value === "") {
          input.style.outline = "2px solid #e17055";
        } else if (parseInt(input.value) === valorA) {
          input.style.outline = "2px solid #797c";
        } else {
          input.style.outline = "2px solid #e17055";
        }
      }
    crear(valorA,valorB,posicionA,posicionB){
        this.clone = this.templade.content.firstElementChild.cloneNode(true)
        this.contendorB = this.clone.querySelector(".b")
        this.spanDs = this.clone.querySelectorAll("span")
        this.input = this.clone.querySelector("input")
        this.input.dataset.valorA = valorA
        this.pocisionamiento(posicionA,posicionB)
        this.contendorB = this.contendorB.textContent = `b = ${valorB}`
        this.fragment.appendChild(this.clone)
        this.contendorInputs.appendChild(this.fragment)
        this.inputValues = this.contendorInputs.querySelectorAll(".inputValue")

    }
    pocisionamiento(posicionA,posicionB){
        this.spanDs.forEach((e,i)=>{
            if (posicionA === i ) {
                e.textContent = "a"
            }else if(posicionB === i){
                e.textContent = "b"
            }
        })
    }
    limpiar(a){
        a.forEach(e=>{
            e.value = ""
        })
    }


}

// la clase recibe dos parametros
// el primero es el alor de a el segundo es el valor de b 
// el tercero es la posicion de a y el cuarto es la posision de b
const ejercicio = new Ejervar()
ejercicio.crear(8,12,4,6)
ejercicio.crear(24,32,4,6)



// const ejercicio2 = new Ejervar(24,32,5,7)

// const ejercicio3 = new Ejervar(2,42,8,3)


class Tbody {
    constructor(contenedorTabla){
        this.contenedorTabla = document.querySelector(`.${contenedorTabla}`)
        this.templade = document.querySelector("#tmpTabla")
        this.fragment = document.createDocumentFragment()
        this.clone = this.templade.content.cloneNode(true)
        this.tBody = this.clone.querySelector(".tBody")
        this.btnTable = this.clone.querySelector(".btnTableV")
        this.btnTableR = this.clone.querySelector(".btnTableR")   
        this.fragment.appendChild(this.clone)
        this.contenedorTabla.appendChild(this.fragment)

        
        
    }
    asignadoEvento(solucion1, solucion2){
        this.trS = this.tBody.querySelectorAll(".trTabla")
        
        this.trS.forEach(e=>{
            let inputs = e.querySelectorAll(".InputCheck")
            inputs.forEach(e=>{
                e.addEventListener("change",()=>{
                    this.check(e,inputs,solucion1.length)
                })
            })
        })
        this.trS.forEach(e=>{
            let inputs = e.querySelectorAll(".InputCheckPare")
            inputs.forEach(e=>{
                e.addEventListener("change",()=>{
                    this.check(e,inputs,1)
                })
            })
        })
        // this.btnTable.addEventListener("click",()=>{
        //     this.contadores = []
        //     this.trS.forEach(e=>{                
        //         for (let i = 0; i < this.contadores.length; i++) {
        //         if (this.contadores[i] === solucion1[i]) {
        //             // this.verificar(e,solucion1).style.outline = "2px solid red"
        //             }
                    
        //         }
        //     })
            
        //         // a.forEach(e=>{
        //         // })
        //         // this.verificar2(e,solucion2
            
        // })
        this.btnTableR.addEventListener("click",()=>{
            this.trS.forEach(e=>{
                this.inputs = e.querySelectorAll(".InputCheck")
                this.limpiar(this.inputs)      
            })
            this.trS.forEach(e=>{
                this.inputsPare =e.querySelectorAll(".InputCheckPare")
                this.limpiar(this.inputsPare)      

            })
        
    })
    }
    crear(expresion,solucion1,solucion2){
        // creando tr 
        this.trTabla = document.createElement("tr")
        this.trTabla.className = "trTabla"
        // creando td expresion
        this.tdExpresion = document.createElement("td")
        this.tdExpresion.className = "tdExpresion"
        this.tdExpresion.textContent = expresion;

        // creando td de los inputs input
        this.tdInput = document.createElement("td")
        this.tdInput.className = "tdInput"
        // creando label y input sumas
        this.labelSumas = document.createElement("label")
        this.labelSumas.textContent = "sumas"
        this.inputSumas = document.createElement("input")
        this.inputSumas.value = "1";
        this.inputSumas.type = "checkbox";
        this.inputSumas.className = "InputCheck"
        // creando input restas
        this.labelRestas = document.createElement("label")
        this.labelRestas.textContent = "Restas"
        this.inputRestas = document.createElement("input")
        this.inputRestas.value = "2";
        this.inputRestas.type = "checkbox";
        this.inputRestas.className = "InputCheck"
        // creando input multiplicacion
        this.labelMultiplicacion = document.createElement("label")
        this.labelMultiplicacion.textContent = "multiplicacion"
        this.inputMultiplicacion = document.createElement("input")
        this.inputMultiplicacion.value = "3";
        this.inputMultiplicacion.type = "checkbox";
        this.inputMultiplicacion.className = "InputCheck"
        // creando input division
        this.labelDivision = document.createElement("label")
        this.labelDivision.textContent = "division"
        this.inputDivision = document.createElement("input")
        this.inputDivision.value = "4";
        this.inputDivision.type = "checkbox";
        this.inputDivision.className = "InputCheck"

        // anadiendo al td
        this.tdInput.appendChild(this.labelSumas)
        this.tdInput.appendChild(this.inputSumas)
        this.tdInput.appendChild(this.labelRestas)
        this.tdInput.appendChild(this.inputRestas)
        this.tdInput.appendChild(this.labelMultiplicacion)
        this.tdInput.appendChild(this.inputMultiplicacion)
        this.tdInput.appendChild(this.labelDivision)
        this.tdInput.appendChild(this.inputDivision)

        // creando el td parentesis
        this.tdParentesis = document.createElement("td")
        this.tdParentesis.classList = "tdParentesis"
        // creando input si
        this.labelSi = document.createElement("label")
        this.labelSi.textContent = "si"
        this.inputSi = document.createElement("input")
        this.inputSi.value = "si";
        this.inputSi.type = "checkbox";
        this.inputSi.className = "InputCheckPare"
        // creando input no
        this.labelNo = document.createElement("label")
        this.labelNo.textContent = "no"
        this.inputNo = document.createElement("input")
        this.inputNo.value = "no";
        this.inputNo.type = "checkbox";
        this.inputNo.className = "InputCheckPare"

        this.tdParentesis.appendChild(this.labelSi);
        this.tdParentesis.appendChild(this.inputSi);
        this.tdParentesis.appendChild(this.labelNo);
        this.tdParentesis.appendChild(this.inputNo);
        
        // insertando en el tr los td
        this.trTabla.appendChild(this.tdExpresion)
        this.trTabla.appendChild(this.tdInput)
        this.trTabla.appendChild(this.tdParentesis)
        this.tBody.appendChild(this.trTabla)
        
        this.asignadoEvento(solucion1,solucion2)
        
        
    }
    check(e,inputs,maxSelected){
        if (e.checked) {
            this.count = 0 
            inputs.forEach(a=>{

                if (a !== e && a.checked) {
                    this.count++
                    if (this.count >= maxSelected) {
                        a.checked = false
                    }
                }
            })    
        }
    }
    verificar(e,solucion){
        let inputs = e.querySelectorAll(".InputCheck")
        inputs.forEach(a=>{
            solucion.forEach(e=>{
                // for (let i = 0; i < inputs.length; i++) {
                    if ( a.checked && parseInt(a.value) === e) {        
                        this.contadores.push(e)
                        return a
                        } 
                    // }
                })
            })   
    
        
    }
    verificar2(e,solucion){
        let inputs = e.querySelectorAll(".InputCheckPare")
        let contador = 0
        for (let i = 0; i < inputs.length; i++) {
            if ( inputs[i].checked && inputs[i].value === solucion) {
                this.contador++
                inputs[i].parentElement.style.outline = " 2px solid #797c"
            }
            if (this.contador === 1) {
            }else{
                inputs[i].parentElement.style.outline = " 2px solid #e17055"

            }                 
        }      
        
        }
        limpiar(a){
            a.forEach(e=>{
                e.checked = false
            })
        }
    }



// la funcion recibe 4 
// 1) la clase del contenedor donde se va a insertar
// 2) la expresion matematica que se va a evaluar
// 3) un array con hasta 4 valores se que van a verificar donde la suma es 1 resta es 2 multiplicaion es 3 y division es 4
// 4) es valor de la respuesta de la segunda pregunta 

const table = new Tbody("contenedorTabla")
table.crear("x + 2 - 4",[1,2],"no")
table.crear("2 . (5 + 8)",[2,1],"si")
table.crear("x / (2 + 3)",[4,1],"si")
table.crear("7 - 2 (x / y)",[2,4],"si")
table.crear("(7 - 2(x / y )+ 3)",[1,2,4],"si")

// // segunda tabla
const tableSecond = new Tbody("contenedorTabla2")
tableSecond.crear("7 - 2 + 3 - 6",[1,2],"no")
tableSecond.crear("7 -(2 + 3 - 6)",[1,2],"si")
tableSecond.crear("7 / ((2 + 8) - 6)",[1,2,4],"si")
tableSecond.crear("(7 + x ) / (8 - 6)",[1,2,4],"si")
tableSecond.crear("7 + (x /(8 - 6))",[1,2,4],"si")
tableSecond.crear("3 . 45 - (30 - 15)",[1,2,3],"si")

// // definicion del objeto parrafo
