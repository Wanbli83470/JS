var user = prompt("Saisissez le numéro du titre : ")
alert(user)
const titres = document.querySelectorAll("h1");

function goToTitle(titre){
    const distance = titre.offsetTop;
    console.log(titre.offsetTop);
    window.scrollTo(0, distance);
}

goToTitle(titres[user]);