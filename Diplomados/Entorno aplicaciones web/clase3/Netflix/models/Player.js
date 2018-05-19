class Element{
    constructor(song,img){
        this._song = `${song}`;
        this._img = `./assets/miniatures/${img}`;
        this._DOMElement = null;
        this.initDOMElement();
    }

    get img(){
      return this._img;
    }

    get song(){
      return this._song;
    }

    get DOMElement(){
      return this._DOMElement;
    }

    initDOMElement(){
        var el = document.createElement("div");
        el.dataset.song = this.song;
        el.classList.add("element");

        var img = document.createElement("img");
        img.src = this.img;

        el.appendChild(img);

        /*evento*/
        el.onclick = (event) => handleClick(event);

        this._DOMElement = el;
    }

}
