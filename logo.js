/* =====================================================================
   School logo. Upload the logo next to index.html with one of these names:
   logo.png, logo.jpg, logo.jpeg, logo.webp, or logo.svg
   Every image marked data-logo shows the first one found. With no logo,
   the header shows a red star instead.
   ===================================================================== */
(function(){
  var names=["logo.png","logo.jpg","logo.jpeg","logo.webp","logo.svg"];
  document.head.insertAdjacentHTML("beforeend","<style>img[data-logo][hidden]{display:none!important}</style>");
  function show(url){
    window.WIN_LOGO=url;
    document.querySelectorAll("img[data-logo]").forEach(function(img){
      if(url){img.src=url;img.hidden=false;return}
      var star=img.nextElementSibling;if(star&&star.classList.contains("mark"))star.hidden=false;
      img.remove();
    });
  }
  function find(k){
    if(k>=names.length)return show("");
    var probe=new Image();
    probe.onload=function(){show(new URL(names[k],location.href).href)};
    probe.onerror=function(){find(k+1)};
    probe.src=names[k];
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){find(0)});else find(0);
})();
