class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>
                    <slot name="title"></slot>
                </h1>
                <p>
                    <slot name="parrafo"></slot>
                </p>                
            </section>
            ${this.getStyle()}
        `;
        return template;
    }

    getStyle(){
        return `
            <style>
                :host{
                    --color-primario: red;
                    --color-secundario: blue;
                    --color-fondo: grey;
                    --big-size: 40px;
                    --medium-size: 30px;
                    --small-size: 15px;

                    display: inline-block;
                    widh: 100%
                    min-widht: 200px;
                    max-width: 350px;
                    background: var(--color-fondo);
                    padding: 10px;
                    border: 1px solid black;
                    margin: 10px;
                    border-radius: 10px;
                }
                ::slotted(span){
                    color: var(--color-primario);
                    font-size: var(--big-size);
                }
                ::slotted(.parrafo){
                    color: var(--color-secundario);
                    font-size: var(--small-size);
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);