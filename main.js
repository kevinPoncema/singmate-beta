const palabras = new Map([
    ["hola", "videos/Hola.mp4"],
    ["bienvenido", "videos/Bienvenido.mkv"],
    ["para", "videos/Parar.mkv"],
    ["papa", "videos/papa.mp4"],
    ["bien", "videos/bien.mp4"],
    ["no", "videos/no.mp4"],
    ["si", "videos/si.mp4"],
    ["perdon", "videos/perdon.mp4"],
    ["vender", "videos/pal.mp4"],
    ["gato", "videos/gato.mp4"],
    ["vender", "videos/hermoso.mp4"],
    ["vender", "videos/amigo.mp4"],
    ["hermoso", "videos/hermoso.mp4"],
    ["sol", "videos/sol.mp4"],
    ["auto", "videos/auto.mp4"],
    ["casa", "videos/casa.mp4"],
    ["auto", "videos/auto.mp4"],
    ["novio", "videos/novio.mp4"],
    ["novio", "videos/novio.mp4"],
    ["novia", "videos/novia.mp4"],
    ["abuela", "videos/abuela.mp4"],
    ["abuelo", "videos/abuela.mp4"],
    ["esperar", "videos/seperar.mp4"],
    ["ayuda", "videos/ayuda.mp4"],
    ["comida", "videos/comida.mp4"],
    ["nostros", "videos/comida.mp4"],
    ["madre", "videos/madre.mp4"],
    ["padre", "videos/padre.mp4"],
    ["nostros", "videos/comida.mp4"],
]);

let con = 0;
let played = false;
let urlList = [];

function rep() {
    const reproductor = document.getElementById("reproductor");
    const txt = document.getElementById("txt").value;
    const list = txt.split(" ");
    console.log(list);
    
    urlList = [];
    con = 0;

    list.forEach(element => {
        if (palabras.has(element)) {
            urlList.push(palabras.get(element));
        }
    });

    if (urlList.length > 0) {
        reproductor.src = urlList[con];
        played = false;
    } else {
        alert("Lo sentimos, pero no hay ninguna palabra de la frase en nuestra base de datos.");
    }

    reproductor.addEventListener("ended", function() {
        con++;
        if (con < urlList.length) {
            reproductor.src = urlList[con];
            played = false;
        } else {
            con = 0;
            urlList = []
        }
   
    });

    reproductor.addEventListener("loadeddata", function() {
        console.log(con)
        if (!played) {
            reproductor.play();
            played = true;
        }
    });
}









