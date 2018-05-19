class Element extends DOMElement{
    constructor(song,img){
        super();
        this._song = `${song}`;
        this._img = `./assets/miniatures/${img}`;
        this.initDOMElement();
    }

    get img(){
      return this._img;
    }

    get song(){
      return this._song;
    }

    initDOMElement(){
        var el = document.createElement("div");
        el.dataset.song = this.song;
        el.classList.add("element");

        var progressBar = document.createElement("div");
        progressBar.classList.add("progressBar");

        var img = document.createElement("img");
        img.src = this.img;

        el.appendChild(img);
        el.appendChild(progressBar);

        /*evento*/
        el.onclick = (event) => handleClick(event);

        this._DOMElement = el;
    }

    playToggle(){
      console.log(this.DOMElement.dataset.paused);
      if(this.DOMElement.dataset.paused == "true" ||  this.DOMElement.dataset.paused == undefined){
        console.log("now playing");
        this.play();
      }else{
        console.log("now pausing");
        this.pause();
      }
    }

    pause(){
      this.removeState();
      this.DOMElement.classList.add("paused");
      this.DOMElement.dataset.paused = "true"
    }

    play(){
      this.removeState();
      this.DOMElement.classList.add("playing");
      this.DOMElement.dataset.paused = "false"
    }

    removeState(){
      this.DOMElement.classList.remove("paused");
      this.DOMElement.classList.remove("playing");
    }

}
