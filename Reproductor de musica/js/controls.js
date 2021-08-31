/*En este script se crearan las funciones de los controles del reproductor*/

var Play = document.getElementById("play");//Boton play
var pause = document.getElementById("pause");//Boton pause
var siguiente = document.getElementById("siguiente");//boton siguiente
var anterior = document.getElementById("anterior");//boton anterior

var volumen = document.getElementById("volumen");// boton de volumen
var mute = document.getElementById("mute");// boton de mute
var compartir = document.getElementById("compartir");//boton compartir

var barra = document.getElementById("barra");//Barra que sigue la cancion
var time = document.getElementById("time"); //Contador de la cancion 

var miniatura = document.getElementById("miniatura");//miniatura de las canciones
var titulo = document.getElementById("titulo");
var artista = document.getElementById("artista");

var audio = new Audio();//Objeto audio

current = 0;


/*Este array almacena todas las canciones*/
var musica = ["music/The Weeknd - Save Your Tears.mp3", 
              "music/The Weeknd - The Hills.mp3",
              "music/Farruko - Pepas.mp3"];
     
/*Este array almacena todos los titulos de las canciones*/
var title = ["Save Your Tears", 
             "The Hills",
             "Pepas"];

/*Este array almacena todos los artista de las canciones*/
var artistas = ["The Weeknd",
               "The Weeknd",
               "Farruko"
            
               ];

/*Este array almacena todas las imagenes de las canciones*/
var img = ["img/save your tears.jpg",
           "img/hills.jpg",
           "img/pepas.jpg"];



/*Este bloque de codigo hace que cuando la cancion que se este reproduciendo termine 
automaticamente empieze la siguiente */
audio.addEventListener("ended", function (params) {
    current++;
    audio.src = musica[current]; 
    audio.play(); // play a la musica
    miniatura.src = img[current];
    titulo.innerHTML = title[current];
    artista.innerHTML = artistas[current];

    /* Si la variable current exede el limite de array entonces que vuelva a ser cero */
    if (current >= 3) {
        current = 0;
        audio.src = musica[current]; 
        audio.play(); // play a la musica
        miniatura.src = img[current];
        titulo.innerHTML = title[current];
        artista.innerHTML = artistas[current];
    }
});


/*Funcion de play, cuando se de click se cambiara el atributo de objeto audio y comensara a reproducirse las 
cancion*/
Play.addEventListener("click", function (params) {
    audio.src = musica[current]; 
    audio.play(); // play a la musica
    miniatura.src = img[current];
    titulo.innerHTML = title[current];
    artista.innerHTML = artistas[current];


    Play.style.display = "none";
    pause.style.display = "initial";
    
});

pause.addEventListener("click", function (params) {
 audio.pause();
 Play.style.display = "initial";
 pause.style.display = "none";
    
});

siguiente.addEventListener("click", function (params) {
    current++;
    audio.src = musica[current]; 
    audio.play(); // play a la musica
    miniatura.src = img[current];
    titulo.innerHTML = title[current];
    artista.innerHTML = artistas[current];

    /* Si la variable current exede el limite de array entonces que vuelva a ser cero */
    if (current >= 3) {
        current = 0;
        audio.src = musica[current]; 
        audio.play(); // play a la musica
        miniatura.src = img[current];
        titulo.innerHTML = title[current];
        artista.innerHTML = artistas[current];
    }

});

anterior.addEventListener("click", function (params) {
    current--;
    audio.src = musica[current]; 
    audio.play(); // play a la musica
    miniatura.src = img[current];
    titulo.innerHTML = title[current];
    artista.innerHTML = artistas[current];

    /* Si la variable current exede el limite de array entonces que vuelva a ser 1 */
    if (current < 0) {
        current = 2;
        audio.src = musica[current]; 
        audio.play(); // play a la musica
        miniatura.src = img[current];
        titulo.innerHTML = title[current];
        artista.innerHTML = artistas[current];
    }
});


//Codigo del boton de volumen
/*En este bloque es tan facil como decir que al presionar click en el boton volumen
que el audio se igual a cero y con un estilo css desaparesca el boton de volumen y aparezca 
el boton de mute*/
volumen.addEventListener("click", function (params) {
audio.volume = 0;
volumen.style.display = "none";
mute.style.display = "initial";
});


//Codigo del boton mute
mute.addEventListener("click", function (params) {
audio.volume = 1;
volumen.style.display = "initial";
mute.style.display = "none";
    
});


//Codigo de la barra del timer 
/*Aqui basicamente le estamos diciendo que la posicion del la barra sea igual a tiempo de la cancion
lo cual lo hacemos dividiendo la posicion de la cancion con la duracion.

nota: este bloque de codigo lo saque de un canal de youtube: https://www.youtube.com/watch?v=9JUp1lBlkxE&t=1759s*/

audio.addEventListener("timeupdate", function (params) {
    var timer =  audio.currentTime / audio.duration;
    barra.style.width = timer * 110;

}); 


/*Boton de compartir un es en planeacion por el momento solo tendra una alerta que 
personalizada, esta es la libreria: https://sweetalert2.github.io/*/

compartir.addEventListener("click", function (params) {
 swal.fire({
  title: "LO SENTIMOS",
  text: "El siguiente boton aun no esta activado",
  icon: "error"
  

 });

});
