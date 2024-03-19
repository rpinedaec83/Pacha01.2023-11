let carrito = [];
let stripe;


document.addEventListener('DOMContentLoaded', function() {
 
  stripe = Stripe('pk_test_51Ow6H1LhefJPPZ8eK39qzTGu9P9dCPmphuqPcKYpfKnyW2Vtj6Vcihj6kDxoGxirjNMS3gy2VbPkCc6NdobBF5pj00cK1hFib6');


  const form = document.getElementById('formulario');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    stripe.createToken(card).then(function(result) {
      if (result.error) {

        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
  
        stripeTokenHandler(result.token);
      }
    });
  });
});

function agregar(videojuego, imgId, precio) {
  const imagen = document.getElementById(imgId).cloneNode(true);
  imagen.classList.add("imagen-carrito");
  const imgSrc = imagen.src;
  precio = parseFloat(precio); 
  carrito.push({ nombre: videojuego, imagen: imgSrc, cantidad: 1, precio: precio });
  updateCart();
}
  
function deleteCart(index) {
  carrito.splice(index, 1);
  updateCart();
}
  
function updateCart() {
  const itemsCarrito = document.getElementById('productos-carrito-tbody');
  itemsCarrito.innerHTML = '';
  
  carrito.forEach((item, index) => {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.imagen;
      img.classList.add("imagen-carrito"); 
      img.style.height = '150px';
      img.style.width = '250px';
      td.appendChild(img);
      tr.appendChild(td);
      td = document.createElement('td');
      td.appendChild(document.createTextNode(item.cantidad));
      tr.appendChild(td);
      td = document.createElement('td');
      const button = document.createElement('button');
      button.textContent = 'Eliminar';
      button.classList='btn btn-danger';
      button.onclick = function() { deleteCart(index); };
      td.appendChild(button);
      const buttonAdd = document.createElement('button');
      buttonAdd.textContent = '+';
      buttonAdd.onclick = function() { aumentar(index); };
      buttonAdd.classList='btn btn-success';
      td.appendChild(buttonAdd);
      const buttonRest = document.createElement('button');
      buttonRest.textContent = '-';
      buttonRest.onclick = function() { disminuir(index); };
      buttonRest.classList='btn btn-primary';
      td.appendChild(buttonRest);
      tr.appendChild(td);
      itemsCarrito.appendChild(tr);
      
  });
  
}

function aumentar(index) {
  carrito[index].cantidad++;
  updateCart();
}

function disminuir(index) {
  carrito[index].cantidad--;
  if(carrito[index].cantidad < 0){
    carrito[index].cantidad++;
  }
  updateCart();
}

function send() {
  if (carrito.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de continuar');
    return;
  }

  fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ carrito: carrito }) 
  })

  .then(function(response) {
    return response.json();
  })
  .then(function(session) {
    return stripe.redirectToCheckout({ sessionId: session.id });
  })
  .then(function(result) {
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
  alert('Compra completada!');
}
