
class myElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'}); 
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                :host{
                    display: inline-block;
                    width: 100%;
                    max-width: 450px;
                    min-width: 300px;
                    font-size: 20px;
                    background: grey;
                    padding: 10px;
                    border: 2px solid black;
                    margin: 10px;
                }
                :host(.aquamarine){
                    background: aquamarine;
                }
                :host([yellow]){
                    background: yellow;
                }
                :host([yellow]) p {
                    color: blue;
                }
                :host-context(article.card){
                    display: block;
                    max-width: 90%;
                    margin: 0 auto;
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