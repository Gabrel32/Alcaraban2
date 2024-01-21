class Ejervar {
    constructor(valorA,valorB,posicionA,posicionB){
        this.templade = document.getElementById("templadeEjercio").content
        this.contendorInputs = document.querySelector(".contendorInputs")
        this.fragment = document.createDocumentFragment()
        this.valorA = valorA
        this.valorB = valorB
        this.clone = this.templade.cloneNode(true)
        this.contendorB = this.clone.querySelector(".b")
        this.inputValue = this.clone.querySelector(".inputValue")
        this.btnV = this.clone.querySelector(".btnV")
        this.baneer = this.clone.querySelector(".baneer")
        this.spanDs = this.clone.querySelectorAll("span")
        this.pocisionamiento(posicionA,posicionB)
        this.btnV = this.btnV.addEventListener("click",(e)=>{
            this.verificar()
        })
        this.contendorB = this.contendorB.textContent = `b = ${this.valorB}`
        this.fragment.appendChild(this.clone)
        this.contendorInputs.appendChild(this.fragment)

    }
    verificar(){
        if (this.inputValue.value === "") {
            this.inputValue.style.outline = "2px solid #c72020"
            this.reset(this.inputValue)
        }else{
            if (parseInt(this.inputValue.value) === this.valorA) {
                this.inputValue.style.outline = "2px solid #20c720"
                this.reset(this.inputValue)    
            }else{
                this.inputValue.style.outline = "2px solid #c72020"
                this.reset(this.inputValue)    
            } 
        }
    }
    // alertar(msg,cambiante){
    //     if (cambiante) {
    //         this.baneer.style.color = "#fff"
    //         this.baneer.style.backgroundColor="#971616";
    //         this.baneer.textContent = msg
    //         setTimeout(() => {
    //             this.baneer.style.color = "#000"
    //             this.baneer.style.backgroundColor="";
    //             this.baneer.textContent = `ingresa un valor para "a"`
    //         }, 4000);
    //     }else{
    //         this.baneer.style.color = "#fff"
    //         this.baneer.style.backgroundColor="#1858ee";
    //         this.baneer.textContent = msg
    //     }

    // }
    pocisionamiento(posicionA,posicionB){
        this.spanDs.forEach((e,i)=>{
            if (posicionA === i ) {
                e.textContent = "a"
            }else if(posicionB === i){
                e.textContent = "b"
            }
        })
    }
    reset(e){
        setTimeout(() => {
            this.contador = 0
            e.style.outline = ""
        }, 1500);
    }


}

// la clase recibe dos parametros
// el primero es el alor de a el segundo es el valor de b 
// el tercero es la posicion de a y el cuarto es la posision de b
const ejercicio = new Ejervar(8,12,5,7)
const ejercicio2 = new Ejervar(24,32,5,7)

const ejercicio3 = new Ejervar(2,42,8,3)


class Tbody {
    constructor(contenedorTabla,expresion,solucion1, solucion2){
        this.contenedorTabla = document.querySelector(`.${contenedorTabla}`)
        this.templade = document.getElementById("tmpTabla").content
        this.tBody = this.contenedorTabla.querySelector(".tBody")
        this.fragment = document.createDocumentFragment()
        this.clone = this.templade.firstElementChild.cloneNode(true)
        this.InputCheck = this.clone.querySelectorAll(".InputCheck")
        this.btnTable = this.contenedorTabla.querySelector(`.btnTable`)
        this.InputCheck.forEach(e=>{
            e.addEventListener("change",()=>{
                this.check(e,this.InputCheck,solucion1.length)
            })
        })
        this.tdExpresion = this.clone.querySelector(".tdExpresion")
        this.tdExpresion.textContent = expresion
        this.InputCheckPare = this.clone.querySelectorAll(".InputCheckPare")
        this.InputCheckPare.forEach(e=>{
            e.addEventListener("change",()=>{
                this.check(e,this.InputCheckPare,1)
            })
        })
        this.contador = 0
        this.btnTable.addEventListener("click",()=>{
            this.verificar(solucion1)
            this.verificar2(solucion2)

        })  
        
        
        this.fragment.appendChild(this.clone)
        this.tBody.appendChild(this.fragment)
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
    verificar(solucion){
            this.InputCheck.forEach(e=>{
                for (let i = 0; i < solucion.length; i++) {
                    if (e.checked && parseInt(e.value) === solucion[i]) {
                        this.contador++
                    }                    
                }
                if (this.contador === solucion.length) {
                    e.parentElement.style.outline = "2px solid #20c720"
                    this.reset(e)
                }else if (this.contador > solucion.length || this.contador < solucion.length){
                     e.parentElement.style.outline = "2px solid #c72020"
                     this.reset(e)

                }
                })
        
    }
    verificar2(solucion){
            this.InputCheckPare.forEach(e=>{
                if (e.checked && e.value === solucion) {
                    e.parentElement.style.outline = "2px solid #20c720"
                    this.reset(e)
                }else if(e.checked && e.value !== solucion){
                    e.parentElement.style.outline = "2px solid #c72020"
                    this.reset(e)
                }else if(!e.checked && e.value === solucion){
                    e.parentElement.style.outline = "2px solid #c72020"
                    this.reset(e)
                }
            })
    }
    reset(e){
        setTimeout(() => {
            this.contador = 0
            e.parentElement.style.outline = ""
        }, 1500);
    }

}

// la funcion recibe 4 
// 1) la clase del contenedor donde se va a insertar
// 2) la expresion matematica que se va a evaluar
// 3) un array con hasta 4 valores se que van a verificar donde la suma es 1 resta es 2 multiplicaion es 3 y division es 4
// 4) es valor de la respuesta de la segunda pregunta 

const table = new Tbody("contenedorTabla","x + 2 - 4",[1,2],"no")
const table2 = new Tbody("contenedorTabla","2 . (5 + 8)",[4,3,2,1],"si")
const table3 = new Tbody("contenedorTabla","x / (2 + 3)",[4,1],"si")
const table4 = new Tbody("contenedorTabla","7 - 2 (x / y)",[2,4],"si")
const table5 = new Tbody("contenedorTabla","(7 - 2(x / y )+ 3)",[1,2,4],"si")

// segunda tabla
const tableSecond = new Tbody("contenedorTabla2","7 - 2 + 3 - 6",[1,2],"no")
const tableSecond2 = new Tbody("contenedorTabla2","7 -(2 + 3 - 6)",[1,2],"si")
const tableSecond3 = new Tbody("contenedorTabla2","7 / ((2 + 8) - 6)",[1,2,4],"si")
const tableSecond4 = new Tbody("contenedorTabla2","(7 + x ) / (8 - 6)",[1,2,4],"si")
const tableSecond5 = new Tbody("contenedorTabla2","7 + (x /(8 - 6))",[1,2,4],"si")
const tableSecond6 = new Tbody("contenedorTabla2","3 . 45 - (30 - 15)",[1,2,3],"si")

// definicion del objeto parrafo
