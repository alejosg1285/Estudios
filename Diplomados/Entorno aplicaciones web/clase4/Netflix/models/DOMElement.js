class DOMElement{
    constructor(){
        this._DOMElement = null;
    }

    get DOMElement(){
      return this._DOMElement;
    }

    initDOMElement(){
      var el = document.createElement("div");
      this._DOMElement = el;
    }

    render(parent){
      var padre = ( typeof parent != 'object') ? document.querySelector(parent) : parent;
      padre.appendChild(this.DOMElement);
    }
}
