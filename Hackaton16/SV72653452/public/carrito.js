let carrito = [];



function agregarAlCarrito(videojuego, imgId, precio) {
  const imgSrc = document.getElementById(imgId).src;
  // Asegúrate de que el precio sea un número válido
  precio = parseFloat(precio.replace('$', '')); // Convierte el precio a un número

  carrito.push({ nombre: videojuego, imagen: imgSrc, cantidad: 1, precio: precio });
  actualizarCarrito();
}
  
  function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const itemsCarrito = document.getElementById('items-carrito');
    itemsCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.imagen;
        li.appendChild(img);
        li.appendChild(document.createTextNode(item.nombre + ' - Cantidad: ' + item.cantidad));
        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.onclick = function() { eliminarDelCarrito(index); };
        li.appendChild(button);
        const buttonMas = document.createElement('button');
        buttonMas.textContent = 'Agregar más';
        buttonMas.onclick = function() { agregarMas(index); };
        li.appendChild(buttonMas);
        itemsCarrito.appendChild(li);
    });
}

function agregarMas(index) {
    carrito[index].cantidad++;
    actualizarCarrito();
}
  


function comprar() {

  if (carrito.length === 0) {
    alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    return;
}

    fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ carrito: carrito })  // Incluye los datos del carrito en el cuerpo de la solicitud
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
    alert('Gracias por tu compra!');
}




  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Informa al usuario si hubo un error
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Envia el token a tu servidor
        stripeTokenHandler(result.token);
      }
    });
  });
  