var p = new Player(null);
var _app = {
  featured: {},
  categories: []
};

function loadApp(){
  if(self.fetch) { //Si el fetch API está disponible en el navehador
      fetch("http://127.0.0.1:8887/Netflix/app.json",
      {
        method: 'GET',
        mode: 'cors',

      })
      .then((db)=> {//cuando el archivo ya esté leído
        db.json().then( (json)=> {// entonces lo parseamos a JSON
          let app = json;
          //Carga de Featured
          let description = app.featured.description;
          _app.featured = new Featured(description.title,description.synopsis,app.featured.img);
          //Carga de categorias
          let categories = app.content.categories;
          for (var i = 0; i < categories.length; i++) {
            let elements = categories[i].scrollingBar;
            var elementos = [];
            for (var j = 0; j < elements.length; j++) {
              let el = new Element(elements[j].song,elements[j].img);
              el.DOMElement.dataset.id = j;
              elementos.push(el);
            }
            let c = new Category(categories[i].title,elementos);
            c.DOMElement.dataset.id = i;
            _app.categories.push(c);
            _app.categories[i].render("#content");
          }
        });
      });
      console.log(_app);
  } else {
      alert("Pailas");
  }
}

function handleClick(e) {
  var parent = e.target.parentElement;

  var isPlaying = document.querySelector(".playing");
  if( isPlaying != parent ){
    p.src = `./assets/songs/${parent.dataset.song}`;
  }
  let id = parent.dataset.id;
  let parentId = parent.parentElement.parentElement.dataset.id;
  _app.categories[parentId].elements[id].playToggle();
  p.element = _app.categories[parentId].elements[id];
  p.play();
}
