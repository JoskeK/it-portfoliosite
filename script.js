// hier komt je code
// console.log("Hallo wereld!");
let knop = document.querySelector(".scroll");
let i = 0;
let scrollAantal = 0;
while (i < knop.length) {
      knop[i].addEventListener("click", function(event) {
         window.scroll({
            top: (window.innerHeight*this.getAttribute("data-factor")),
            left: 0,
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}
