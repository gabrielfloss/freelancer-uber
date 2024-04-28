

function chamarFormulario() {
   const form = document.querySelector(".fale-conosco")
   const mask = document.querySelector(".mask")

   
   form.style.left = "40%"
   form.style.trasform = "translateX(-10%)"
   mask.style.visibility = "visible"
}


function clickMask() {
   const form = document.querySelector(".fale-conosco")
   const mask = document.querySelector(".mask")

   form.style.left = "-300px"
   form.style.transform = "translateX (0);"
   mask.style.visibility = "hidden"
}


