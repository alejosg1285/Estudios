class Player extends DOMElement{
    constructor(src, ...params){
        super();
        this._src = src;
        this._controls = true;
        this._element = null;
        this.initDOMElement();
        this.DOMElement.ontimeupdate = () => this.updateElement();
    }

    set element(value){
      this._element = value;
    }

    get element(){
      return this._element;
    }

    get src(){
        return this._src;
    }

    set src (value){
        this._src = value;
        if(this.DOMElement != null){
          this.DOMElement.src = this.src;
        }
    }

    get controls(){
        return this._controls;
    }

    set controls (value){
        this._controls = value;
    }

    initDOMElement(){
        var playerE = document.createElement("audio");
        playerE.src = this.src;
        playerE.controls = this.controls;
        this._DOMElement = playerE;
    }

    play(){
        try{
            if(this.DOMElement.paused){
              this.DOMElement.play();
            }else{
              this.pause();
            }
        } catch (error){
            console.log(error);
        }
    }
    pause(){
        try{
            this.DOMElement.pause();
        } catch (error){
            console.log(error);
        }
    }
    stop(){
      this.pause();
      this.DOMElement.currentTime = 0;
    }

    updateElement(){
      if(this.element != null){
        var w = (this.DOMElement.currentTime / this.DOMElement.duration) * 100;
        console.log(w);
        var el = this.element.DOMElement.querySelector(".progressBar");
        el.style.width = `${w}%`;
      }
    }
}
