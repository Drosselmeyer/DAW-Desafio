var i=0;
var Tiendita = new Array();

function init(){
		//var buttonGuardar = document.getElementById("Enviar");
		var container = document.getElementsByClassName("container");
      var buttonMostrar = document.getElementById("Mostrar");

      var buttonGuardar = document.createElement('button');
      buttonGuardar.classList.add("btn-primary");
      buttonGuardar.classList.add("btn");
      buttonGuardar.appendChild(document.createTextNode("Guardar datos, ejemplo"));

      container[0].appendChild(buttonGuardar);

      buttonGuardar.addEventListener("click",guardarInformacion);
      buttonMostrar.addEventListener("click",mostrarInformacion);

}

function guardarInformacion(){
   let inputId = document.getElementById("inputId").value;
   let inputNombre = document.getElementById("inputNombre").value;
   let inputTipo = document.getElementById("inputTipo").value;
   let inputCosto = document.getElementById("inputCosto").value;
   let inputPrecio = document.getElementById("inputPrecio").value;

   var ok = true;

   var regNum = new RegExp('[0-9]+');
   var regText = new RegExp('[A-Za-z ]+');
   var regPrecio = new RegExp('[0-9]+.?[0-9]{0,2}');

   var mensaje = "Errores: ";

   if(!regNum.test(inputId))
   {
      mensaje += " El id es incorrecto ";
      ok = false;
   }
   if(!regText.test(inputNombre))
   {
      mensaje += " El nombre es incorrecto ";
      ok = false;
   }
   if(!regText.test(inputTipo))
   {
      mensaje += " El tipo es incorrecto ";
      ok = false;
   }
   if(!regPrecio.test(inputCosto))
   {
      mensaje += " El costo es incorrecto ";
      ok = false;
   }
   if(!regPrecio.test(inputCosto))
   {
      mensaje += " El precio es incorrecto ";
      ok = false;
   }
  
   let men = document.getElementById('error');

   while(men.hasChildNodes()){
      men.removeChild(men.firstChild);
   }

   if(ok)
   {
      Tiendita[i] = new Producto(inputId,inputNombre,inputTipo,inputCosto,inputPrecio);
   }
   else
   {
      men.appendChild(document.createTextNode(mensaje));
   }

   inputId.value = " ";
   inputNombre.value = " ";
   inputTipo.value = " ";
   inputCosto.value = " ";
   inputPrecio.value = " ";

   document.getElementById("formProducto").reset();

   console.log(Tiendita);
   i++;


}

function mostrarInformacion(){
   let tabla = document.getElementById("MostrarProd");
   let encabezados = ["Id","Nombre","Tipo","Costo","Precio"];
   let tablaEncabezado = document.createElement('thead');
   let tablaFilaEncabezado = document.createElement('tr')
   let tablaCuerpo = document.createElement('tbody');

   while(tabla.hasChildNodes()){
      tabla.removeChild(tabla.firstChild);
   }
   
   encabezados.forEach(encabezado =>{
      let encabezadoTabla = document.createElement('th');
      encabezadoTabla.innerText = encabezado;
      tablaFilaEncabezado.appendChild(encabezadoTabla);
   })
   
   tablaEncabezado.append(tablaFilaEncabezado);
   tabla.append(tablaEncabezado);

   Tiendita.forEach(tienda =>{
      let tablaFilaCuerpo = document.createElement('tr');
      
      Object.values(tienda).forEach(prod =>{
         celda = document.createElement('td');
         celda.append(document.createTextNode(prod));
         tablaFilaCuerpo.appendChild(celda);
      })
      
      tablaCuerpo.appendChild(tablaFilaCuerpo);

   })

   tabla.append(tablaCuerpo);

}



window.onload = init();