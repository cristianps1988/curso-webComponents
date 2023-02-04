// esto soluciona el problema de reescribir estilos en el documento

class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'}); // agregar attachShadow con el modo abierto
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hola desde el template</h2>
                <div>
                    <p>Texto de ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                h2{
                    color: blue;
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // le debemos agregar shadowRoot
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);