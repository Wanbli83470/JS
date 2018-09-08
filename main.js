const newElement = document.createTextNode("Hello c'est Dixie");
document.body.appendChild(newElement);

const coucou = document.body.getElementsByTagName("p")[0];

coucou.style.color = "#C55";

newElement.style.color = "#C55";