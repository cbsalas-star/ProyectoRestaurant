document.addEventListener('DOMContentLoaded', function () {

  // 1. LÓGICA DEL BOTÓN "VER OFERTA DEL MOMENTO" (ESPECIAL DEL DÍA)
  const btnCambiar = document.getElementById('btnCambiarEspecial');
  const cardTexto = document.getElementById('cardTexto');
  const cardImagen = document.getElementById('cardImagen');
  const cardTitulo = document.getElementById('cardTitulo');

  let esOfertaEspecial = false;

  if (btnCambiar) {
    btnCambiar.addEventListener('click', function () {
      if (!esOfertaEspecial) {
        cardTitulo.textContent = '¡Combo Dragón Imperial en Descuento!';
        cardTexto.textContent = 'Incluye Chow Mein con pollo, 2 Rollos Primavera y Té Verde por solo $149 MXN (Válido solo por hoy).';
        cardImagen.src = 'chow-mein-con-pollo.jpg';

        btnCambiar.textContent = 'Volver al Especial Normal';
        btnCambiar.className = 'btn btn-outline-danger rounded-pill px-4';
        esOfertaEspecial = true;
      } else {
        cardTitulo.textContent = 'Pollo a la Naranja';
        cardTexto.textContent = 'Crujientes trozos de pollo bañados en salsa agridulce de naranja. ¡Aprovecha la promoción de hoy!';
        cardImagen.src = 'pollo-naranja.avif';

        btnCambiar.textContent = 'Ver Oferta del Momento';
        btnCambiar.className = 'btn btn-danger rounded-pill px-4';
        esOfertaEspecial = false;
      }
    });
  }

  // 2. ACTIVIDAD 1: SELECCIÓN DE PRODUCTO (MANIPULACIÓN CON CLASSLIST)
  [1, 2, 3, 4].forEach(i => {
    const card = document.getElementById(`cardPlatillo${i}`);
    const texto = document.getElementById(`textoSeleccion${i}`);
    const btnSel = document.getElementById(`btnSeleccionar${i}`);
    const btnRet = document.getElementById(`btnRetirar${i}`);

    if (btnSel && btnRet && card && texto) {
      // Botón 1 (Seleccionar)
      btnSel.addEventListener('click', function () {
        card.classList.add('border', 'border-success', 'border-2', 'shadow-lg');
        texto.classList.remove('d-none');
        texto.textContent = '✓ Producto seleccionado';
      });

      // Botón 2 (Retirar)
      btnRet.addEventListener('click', function () {
        card.classList.remove('border', 'border-success', 'border-2', 'shadow-lg');
        texto.classList.add('d-none');
      });
    }
  });

  // 3. PROCESAMIENTO DEL FORMULARIO DE PEDIDO
  const formPedido = document.getElementById('formPedido');
  const alertaExitoPedido = document.getElementById('alertaExitoPedido');

  if (formPedido) {
    formPedido.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita que el navegador recargue la página

      // Muestra la alerta de confirmación en pantalla
      if (alertaExitoPedido) {
        alertaExitoPedido.classList.remove('d-none');
      }

      // Alerta emergente opcional
      alert('¡Pedido realizado con éxito! Tu orden ha sido recibida.');

      // Resetea los campos del formulario
      formPedido.reset();

      // Oculta el mensaje de éxito automáticamente después de 5 segundos
      setTimeout(() => {
        if (alertaExitoPedido) {
          alertaExitoPedido.classList.add('d-none');
        }
      }, 5000);
    });
  }

  // 4. ENLACE "HACER PEDIDO" EN LA NAVEGACIÓN SUPERIOR
  const linkNavPedido = document.getElementById('linkNavPedido');
  const pedidoTabButton = document.getElementById('pedido-tab');

  if (linkNavPedido && pedidoTabButton) {
    linkNavPedido.addEventListener('click', function (e) {
      e.preventDefault();
      const tabTrigger = new bootstrap.Tab(pedidoTabButton);
      tabTrigger.show();
      document.getElementById('sec-pedido').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 5. AGREGAR IMÁGENES DINÁMICAMENTE A LA GALERÍA
  const inputUrlImagen = document.getElementById('inputUrlImagen');
  const btnAgregarImagen = document.getElementById('btnAgregarImagen');
  const galeriaImagenes = document.getElementById('galeriaImagenes');

  if (btnAgregarImagen && inputUrlImagen && galeriaImagenes) {
    // 5a. addEventListener para detectar el clic en el botón de agregar imagen
    btnAgregarImagen.addEventListener('click', function () {
      const url = inputUrlImagen.value.trim();

      if (url !== '') {
        // Columna contenedor de la rejilla Bootstrap
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

        // 5b. document.createElement() para crear el nuevo elemento de imagen
        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = url;
        nuevaImagen.alt = 'Imagen de la galería';
        nuevaImagen.className = 'img-fluid rounded-3 shadow-sm w-100';
        nuevaImagen.style.height = '200px';
        nuevaImagen.style.objectFit = 'cover';

        colDiv.appendChild(nuevaImagen);

        // 5c. appendChild() para agregar la nueva imagen al contenedor de la galería
        galeriaImagenes.appendChild(colDiv);

        // Limpiar el campo de entrada
        inputUrlImagen.value = '';
      } else {
        alert('Por favor, ingresa una URL de imagen válida.');
      }
    });
  }

});