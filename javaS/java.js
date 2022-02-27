class TextoAnimado {
	constructor(id, objetivo){
	this.texto = document.getElementById(id);
	this.objetivo = document.getElementById(objetivo);
	this.letras = this.texto.innerText.split("");

		this.texto.innerText = '';

		this.letras.forEach((letra) => {
			this.texto.innerHTML = this.texto.innerHTML + `
			<div>
				<span>${letra}</span>
				<span class="segunda-linea">${letra}</span>
			</div>	
			`

		});

		this.objetivo.addEventListener('mouseenter', () =>{
			let cuenta = 0;

			const intervalo = setInterval(() => {
				if(cuenta < this.texto.children.length) {
					this.texto.children[cuenta].classList.add('animacion');
					cuenta = cuenta + 1;
				}else {
					clearInterval(intervalo)
				}

			}, 30);
		});

		this.objetivo.addEventListener('mouseleave', () =>{
			let cuenta = 0;

			const intervalo = setInterval(() => {
				if(cuenta < this.texto.children.length) {
					this.texto.children[cuenta].classList.remove('animacion');
					cuenta = cuenta + 1;
				}else {
					clearInterval(intervalo)
				}

			}, 30);
		});


			}
		}

new TextoAnimado('logo', 'logotype');


//Codigo para redireccionar a Info.html

