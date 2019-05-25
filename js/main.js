(() => {
	// stub
	console.log('fired!');

  //------------selecting elements--------//

  let butterSVG = document.querySelector("#butter"),
      leafSVG = document.querySelector("#leaf"),
      lego_1_SVG = document.querySelector("#lego_1_"),
      appleSVG = document.querySelector("#apple"),
      mouseSVG = document.querySelector("#mouse"),
      sunSVG = document.querySelector("#sun"),
      unbSVG = document.querySelector("#unb"),
      libSVG = document.querySelector("#lib") ;
      starSVG = document.querySelector("#star") ;
    
  //----------functions begin here--------//

  function logMyId() {
  console.log(this.id);

  this.style.opacity = 0.5;
}

  //-----------events begin here---------//

  butterSVG.addEventListener("click", logMyId);
  leafSVG.addEventListener("click", logMyId);
  legoSVG.addEventListener("click", logMyId);
  appleSVG.addEventListener("click", logMyId);
  mouseSVG.addEventListener("click", logMyId);
  sunSVG.addEventListener("click", logMyId);
  unbSVG.addEventListener("click", logMyId);
  libSVG.addEventListener("click", logMyId);
  starSVG.addEventListener("click", logMyId);
})();
