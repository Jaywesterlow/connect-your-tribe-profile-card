function switchArt() {
    var art1 =document.getElementById("article-1"); 
    var art2 = document.getElementById("article-2");

    art1.classList.toggle("article-1__front")
    art1.classList.toggle("article-1__back")
    art2.classList.toggle("article-2__front")
    art2.classList.toggle("article-2__back")
}
