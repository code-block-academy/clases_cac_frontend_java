const btnLogin = document.querySelector("#login");
const form = document.querySelector("#form");

// btnLogin.addEventListener("mouseover", () => {
//   const inputsRequired = [
//     ...document.querySelectorAll("#form input[required]"),
//   ];
//   //   console.log(inputsRequired);
//   if (inputsRequired.every((e) => e.classList.contains("is-valid"))) {
//     btnLogin.removeAttribute("disabled");
//   }
// });

btnLogin.addEventListener("mouseover", () => {
  const inputsRequiered = Array.from(
    document.querySelectorAll("#form input[required]")
  );
  if (inputsRequiered.every((e) => e.classList.contains("is-valid"))) {
    btnLogin.removeAttribute("disabled");
  }
});

form.addEventListener("focusout", validarInput);

function validarInput(ev) {
  console.log(ev);
  const input = ev.target;
  let mesagge = "";
  input.classList.remove("is-valid", "is-invalid");
  input.nextElementSibling.classList.add("d-none");
  switch (input.type) {
    case "email":
      if (!input.value.includes("@")) {
        mesagge = "el usuario no contiene @";
      }
      if (mesagge.length != 0) {
        input.classList.add("is-invalid");
        input.nextElementSibling.innerText = mesagge;
        input.nextElementSibling.classList.remove("d-none");
        return;
      } else {
        input.classList.add("is-valid");
      }
      break;
    case "password":
      input.classList.add(input.value.length > 6 ? "is-valid" : "is-invalid");
    //   if(input.value.length > 6 ){
    //     input.classList.add("is-valid");
    //   }else{
    //     input.classList.add("is-invalid");
    //   }
  }
}
