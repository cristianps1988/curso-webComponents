class MyCustomElement extends HTMLElement{
    constructor(){
        super();
        console.log('Objeto creado en memoria');
    }

    connectedCallback(){
        console.log('Objeto mostrado en el DOM');
    }
    disconnectedCallback(){
        console.log('Elimina objeto del DOM');
    }
}

customElements.define('my-custom-element', MyCustomElement);

document.querySelector('my-custom-element').remove();