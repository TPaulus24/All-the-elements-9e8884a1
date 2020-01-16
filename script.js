var elementH1 = document.getElementById("addClass");
elementH1.classList.add("classy");

var elementparagraphs = document.querySelectorAll("p");

elementparagraphs.forEach(element => {
    element.classList.add("paragraph");
});