window.onload=() =>{

const botonJugar = document.getElementById('jugar')
botonJugar.onclick =()=>guardarJugada()
const body= document.body
const count = 0
function guardarJugada(){

    const inputs = Array.from(document.querySelectorAll('input'))
    inputs.forEach(input => input.value= "")
    
    let valores= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]
    valores = valores.sort(()=>Math.random()-0.5)
    inputs.forEach((input,index) =>{
        input.value = valores[index]
    })
    
    


    const jugada= [inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value]

    console.log(jugada)
    return jugada
}

}