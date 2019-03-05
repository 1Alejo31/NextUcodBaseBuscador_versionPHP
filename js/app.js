$( "#mostrarTodos" ).click(function() {
    cargarMasComentarios();
});
//Creacion de condicional de si elemento.precio es menor o igual a y mayor o igual a muestreme de lo contrario no haga nada
function insertarComentarios(comentarios){
    $.each(comentarios,function(indice,elemento){
        var insertar = "<div class='card-panel grey lighten-5 z-depth-1' style='width: 100%'>"+
                            "<div class='row valign-wrapper'>"+
                                "<div class='col s2'>"+
                                    "<img src='./img/home.jpg' width='120' height='200'>"+
                                "</div>"+
                                "<div class='col s10'>"+
                                    "<span class='black-text'>"+
                                        "<p> Direccion: "+elemento.Direccion+"</p>"+
                                        "<p> Ciudad: "+elemento.Ciudad+"</p>"+
                                        "<p> Telefono: "+elemento.Telefono+"</p>"+
                                        "<p> Codigo Postal: "+elemento.Codigo_Postal+"</p>"+
                                      "<p> Tipo: "+elemento.Tipo+"</p>"+
                                        "<p> Precio: "+elemento.Precio+"</p>"+
                                    "</span>"+
                                "</div>"+
                            "</div>"+
                        "</div>";
        $("#comentarios").append(insertar);
    });
}







function  cargarMasComentarios(){

/*Estructura fetch*/

fetch("./data-1.json")
.then(function(respuesta){
    respuesta.json().then(function(datos){
        insertarComentarios(datos);
    });
})
}