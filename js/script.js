function mudouTamanho() {
    if(window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = "none";
    }
}
function showMenu() {
    if(itens.style.display == "none") {
        itens.style.display = "block";
    } else {
        itens.style.display = "none";
    }
}
