function abrirGaleria(tipo){

  const modal = document.getElementById("modal");
  const conteudo = document.getElementById("modal-conteudo");

  const base = {
    feminino:["f1.jpg","f2.jpg","f3.jpg","f4.jpg","f5.jpg","f6.jpg"],
    masculino:["m1.jpg","m2.jpg","m3.jpg","m4.jpg","m5.jpg","m6.jpg"],
    infantil:["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg"],
    adulto:["a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg","a6.jpg"],
    joias:["j1.jpg","j2.jpg","j3.jpg","j4.jpg","j5.jpg","j6.jpg"],
    perfumes:["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg"],
    relogios:["r1.jpg","r2.jpg","r3.jpg","r4.jpg","r5.jpg","r6.jpg"],
    bolsas:["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg"],
    sandalias:["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg","s6.jpg"],
    toalhas:["t1.jpg","t2.jpg","t3.jpg","t4.jpg","t5.jpg","t6.jpg"],
    cama:["c1.jpg","c2.jpg","c3.jpg","c4.jpg","c5.jpg","c6.jpg"]
  };

  conteudo.innerHTML = "";

  if(base[tipo] && base[tipo].length > 0){

    base[tipo].forEach(img => {

      const imagem = document.createElement("img");
      imagem.src = "images/" + img;

      conteudo.appendChild(imagem);

    });

  } else {

    conteudo.innerHTML = "<p style='color:white;text-align:center'>Em breve novidades...</p>";

  }

  modal.style.display = "block";
}


// 🔥 fechar no X
function fecharModal(){
  document.getElementById("modal").style.display = "none";
}


// 🔥 fechar clicando fora
window.onclick = function(event){
  const modal = document.getElementById("modal");

  if(event.target === modal){
    modal.style.display = "none";
  }
}


// 🔥 ANIMAÇÃO AO ROLAR
const elementos = document.querySelectorAll("section, .card");

const animar = () => {
  const topo = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;

    if(pos < topo){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

elementos.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s";
});

window.addEventListener("scroll", animar);
animar();