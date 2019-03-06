var fontSize
(function(doc,win){
	
var docEl=doc.documentElement,resizeEvt='orientationchange'in window?'orientationchange':'resize',recalc=function(){
	  var clientWidth=docEl.clientWidth;
	  fontSize = 100*(clientWidth/640)
	  if(fontSize>=100){
		  fontSize=100
	  }
	  if(!clientWidth)return;
	  docEl.style.fontSize=fontSize+'px'
	  docEl.style.display = 'block'
	};
	if(!doc.addEventListener)return;win.addEventListener(resizeEvt,recalc,false);
	doc.addEventListener('DOMContentLoaded',recalc,false)
})(document,window);tener('DOMContentLoaded',recalc,false)
})(document,window);
