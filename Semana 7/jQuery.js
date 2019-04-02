// iniciamos un a vez se ha cargado el DOM de la pagina
$(document).ready(function () {
    imagen = "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg";
    let colores = ["DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "Magenta",
        "MediumSlateBlue",
        "Yellow",
        "YellowGreen",
        "Gold",
        "Gray",
        "Indigo"]
$("#link").attr("href",imagen)
    // iniciamos una vez se ha cargado la imagen
    $('#img').attr("src", imagen).load(function () {
        $("#img").css("filter", "brightness(0)");
        $("#square img").attr("src", imagen);

        // obtenemos informacion sobre la imagen como:
        // - la posicion en la pantalla (top,left)
        // - la anchura y altura
        var imgPosition = $("#img").position();
        imgTop = imgPosition.top;
        imgLeft = imgPosition.left;
        imgHeight = $("#img").height() + imgTop;
        imgWidth = $("#img").width() + imgLeft;

        $("#square img").height($("#img").height());
        $("#square img").width($("#img").width());

        // evento que se ejecuta al mover el raton por encima de la imagen
        $("#img").mousemove(function (event) {
            // posicionamos el recuadro selector en el centro del raton
            mostrarImagen(event);
        });

        // evento que se ejecuta cuando nos movemos por dentro del recuadro
        // selector
        $("#square").mousemove(function (event) {
            $("#square").css("border", "1px solid " + colores[Math.floor((Math.random() * 10) + 0)]);
            // revisamos que estemos dentro de la imagen que deseamos mostrar
            if (event.pageY > imgTop && event.pageY < imgHeight && event.pageX > imgLeft && event.pageX < imgWidth) {
                mostrarImagen(event);
            }
        });

        function mostrarImagen(event) {
            // Posicionamos el recuadro en la posicion del raton
            $("#square").css({ "top": event.pageY - 50, "left": event.pageX - 50 });

            // Preparamos la posición de la imagen a aumentar
            y = -((event.pageY - imgTop) - 50);
            x = -((event.pageX - imgLeft) - 50);

            $("#square img").css({ "top": y, "left": x });

        }
    });
});