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
    const res = await axios.get("http://localhost:3000/api/activites");
    let activites = res.data;
    console.log(activites);
    afficheractivites(activites);
    rechercheractvité(activites);
    filterge(activites);
    ajoutedesactivites(activites);
    suprimeractivite(activites);
    modifierfullcard(activites);
    modificationpartiele(activites);
  } catch (error) {
    console.log(error);
  }
}
activites();

let logi_name = document.getElementById("full_name");
let login_button = document.getElementById("login-button");
let login_form = document.getElementById("login");

let username= document.getElementById("user_name")


function checkingthelocalStorage() {
  if (localStorage.length > 0) {
    login_form.classList.add("hidden");
  }
}

 username.addEventListener("click",event=>{
    login_form.classList.remove("hidden")
 })

checkingthelocalStorage();

login_button.addEventListener("click", (event) => {
  event.preventDefault();
  const name = logi_name.value.trim();
  if (name.includes(" ")) {
    localStorage.setItem("full name", JSON.stringify(name));
    login_form.classList.add("hidden");

             Swal.fire({
                  title: "valid name   ",
                  text: "votre name est enregistrer ",
                  icon: "success",
          });
    
  } else {
        
       Swal.fire({
                  title: "invalid name   ",
                  text: "votre name est obliger de deux mote  ",
                  icon: "error",
          });
   
  }
});

let user_name = document.getElementById("compte");

user_name.innerText = JSON.parse(localStorage.getItem("full name"));

let form = document.forms["form-activite"];

let form_activité = document.getElementById("ajoute-activité");
let ajouter_button = document.getElementById("ajoute");
let annuler = document.getElementById("annuler");

ajouter_button.addEventListener("click", (event) => {
  form_activité.classList.remove("hidden");
});

annuler.addEventListener("click", (event) => {
  event.preventDefault();
  form_activité.classList.add("hidden");
});

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

function themecolor(activite) {
  let color;

  if (activite.theme === "jeu") {
    color = "bg-blue-500";
  } else if (activite.theme === "apprentissage") {
    color = "bg-red-500";
  } else if (activite.theme === "exercice") {
    color = "bg-green-500";
  }

  return color;
}

const activites_continer = document.getElementById("activites-continer");

function afficheractivites(activites) {
  activites_continer.innerHTML = "";

  activites.forEach((activite) => {
    let activite_card = document.createElement("div");

    activite_card.classList =
      "flex flex-col bg-white rounded-md justify-between w-100 h-100 p-6 bg-yellow-300";

    activite_card.id = `${activite.id}`;

    let théme_durée = document.createElement("div");

    théme_durée.classList = "flex justify-between";

    let théme = document.createElement("p");

    théme.classList = ` ${themecolor(activite)} text-white font-bold rounded-xl p-2 flex justify-center items-center text-xl`;
    théme.textContent = `${activite.theme}`;

    let durée = document.createElement("p");

    durée.classList = "font-bold";

    let time_icon = document.createElement("i");
    time_icon.classList = "fa-regular fa-clock";
    durée.append(time_icon, `${activite.duree} min`);

    théme_durée.append(théme, durée);

    let titre = document.createElement("h1");
    titre.classList = "text-2xl font-bold";
    titre.textContent = `${activite.titre}`;

    let discription = document.createElement("p");

    discription.textContent = `${activite.description}`;

    let objectif = document.createElement("p");

    objectif.classList = "font-bold";
    objectif.textContent = `objectif: ${activite.objectifs}`;

    let name_buttons = document.createElement("div");

    name_buttons.classList = "flex justify-between";

    let name = document.createElement("p");
    name.classList = "bg-green-200 rounded-xl p-2 font-bold";

    name.textContent = `${activite.auteur}`;

    let buttons = document.createElement("div");

    buttons.classList = "flex gap-5";

    let modifier = document.createElement("button");
    modifier.classList =
      " modifier flex justify-center items-center bg-green-500 w-7 h-7 rounded-xl";
    modifier.dataset.id = `${activite.id}`;

    let modifier_icon = document.createElement("i");
    modifier_icon.classList = "fa-solid fa-pen";

    modifier.append(modifier_icon);

    let suprimer = document.createElement("button");
    suprimer.classList =
      "suprimer flex justify-center items-center bg-red-500 w-7 h-7 rounded-xl";
    suprimer.dataset.id = `${activite.id}`;

    let suprimer_icon = document.createElement("i");
    suprimer_icon.classList = "fa-solid fa-trash-can";

    suprimer.append(suprimer_icon);

    let partiele = document.createElement("button");
    partiele.textContent = "duree";
    partiele.classList = " partiele border rounded-md w-12 h-6 bg-orange-500";
    partiele.dataset.id = `${activite.id}`;

    buttons.append(modifier, suprimer, partiele);

    name_buttons.append(name, buttons);

    activite_card.append(
      théme_durée,
      titre,
      discription,
      objectif,
      name_buttons,
    );

    activites_continer.appendChild(activite_card);
  });
}

const recherche_input = document.getElementById("recherché_input");

function rechercheractvité(activites) {
  recherche_input.addEventListener("input", (event) => {
    let text = recherche_input.value.toLowerCase();

    let result = activites.filter((activite) =>
      activite.titre.toLowerCase().includes(text),
    );
    activites_continer.innerHTML = "";

    afficheractivites(result);
  });
}

const themes = document.getElementById("théme");

function filterge(activites) {
  themes.addEventListener("change", (event) => {
    console.log(event.target.value);

    let result = activites.filter(
      (activite) =>
        activite.theme.toLowerCase() === event.target.value.toLowerCase(),
    );
    if (event.target.value === "tous les théme") {
      activites_continer.innerHTML = "";
      afficheractivites(activites);
    } else {
      activites_continer.innerHTML = "";
      afficheractivites(result);
    }
  });
}

let form_activite = document.forms["form-activite"];

let button_ajouter = document.getElementById("button-ajouter");

function ajoutedesactivites(activites) {
  button_ajouter.addEventListener("click", (event) => {
    event.preventDefault();

    let valid = true;

    if (
      /^[a-zA-Z0-9À-ÿ\s;:@\/.,'"!?()\-_#&%+=*]{5,100}$/.test(
        form_activite.titre.value,
      )
    ) {
    } else {
      form_activite.titre.value = "";
      Swal.fire({
        title: "titre est court ",
        text: "ecrier grande titre",
        icon: "error",
      });

      valid = false;
    }

    if (form_activite.theme.value === "tous les théme") {
      Swal.fire({
        title: "theme est vide  ",
        text: "le chois de them est obligatoire",
        icon: "error",
      });
      valid = false;
    }

    if (
      /^[a-zA-Z0-9À-ÿ\s;:@\/.,'"!?()\-_#&%+=*]{20,1000}$/.test(
        form_activite.discription.value,
      )
    ) {
    } else {
      form_activite.discription.value = "";
      Swal.fire({
        title: "description est court ",
        text: "vous obliger de ecrier une plus grand description ",
        icon: "error",
      });
      valid = false;
    }

    if (form_activite.duree.value >= 5 && form_activite.duree.value <= 20) {
    } else {
      form_activite.duree.value = "";
      Swal.fire({
        title: "votre duree est invalide ",
        text: "le duree es entre [5,20]",
        icon: "error",
      });
      valid = false;
    }

    if (valid) {
      console.log(form_activite.theme.value);

      const new_activite = {
        titre: form_activite.titre.value,
        theme: form_activite.theme.value,
        objectifs: form_activite.objectif.value,
        duree: Number(form_activite.duree.value),
        description: form_activite.discription.value,
        auteur: JSON.parse(localStorage.getItem("full name")),
      };

      axios
        .post("http://localhost:3000/api/activites", new_activite)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "opertaion compliter  ",
            text: "votre activite est deja ajouter ",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err.response);
        });

      form_activité.classList.add("hidden");
    }
  });

}

function suprimeractivite(activites) {
  // const  suprimer_buttons = document.querySelectorAll(".suprimer")

  activites_continer.addEventListener("click", (event) => {
    let button = event.target.closest(".suprimer");
    //  console.log(button.dataset.id)
    if (!button) {
      return;
    }
    let ID = Number(button.dataset.id);
    let activite = activites.find((activite) => activite.id === ID);
    let suprimer_id = Number(activite.id);
    console.log(suprimer_id);

    axios
      .delete(`http://localhost:3000/api/activites/${suprimer_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    Swal.fire({
      title: "opertaion compliter  ",
      text: "votre activite est deja suprimer ",
      icon: "success",
    });
  });


}




const modifierpopup = document.getElementById("modifie-activité");

const modifie_form = document.getElementById("formmodifier-activite");

const modifie_annuler = document.getElementById("annuler_modification");

const modifier_button = document.getElementById("button-modifier");

function modifierfullcard(activites) {
  let singleactivite = null;
  activites_continer.addEventListener("click", (event) => {
    let button = event.target.closest(".modifier");
    if (!button) {
      return;
    }

    singleactivite = activites.find(
      (activite) => String(activite.id) === button.dataset.id,
    );
    if (!singleactivite) {
      return;
    }
    modifie_form.modifiertitre.value = singleactivite.titre;
    modifie_form.modifiertheme.value = singleactivite.theme;
    modifie_form.modifierduree.value = singleactivite.duree;
    modifie_form.modifierobjectif.value = singleactivite.objectifs;
    modifie_form.modifierdiscription.value = singleactivite.description;

    modifierpopup.classList.remove("hidden");
  });

  modifier_button.addEventListener("click", (event) => {
    event.preventDefault();
    let valid = true;

    if (
      /^[a-zA-Z0-9À-ÿ\s;:@\/.,'"!?()\-_#&%+=*]{5,100}$/.test(
        modifie_form.modifiertitre.value,
      )
    ) {
    } else {
      modifie_form.modifiertitre.value = "";
      Swal.fire({
        title: "votre titre est invalide ",
        text: "ecrier grande titre",
        icon: "error",
      });
      valid = false;
    }

    if (modifie_form.modifiertheme.value === "tous les théme") {
        Swal.fire({
        title: "theme est vide  ",
        text: "le chois de them est obligatoire",
        icon: "error",
      });
      valid = false;
    }

    if (
      /^[a-zA-Z0-9À-ÿ\s;:@\/.,'"!?()\-_#&%+=*]{20,1000}$/.test(
        modifie_form.modifierdiscription.value,
      )
    ) {
    } else {
      modifie_form.modifierdiscription.value = "";
      Swal.fire({
        title: "description est court ",
        text: "vous obliger de ecrier une plus grand description ",
        icon: "error",
      });
      valid = false;
    }

    if (
      modifie_form.modifierduree.value >= 5 &&
      modifie_form.modifierduree.value <= 20
    ) {
    } else {
      modifie_form.modifierduree.value = "";
    Swal.fire({
        title: "votre duree est invalide ",
        text: "le duree es entre [5,20]",
        icon: "error",
      });
      valid = false;
    }

    if (valid) {
      const modification = {
        titre: modifie_form.modifiertitre.value,
        theme: modifie_form.modifiertheme.value,
        objectifs: modifie_form.modifierobjectif.value,
        duree: Number(modifie_form.modifierduree.value),
        description: modifie_form.modifierdiscription.value,
        auteur: JSON.parse(localStorage.getItem("full name")),
      };

      axios
        .put(
          `http://localhost:3000/api/activites/${singleactivite.id}`,
          modification,
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });

      modifierpopup.classList.add("hidden");

      Swal.fire({
        title: "opertaion compliter  ",
        text: "votre activite est deja modifier ",
        icon: "success",
      });
    }
  });

  modifie_annuler.addEventListener("click", (event) => {
    event.preventDefault();
    modifierpopup.classList.add("hidden");
  });
}

let partiel_button = document.getElementById("modifierpartiel_button");

let dureepartiel = document.getElementById("input_duree_modifier");

let modifier_duree = document.getElementById("duree_modifier");

function modificationpartiele(activites) {
  let modificationtarget = null;
  activites_continer.addEventListener("click", (event) => {
    let button = event.target.closest(".partiele");

    if (!button) {
      return;
    }

    modifier_duree.classList.remove("hidden");

    modificationtarget = activites.find(
      (activites) => String(activites.id) === button.dataset.id,
    );
    if (!modificationtarget) {
      return;
    }

    console.log(modificationtarget.duree);

    dureepartiel.value = modificationtarget.duree;
  });

  partiel_button.addEventListener("click", (event) => {
    event.preventDefault();
    let valid = false;
    if (dureepartiel.value >= 5 && dureepartiel.value <= 20) {
      valid = true;
    } 
    else {Swal.fire({
        title: "votre duree est invalide ",
        text: "le duree es entre [5,20]",
        icon: "error",
      });}

    if (valid) {
      const newduree = {
        duree: Number(dureepartiel.value),
      };

      axios
        .patch(
          `http://localhost:3000/api/activites/${modificationtarget.id}`,
          newduree,
        )
        .then((res) => {
          console.log(res.data);

           modifier_duree.classList.add("hidden");
           Swal.fire({
           title: "opertaion compliter  ",
           text: "votre duree deja modifier ",
           icon: "success",
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

   
  });
}

let closemodifier = document.getElementById("close");

closemodifier.addEventListener("click", (event) => {
  event.preventDefault();
  modifier_duree.classList.add("hidden");
});
