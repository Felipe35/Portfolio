/*====Contact Modal Windonw===*/
const modalContact = document.querySelector(".modal_contact_container");
const btnOpenModalContac = document.querySelector(".container_contact");
const btnCloseModalContac = document.querySelector(".btn_close");
const overlayBtn = document.querySelector(".overlay"); //--This overlay works with Contact modal and Websites modal

/* Contact Modal Window Inputs */
const modalInputName = document.querySelector(".name");
const modalInputLastName = document.querySelector(".lastName");
const modalInputEmail = document.querySelector(".email");
// const modalInputs = document.querySelectorAll(".modal_input");
/* Modal Contact Button */
const bntContact = document.querySelector(".modal_submit");

//Navegator btn window
const navMenu = document.querySelector(".nav_ul");
const btnToggle = document.querySelector(".btn_nav");

// const btnDisplayLi = document.querySelector(".nav_li");
// btnDisplayLi.setAttribute("onclick", "optionSelected(this)");

const openNav = function () {
  navMenu.classList.toggle("nav_ul-visible");

  navMenu.classList.contains("nav_ul-visible")
    ? btnToggle.setAttribute("aria-label", "Close Menu")
    : btnToggle.setAttribute("aria-label", "Open Menu");
};

btnToggle.addEventListener("click", openNav);

const openModalContact = function () {
  modalContact.classList.remove("hiddenContact");
  overlayBtn.classList.remove("hiddenContact");
};

const closeModalContact = function () {
  modalContact.classList.add("hiddenContact");
  overlayBtn.classList.add("hiddenContact");
};

btnOpenModalContac.addEventListener("click", openModalContact);
btnCloseModalContac.addEventListener("click", closeModalContact);

document.addEventListener("keydown", function (event) {
  // console.log(event.key);
  if (
    event.key === "Escape" &&
    !modalContact.classList.contains("hiddenContact")
  ) {
    closeModalContact();
  }
});

//=============================================//
//============================================//

//Code for Modal Window Websites Proyects

const modal = document.querySelector(".modal-container");
const btnsOpenModal = document.querySelector(".work_btn");
const btnsCloseModal = document.querySelector(".modal_btn_cerrar");

console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlayBtn.classList.remove("hiddenContact");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlayBtn.classList.add("hiddenContact");
};
btnsOpenModal.addEventListener("click", openModal);
btnsCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  // console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//=============================================//
//============================================//
/*===Inputs Warning Messages for contact Modal Window===*/
/*===In Development====*/
const warningMessageCorrectString = function (str) {
  const nameStr = fixString(modalInputName.value);
  const lastNameStr = fixString(modalInputLastName.value);
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    str.value.match(validation) &&
    nameStr === nameStr &&
    lastNameStr === lastNameStr
  ) {
    console.log(nameStr, lastNameStr);
    console.log("You have entered a valid addres");
  } else {
    console.log("You have entered an invalid addres");
  }
  return str;
};
// warningMessageCorrectString("anfepehe1@hotmail.com");

const checkSpaces = (letter) =>
  letter.includes(" ") ? letter.replace(/ /g, "") : letter;

const fixString = function (str) {
  const toLower = str.toLowerCase().trim();
  const toUpper = toLower.replace(toLower[0], toLower[0].toUpperCase());
  const goodStr = checkSpaces(toUpper);
  return goodStr;
};

bntContact.addEventListener("click", function (e) {
  e.preventDefault();

  // const nameStr = fixString(modalInputName.value);
  // const lastNameStr = fixString(modalInputLastName.value);
  // const emailStr = fixString(modalInputEmail.value);/
  const validationEmail = warningMessageCorrectString(modalInputEmail);

  // const upper = checkInput.replace(checkInput[0], checkInput[0].toUpperCase());
});
// const firstName = document.querySelector(".name");
// const lastName = document.querySelector(".lastName");
// const email = document.querySelector(".email");

// const dataType = function (text) {
//   if (typeof text === typeof "string") {
//     console.log("it is a string");
//   } else {
//     console.log("it is a number");
//   }
// };

// dataType("1");

// firstName.addEventListener("input", function () {
//   const dataSave = [firstName.textContent];
//   console.log(dataSave);
//   dataType();
// });

// const inputWarningMsn = function () {
//   if (typeof firstName === typeof "error") {
//     console.warn("es un string");
//   } else {
//     console.warn("es numero");
//   }
// };

// console.log(inputWarningMsn(firstName));

//=============================================//
//============================================//

// const open = document.getElementById('open');
// const modal_container = document.getElementById('modal_container');
// const close = document.getElementById('close');

// open.addEventListener('click', () => {
//     modal_container.classList.add('show');
// });

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// })
// //============================================

// // function ButtomModal(open, close, modal) {
// //     this.open = open;
// //     this.close = close;
// //     this.modal = document.getElementById('modal_container');

// // }

// // ButtomModal.prototype.ClickOpen = function () {
// //     const openbotton = document.getElementById('open');
// //     openbotton.addEventListener('click', () => {
// //         modal_container.classList.add('show');
// //     })

// // }
// // const bottton = new ButtomModal('hola soy boton');
// // console.log(bottton);
// // console.log(ButtomModal);

// /*=================================*/
// /*====Boton Responsive Menu Bar===*/

// var menu = document.getElementById("header");
// var navegador = document.getElementById("navegador");

// btn_nav.addEventListener('click', () => {
//     menu.classList.toggle('move_content');
//     navegador.classList.toggle('move_nav');
// });

// btn_nav.addEventListener('click',() => {
//     tittle.classList.remove('logo-remove');
// });

// class TextoAnimado {
// 	constructor(id, objetivo){
// 	this.texto = document.getElementById(id);
// 	this.objetivo = document.getElementById(objetivo);
// 	this.letras = this.texto.innerText.split("");

// 		this.texto.innerText = '';

// 		this.letras.forEach((letra) => {
// 			this.texto.innerHTML = this.texto.innerHTML + `
// 			<div>
// 				<span>${letra}</span>
// 				<span class="segunda-linea">${letra}</span>
// 			</div>
// 			`

// 		});

// 		this.objetivo.addEventListener('mouseenter', () =>{
// 			let cuenta = 0;

// 			const intervalo = setInterval(() => {
// 				if(cuenta < this.texto.children.length) {
// 					this.texto.children[cuenta].classList.add('animacion');
// 					cuenta = cuenta + 1;
// 				}else {
// 					clearInterval(intervalo)
// 				}

// 			}, 30);
// 		});

// 		this.objetivo.addEventListener('mouseleave', () =>{
// 			let cuenta = 0;

// 			const intervalo = setInterval(() => {
// 				if(cuenta < this.texto.children.length) {
// 					this.texto.children[cuenta].classList.remove('animacion');
// 					cuenta = cuenta + 1;
// 				}else {
// 					clearInterval(intervalo)
// 				}

// 			}, 30);
// 		});

// 			}
// 		}

// new TextoAnimado('logo', 'logotype');

//Codigo para redireccionar a Info.html
