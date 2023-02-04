
// creando variable
const template = document.createElement('div');
template.innerHTML = `
    <style>
        p{
            color: blue;
        }
        .titulo{
            color: red;
        }
    </style>
    <p class='titulo'>Hola otra vez</p>
    <p>Texto ejemplo</p>
`

// construyendo la clase
class myElement extends HTMLElement{
    constructor(){
        super();

        // crear elemento
        this.p = document.createElement('p');
        
    }
    connectedCallback(){
        // forma manual
        this.p.textContent = 'Holis';
        this.appendChild(this.p);

        // utilizando una variable
        this.appendChild(template)
    }
}

customElements.define('my-element', myElement);