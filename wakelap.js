

// axios.get("http://localhost:3000/api/activites")
// .then(res=>{
//     let activites=res.data
//    console.log(activites)
// })
// .catch(err=>{
//     console.log(err)
// })



 async function activites() {
    try {
        const res = await axios.get("http://localhost:3000/api/activites")
        let activites=res.data
        console.log(activites)
        afficheractivites(activites)
    }
    catch(error){console.log(error)}
    
 }
activites()


let logi_name = document.getElementById("full_name")
let login_button = document.getElementById("login-button")
let login_form =document.getElementById("login")


function checkingthelocalStorage(){
    
if (localStorage.length>0){

      login_form.classList.add("hidden")
}

}

checkingthelocalStorage()



login_button.addEventListener("click",(event)=>{
     const name = logi_name.value.trim()
    if (name.includes(" ")){
        localStorage.setItem("full name",JSON.stringify(name))
        login_form.classList.add("hidden")
    }
    else alert("you must enter you full name ")
    
})



let form = document.forms["form-activite"]

let form_activité=document.getElementById("ajoute-activité")
let ajouter_button = document.getElementById("ajoute")
let annuler = document.getElementById("annuler")


ajouter_button.addEventListener("click",(event)=>{
    form_activité.classList.remove("hidden")
})


annuler.addEventListener("click",(event)=>{
    event.preventDefault()
    form_activité.classList.add("hidden")
})


// console.log(JSON.parse(localStorage.getItem("full name")))









//   <div id="activité-card" class=" flex flex-col bg-white rounded-md justify-between w-100 h-100 p-6">

//           <div class="flex justify-between">
//             <p class="bg-orange-200 rounded-xl p-2 flex justify-center items-center text-xl">Jeu</p>
//             <p><i class="fa-regular fa-clock"></i>15min</p>
//           </div>

//           <h1 class="text-2xl font-bold">Le défi des mots interdits</h1>
//           <p>Faire deviner un concept étudié sans utiliser les trois mots les plus évidents. Une activité rapide pour réactiver les connaissances.</p>
//           <p class="font-bold">Objectif : Reformuler une notion et mobiliser le vocabulaire du cours.></p>

//           <div class="flex justify-between">
            
//             <p class="bg-green-200 rounded-xl p-2 ">Camille Martin</p>

//            <div class="flex gap-5 ">
//             <p class="flex justify-center items-center bg-green-500 w-7 h-7 rounded-xl"><i class="fa-solid fa-pen   "></i></p>
//             <p class="flex justify-center items-center bg-red-500 w-7 h-7 rounded-xl"> <i class="fa-solid fa-trash-can   "></i></p>
//            </div> 

//           </div>


const activites_continer=document.getElementById("activites-continer")

function afficheractivites(activites){
    
   activites.forEach(activite=>{

      
let activite_card = document.createElement("div")

activite_card.classList="flex flex-col bg-white rounded-md justify-between w-100 h-100 p-6"

let théme_durée = document.createElement("div")

théme_durée.classList="flex justify-between"

let théme = document.createElement("p")

théme.classList="bg-orange-200 rounded-xl p-2 flex justify-center items-center text-xl"
théme.textContent=`${activite.theme}`

let durée= document.createElement("p")


let time_icon= document.createElement("i")
time_icon.classList="fa-regular fa-clock"
durée.append(time_icon,`${activite.duree} min`)

théme_durée.append(théme,durée)

let titre= document.createElement("h1")
titre.classList="text-2xl font-bold"
titre.textContent=`${activite.titre}`


let discription = document.createElement("p")

discription.textContent=`${activite.description}`

let objectif = document.createElement("p")

objectif.classList="font-bold"
objectif.textContent=`objectif: ${activite.objectifs}`

let name_buttons= document.createElement("div")

name_buttons.classList="flex justify-between"


let name= document.createElement("p")
name.classList="bg-green-200 rounded-xl p-2"

name.textContent=`${activite.auteur}`


let buttons= document.createElement("div")

buttons.classList="flex gap-5"

let modifier=document.createElement("button")
modifier.classList="flex justify-center items-center bg-green-500 w-7 h-7 rounded-xl"

let modifier_icon=document.createElement("i")
modifier_icon.classList="fa-solid fa-pen"

modifier.append(modifier_icon)


let suprimer = document.createElement("button")
suprimer.classList="flex justify-center items-center bg-red-500 w-7 h-7 rounded-xl"

let suprimer_icon=document.createElement("i")
suprimer_icon.classList="fa-solid fa-trash-can"

suprimer.append(suprimer_icon)

buttons.append(modifier,suprimer)

name_buttons.append(name,buttons)

activite_card.append(théme_durée,titre,discription,objectif,name_buttons)

activites_continer.appendChild(activite_card)


   })
    
}

