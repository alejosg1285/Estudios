class Category extends DOMElement{
    constructor(title, elements = []){
        super();
        this._title = title;
        this._elements = elements;
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
