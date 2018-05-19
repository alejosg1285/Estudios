class Featured extends DOMElement{
    constructor(title, synopsis, img){
        super();
        this._title = title;
        this._synopsis = synopsis;
        this._img = img;
        this.initDOMElement();
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get img(){
        return this._img;
    }

    set img(value){
        this._img = value;
    }

    get synopsis(){
        return this._synopsis;
    }

    set synopsis(value){
        this._synopsis = value;
    }

    initDOMElement(){
      var el = document.querySelector("#featured");
      el.style.backgroundImage = `url(./assets/${this.img})`;
      var desc = document.createElement("div");
      desc.classList.add("description");

      var title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = this.title;

      var det = document.createElement("div");
      det.classList.add("details");

      var syn = document.createElement("div");
      syn.classList.add("synopsis");
      syn.innerHTML = this.synopsis;

      var facts = document.createElement("div");
      facts.classList.add("facts");

      var icon = document.createElement("div");
      icon.classList.add("icon");

      var factT = document.createElement("div");
      factT.classList.add("factText");

      facts.appendChild(icon);
      facts.appendChild(factT);

      desc.appendChild(title);
      desc.appendChild(syn);
      desc.appendChild(det);
      desc.appendChild(facts);

      el.appendChild(desc);

      this._DOMElement = el;
    }
}
