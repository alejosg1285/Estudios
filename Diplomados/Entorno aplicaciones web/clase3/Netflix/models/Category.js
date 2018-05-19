class Category {
    constructor(title, elements = []){
        this._title = title;
        this._elements = elements;
        this._DOMElement = null;
        this.initDOMElement();
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get elements(){
        return this._elements;
    }

    get DOMElement(){
      return this._DOMElement;
    }

    initDOMElement(){
      var el = document.createElement("div");
      el.classList.add("category");

      var title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = this.title;

      el.appendChild(title);

      var sb = document.createElement("div");
      sb.classList.add("scrollingBar");

      for (var i = 0; i < this.elements.length; i++) {
        sb.appendChild(this.elements[i].DOMElement);
      }

      el.appendChild(sb);

      this._DOMElement = el;
    }
}
