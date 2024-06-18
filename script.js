
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});


window.addEventListener("scroll", function(){
  let header = document.querySelector('#menu')
  header.classList.toggle('rolagem',window.scrollY > 50 ) /*add classe ao header*/
} )

//FUNCAO ALERTA QUANDO ABRIR
function alertaBemvindo() {
  alert("Seja bem-vindo!");
}



// toda vez que carregar vai aparecer
window.onload = alertaBemvindo;
