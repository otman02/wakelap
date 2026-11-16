

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
    form_activité.classList.add("hidden")
})


// console.log(JSON.parse(localStorage.getItem("full name")))
