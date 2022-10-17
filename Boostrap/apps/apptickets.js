// const comprador=
// {
//     name:"",
//     lastname:"",
//     email:"",
//     units:"",
//     category:"",
//     total:"",
// }
// const student=0.8
// const Trainee=0.5
// const Junior=0.15
const ticketValue=200


const buttonBuy=document.querySelector(".buy-button")
const deleteBuy=document.querySelector(".delete-button")
const fisrtName=document.querySelector(".first-name")
const lastName=document.querySelector(".last-name")
const elementEmail=document.querySelector(".email")
const unitsToBuy=document.querySelector(".units")
const typeSelected=document.querySelector(".type-selected")
const elementTotal=document.querySelector(".total")


buttonBuy.addEventListener("click",()=>{
const buyer=getValues()

const total=calculateTotal(buyer)
console.log(total)
// console.log(buyer)
elementTotal.innerHTML=`Total a Pagar: $ ${total}`


})


function getValues(){
const name=fisrtName.value
const lastname=lastName.value
const email=elementEmail.value
const units=unitsToBuy.value
const category=typeSelected.options[typeSelected.selectedIndex].text

//console.log(name,lastname,units,category)
//console.log(typeSelected)

return obj={name,lastname,email,units,category}

}

function calculateTotal(buyer){
let discount=1
const total=0
if(buyer.category==="Junior")
discount=0.75;
if(buyer.category==="Trainee")
discount=0.5;
if(buyer.category==="Estudiante")
discount=0.2;

// console.log(buyer.units)
// console.log(ticketValue)
// console.log(discount)


// console.log(Number(buyer.units)*ticketValue*discount)

return Number(buyer.units)*ticketValue*discount

}


deleteBuy.addEventListener("click",()=>{
    cleanValues()
     })

    function cleanValues(){
        fisrtName.value=""
         lastName.value=""
         elementEmail.value=""
         unitsToBuy.value="1"
         typeSelected.value="Ninguno Seleccionado"
         elementTotal.value=""
    }