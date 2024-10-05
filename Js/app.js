let rojo=document.getElementById("rojo");
let verde=document.getElementById("verde");
let azul=document.getElementById("azul");

rojo.addEventListener('input', () => {
    document.body.style.backgroundColor = 'rgb(' + rojo.value + ',' + verde.value + ',' + azul.value + ')';
});

verde.addEventListener('input', () => {
    document.body.style.backgroundColor = 'rgb(' + rojo.value + ',' + verde.value + ',' + azul.value + ')';
});

azul.addEventListener('input', () => {
    document.body.style.backgroundColor = 'rgb(' + rojo.value + ',' + verde.value + ',' + azul.value + ')';
});
