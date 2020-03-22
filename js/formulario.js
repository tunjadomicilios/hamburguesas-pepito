document.querySelector('#enviar').addEventListener('click',function(){
    
    let nombre = document.querySelector('#nombre').value;
    let pedido = document.querySelector('#pedido').value;
    let cantidad = document.querySelector('#cantidad').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;

    if(nombre ===""|| pedido===""||cantidad===""||direccion===""){
        alert("por favor ingresa todos los campos")
        return null;
    }else{
          let url = "https://api.whatsapp.com/send?phone=573107809191&text=*_Hamburguesas_Pepito*%0A*Pedidos*%0A%0A*¿Cual es tu nombre?*%0A" + nombre + "%0A*tu pedido:*%0A" + pedido + "%0A*Cantidad:*%0A" + cantidad + "%0A*Tu telefono es:*%0A" + telefono + "%0A*¿Tu direccion es:?*%0A" + direccion + "%0A*si todo lo anterior es correcto por favor confirma el pedido*%0A";
    window.open(url);
    }
  

});
