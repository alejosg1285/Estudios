class Player{
    constructor(src, ...params){
        this._src = src;
        this._controls = true;
        this._DOMElement = null;
        this.initDOMElement();
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

    get DOMElement(){
      return this._DOMElement;
    }

    initDOMElement(){
        var playerE = document.createElement("audio");
        playerE.src = this.src;
        playerE.controls = this.controls;
        this._DOMElement = playerE;
    }

    play(){
        try{
            this.DOMElement.play();
        } catch (error){
            console.log(error);
        }
    }

    stop(){
        try{
            this.DOMElement.pause();
            this.DOMElement.currentTime = 0;
        } catch (error){
            console.log(error);
        }
    }
}
