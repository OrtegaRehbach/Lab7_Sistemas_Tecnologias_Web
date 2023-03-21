fetch('./app/webcomponents/nav-bar/navBar.html')
    .then(response => response.text())
    .then(templateHtml => start(templateHtml));

function start(templateHtml) {
    class navBar extends HTMLElement {
        constructor() {
            super();
            let shadownDOM = this.attachShadow({ mode: 'open' });
            shadownDOM.innerHTML = templateHtml;

            let estilos = document.createElement('link');
            estilos.setAttribute('rel', 'stylesheet');
            estilos.setAttribute('href', './app/webcomponents/nav-bar/navBar.css');
            shadownDOM.appendChild(estilos);
        }

        connectedCallback() {
            console.log('Custom component element added to page.');
            const { shadowRoot } = this;
            
            if (this.hasAttribute("link1-href")) {
                shadowRoot.getElementById("link1").href = this.getAttribute("link1-href");  
            }
            if (this.hasAttribute("link2-href")) {
                shadowRoot.getElementById("link2").href = this.getAttribute("link2-href");  
            }
            if (this.hasAttribute("link3-href")) {
                shadowRoot.getElementById("link3").href = this.getAttribute("link3-href");  
            }
            
        }

    }

    customElements.define('nav-bar', navBar);
}