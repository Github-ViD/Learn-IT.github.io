const body = document.body;
const array_a = document.getElementsByTagName("a");

function changeMode(){
    body.classList.toggle("blackMode");
    for(let i=0;i<array_a.length;i++){
        array_a[i].classList.toggle("system");
    }
}